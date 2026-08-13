-- K-Youth Mission 01 — Snowflake Reference Solution
-- Assumption: CSVs have already been loaded to TRAINING_RAW.RAW_COMPANIES,
-- TRAINING_RAW.RAW_FUNDING and TRAINING_RAW.RAW_MILESTONES with columns matching the training files.

CREATE SCHEMA IF NOT EXISTS TRAINING_CURATED;
CREATE SCHEMA IF NOT EXISTS TRAINING_ANALYTICS;
CREATE SCHEMA IF NOT EXISTS TRAINING_QUARANTINE;

CREATE OR REPLACE TABLE TRAINING_CURATED.DIM_COMPANY AS
WITH src AS (
  SELECT *,
    CASE
      WHEN UPPER(TRIM(company_name)) = 'NEXA ROBOTICS SDN. BHD.' THEN 'C001'
      WHEN company_id IN ('C002','C012') OR UPPER(REPLACE(company_name,' ','')) LIKE 'BIONOVA%' THEN 'C002'
      ELSE company_id
    END AS canonical_company_id
  FROM TRAINING_RAW.RAW_COMPANIES
), ranked AS (
  SELECT *, ROW_NUMBER() OVER (
    PARTITION BY canonical_company_id
    ORDER BY CASE WHEN company_id = canonical_company_id THEN 0 ELSE 1 END, company_name
  ) AS rn
  FROM src
  WHERE canonical_company_id IS NOT NULL
)
SELECT
  canonical_company_id AS company_id,
  CASE WHEN canonical_company_id='C001' THEN 'Nexa Robotics Sdn Bhd'
       WHEN canonical_company_id='C002' THEN 'BioNova Labs Sdn. Bhd.'
       ELSE company_name END AS company_name,
  CASE WHEN UPPER(TRIM(state))='KL' THEN 'Kuala Lumpur' ELSE INITCAP(TRIM(state)) END AS state,
  CASE WHEN LOWER(REPLACE(sector,' ',''))='biotech' OR LOWER(REPLACE(sector,' ',''))='biotechnology' THEN 'Biotechnology'
       WHEN LOWER(REPLACE(sector,' ',''))='cleantech' THEN 'CleanTech'
       WHEN LOWER(REPLACE(sector,' ',''))='healthtech' THEN 'HealthTech'
       WHEN LOWER(REPLACE(sector,' ',''))='agritech' THEN 'AgriTech'
       ELSE INITCAP(TRIM(sector)) END AS sector,
  INITCAP(TRIM(programme)) AS programme,
  cohort_year,
  contact_owner,
  IFF(UPPER(TRIM(active_flag)) IN ('Y','YES','TRUE','1'), TRUE, FALSE) AS is_active
FROM ranked WHERE rn=1;

CREATE OR REPLACE TABLE TRAINING_QUARANTINE.DQ_EXCEPTIONS AS
SELECT 'FUNDING' AS source_table, application_id AS record_id, company_name,
       'UNMATCHED_COMPANY' AS exception_type,
       'Funding row cannot be matched to canonical company master' AS exception_detail
FROM TRAINING_RAW.RAW_FUNDING f
LEFT JOIN TRAINING_CURATED.DIM_COMPANY c
  ON UPPER(REPLACE(TRIM(f.company_name),'.','')) = UPPER(REPLACE(TRIM(c.company_name),'.',''))
WHERE c.company_id IS NULL AND UPPER(TRIM(f.company_name)) <> 'NEXA ROBOTICS SDN. BHD.'
  AND UPPER(REPLACE(f.company_name,' ','')) NOT LIKE 'BIONOVA%';

CREATE OR REPLACE TABLE TRAINING_CURATED.FACT_FUNDING AS
SELECT f.application_id,
  CASE WHEN UPPER(TRIM(f.company_name))='NEXA ROBOTICS SDN. BHD.' THEN 'C001'
       WHEN UPPER(REPLACE(f.company_name,' ','')) LIKE 'BIONOVA%' THEN 'C002'
       ELSE c.company_id END AS company_id,
  f.scheme, f.approved_amount_rm, f.disbursed_amount_rm, f.approval_date,
  UPPER(TRIM(f.status)) AS raw_status,
  CASE WHEN UPPER(TRIM(f.status)) IN ('APPROVED') THEN 'Approved'
       WHEN UPPER(TRIM(f.status)) IN ('COMPLETED') THEN 'Completed'
       WHEN UPPER(TRIM(f.status)) IN ('PENDING DOCS') THEN 'Pending Docs'
       WHEN UPPER(TRIM(f.status))='ON HOLD' THEN 'On Hold'
       WHEN UPPER(TRIM(f.status))='SUBMITTED' THEN 'Submitted'
       ELSE INITCAP(TRIM(f.status)) END AS status,
  f.source_channel
FROM TRAINING_RAW.RAW_FUNDING f
LEFT JOIN TRAINING_CURATED.DIM_COMPANY c
  ON UPPER(REPLACE(TRIM(f.company_name),'.','')) = UPPER(REPLACE(TRIM(c.company_name),'.',''))
WHERE f.application_id NOT IN (SELECT record_id FROM TRAINING_QUARANTINE.DQ_EXCEPTIONS);

CREATE OR REPLACE TABLE TRAINING_CURATED.FACT_MILESTONE AS
SELECT m.milestone_id,
  CASE WHEN UPPER(TRIM(m.company_name))='NEXA ROBOTICS SDN. BHD.' THEN 'C001'
       WHEN UPPER(REPLACE(m.company_name,' ','')) LIKE 'BIONOVA%' THEN 'C002'
       ELSE c.company_id END AS company_id,
  m.milestone, m.due_date, m.completion_date, m.milestone_status AS raw_status,
  IFF(m.completion_date IS NULL, TRUE, FALSE) AS is_open,
  IFF(m.completion_date IS NULL AND m.due_date < '2026-08-21', TRUE, FALSE) AS is_past_due,
  IFF(UPPER(TRIM(m.follow_up_required))='YES', TRUE, FALSE) AS follow_up_required,
  m.owner
FROM TRAINING_RAW.RAW_MILESTONES m
LEFT JOIN TRAINING_CURATED.DIM_COMPANY c
  ON UPPER(REPLACE(TRIM(m.company_name),'.','')) = UPPER(REPLACE(TRIM(c.company_name),'.',''));

CREATE OR REPLACE VIEW TRAINING_ANALYTICS.MANAGEMENT_KPI AS
SELECT
  (SELECT COUNT(*) FROM TRAINING_CURATED.DIM_COMPANY) AS canonical_companies,
  (SELECT COUNT_IF(is_active) FROM TRAINING_CURATED.DIM_COMPANY) AS active_companies,
  (SELECT SUM(approved_amount_rm) FROM TRAINING_RAW.RAW_FUNDING) AS recorded_approved_rm,
  (SELECT SUM(disbursed_amount_rm) FROM TRAINING_RAW.RAW_FUNDING) AS recorded_disbursed_rm,
  (SELECT COUNT_IF(is_open) FROM TRAINING_CURATED.FACT_MILESTONE) AS open_milestones,
  (SELECT COUNT_IF(is_past_due) FROM TRAINING_CURATED.FACT_MILESTONE) AS past_due_open_milestones,
  (SELECT COUNT_IF(owner IS NULL OR TRIM(owner)='') FROM TRAINING_CURATED.FACT_MILESTONE WHERE is_open) AS missing_milestone_owners,
  (SELECT COUNT(*) FROM TRAINING_QUARANTINE.DQ_EXCEPTIONS) AS critical_exceptions;
