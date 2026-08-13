# Power Query Data Clean-up Lab — Event Registration Operations

## Business situation
Event registration information arrives from forms, email and manual entry. A programme coordinator spends time reconciling duplicate registrations, inconsistent dates/statuses, payment status and follow-up requests.

## Files
- event_registrations.csv
- participant_details.csv
- payment_records.csv
- feedback_forms.csv

## Required transformation
1. Trim email and text fields.
2. Standardise date types.
3. Standardise attendance / payment / consent values.
4. Flag duplicate registration emails rather than silently deleting without explanation.
5. Merge participant details and payment status.
6. Add `needs_follow_up` when feedback requests follow-up or payment is pending.
7. Produce one clean attendee table and one exception table.

## Deliverable
A refreshable Power Query model plus an exported clean table and a 5-line note describing what manual work was eliminated.
