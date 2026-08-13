-- K-Youth Mission 02 — Repeatable Pipeline Reference Patterns
-- Demonstrates deterministic upsert, validation, quarantine and run logging.

CREATE TABLE IF NOT EXISTS TRAINING_ANALYTICS.PIPELINE_RUN_LOG (
  run_id STRING, run_ts TIMESTAMP_TZ, source_rows NUMBER, accepted_rows NUMBER,
  rejected_rows NUMBER, duplicate_keys NUMBER, unmatched_companies NUMBER,
  financial_rule_failures NUMBER, run_status STRING, notes STRING
);

-- 1) Stage incoming data in TRAINING_RAW.INCOMING_FUNDING.
-- 2) Critical validation view.
CREATE OR REPLACE TEMP VIEW V_INCOMING_FUNDING_CHECK AS
SELECT i.*,
  IFF(i.disbursed_amount_rm > i.approved_amount_rm, 1, 0) AS financial_rule_failure,
  IFF(c.company_id IS NULL, 1, 0) AS unmatched_company
FROM TRAINING_RAW.INCOMING_FUNDING i
LEFT JOIN TRAINING_CURATED.DIM_COMPANY c
  ON UPPER(REPLACE(TRIM(i.company_name),'.','')) = UPPER(REPLACE(TRIM(c.company_name),'.',''));

-- 3) Quarantine any critical row.
INSERT INTO TRAINING_QUARANTINE.DQ_EXCEPTIONS(source_table,record_id,company_name,exception_type,exception_detail)
SELECT 'INCOMING_FUNDING', application_id, company_name,
       CASE WHEN financial_rule_failure=1 THEN 'DISBURSED_GT_APPROVED' ELSE 'UNMATCHED_COMPANY' END,
       CASE WHEN financial_rule_failure=1 THEN 'Disbursed amount exceeds approved amount' ELSE 'Company not found in canonical dimension' END
FROM V_INCOMING_FUNDING_CHECK
WHERE financial_rule_failure=1 OR unmatched_company=1;

-- 4) MERGE valid rows by application_id: rerunning the same record must update, not duplicate.
MERGE INTO TRAINING_CURATED.FACT_FUNDING tgt
USING (
  SELECT * FROM V_INCOMING_FUNDING_CHECK WHERE financial_rule_failure=0 AND unmatched_company=0
) src
ON tgt.application_id = src.application_id
WHEN MATCHED THEN UPDATE SET
  tgt.approved_amount_rm = src.approved_amount_rm,
  tgt.disbursed_amount_rm = src.disbursed_amount_rm,
  tgt.status = INITCAP(src.status),
  tgt.source_channel = src.source_channel
WHEN NOT MATCHED THEN INSERT
  (application_id,company_id,scheme,approved_amount_rm,disbursed_amount_rm,approval_date,raw_status,status,source_channel)
VALUES
  (src.application_id,src.company_id,src.scheme,src.approved_amount_rm,src.disbursed_amount_rm,src.approval_date,UPPER(src.status),INITCAP(src.status),src.source_channel);

-- Acceptance rule:
-- Critical referential-integrity or financial-rule failures => BLOCK trusted KPI refresh.
-- Warning-level issues may proceed only when documented.
