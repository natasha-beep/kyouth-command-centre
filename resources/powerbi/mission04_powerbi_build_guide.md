# Mission 04 — Power BI Management Product Build Guide

## Audience
Management reviewing programme portfolio performance.

## Data model
- `DIM_COMPANY[company_id]` 1 → many `FACT_FUNDING[company_id]`
- `DIM_COMPANY[company_id]` 1 → many `FACT_MILESTONE[company_id]`
- Keep DQ exceptions visible; do not force unmatched records into the trusted model.

## Required measures
```DAX
Total Approved RM = SUM(FACT_FUNDING[approved_amount_rm])
Total Disbursed RM = SUM(FACT_FUNDING[disbursed_amount_rm])
Disbursement % = DIVIDE([Total Disbursed RM],[Total Approved RM])
Active Companies = CALCULATE(DISTINCTCOUNT(DIM_COMPANY[company_id]), DIM_COMPANY[is_active] = TRUE())
Open Milestones = CALCULATE(COUNTROWS(FACT_MILESTONE), FACT_MILESTONE[is_open] = TRUE())
Past Due Open = CALCULATE(COUNTROWS(FACT_MILESTONE), FACT_MILESTONE[is_past_due] = TRUE())
Missing Owners = CALCULATE(COUNTROWS(FACT_MILESTONE), FACT_MILESTONE[is_open] = TRUE(), ISBLANK(FACT_MILESTONE[owner]))
```

## One-page layout
1. KPI strip: active companies, approved, disbursed, disbursement %, open milestones, past due.
2. Risk panel: overdue milestones by company + owner.
3. Funding view: approved vs disbursed by scheme or programme.
4. Data quality panel: unmatched records, missing owners, duplicate/canonicalisation note.
5. Management actions: three prioritised actions.

## Acceptance test
Every visual must answer a management question. Every KPI must reconcile to the trusted analytical layer. No raw inconsistent labels should appear in the executive view.
