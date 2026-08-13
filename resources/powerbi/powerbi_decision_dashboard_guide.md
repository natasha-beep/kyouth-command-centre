# Power BI Decision Dashboard — Build Guide

## Stakeholder question
Which portfolio records require management attention, and can management trust the headline funding and milestone figures?

## Model
- DIM_COMPANY (1) → FACT_FUNDING (many) on company_id
- DIM_COMPANY (1) → FACT_MILESTONE (many) on company_id
- DQ_EXCEPTIONS remains visible as an exception table/card

## Core measures
```DAX
Total Approved RM = SUM(FACT_FUNDING[approved_amount_rm])
Total Disbursed RM = SUM(FACT_FUNDING[disbursed_amount_rm])
Disbursement % = DIVIDE([Total Disbursed RM],[Total Approved RM])
Open Milestones = CALCULATE(COUNTROWS(FACT_MILESTONE), ISBLANK(FACT_MILESTONE[completion_date]))
Past Due Open = CALCULATE(COUNTROWS(FACT_MILESTONE), FACT_MILESTONE[is_past_due] = TRUE())
Data Quality Exceptions = COUNTROWS(DQ_EXCEPTIONS)
```

## Required page
1. KPI strip: canonical companies, active companies, approved, disbursed, disbursement %, open milestones, past-due open, DQ exceptions.
2. Risk table: company, milestone, due date, owner, days overdue, follow-up flag.
3. Funding visual: approved vs disbursed by scheme or programme.
4. Exception panel: unmatched / missing owner / financial-rule issues.
5. Management actions: three prioritised actions written in plain language.

## Design test
A director should understand the top risk and next action within 20 seconds.
