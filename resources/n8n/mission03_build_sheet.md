# Mission 03 — n8n + AI Automation Build Sheet

## Manual process to replace
Every reporting cycle an analyst manually checks funding exceptions and overdue milestones, prepares a summary, and sends a management update.

## Build this exact flow
1. **Manual Trigger** — training trigger.
2. **Read Input** — load `sample_exception_payload.json` or paste it into a Set node.
3. **Deterministic Checks (Code)** — reject any payload missing `run_id`, `trusted_kpis`, or `critical_exceptions`; calculate counts without AI.
4. **Route Critical Issues (IF)** — `critical_exceptions.length > 0`.
5. **Prepare LLM Prompt (Set)** — provide only verified KPIs, critical issues and overdue IDs.
6. **Basic LLM Chain** — generate the management narrative using the supplied JSON schema.
7. **Validate AI Output (Code)** — valid JSON; required keys present; no unknown record IDs; no financial total different from deterministic payload.
8. **IF Valid** — valid output continues; invalid output goes to fallback.
9. **Fallback (Set)** — deterministic message: “AI summary unavailable. Use verified KPI payload and critical exception list.”
10. **Human Approval Gate (IF/Set)** — external email or sensitive action only after approval.
11. **Final Log (Set)** — run ID, validation status, output route and timestamp.

## Required AI schema
Use `../data/automation/ai_summary_schema.json`.

## Break-it tests
- Remove `trusted_kpis`.
- Add an unknown record ID to the AI output.
- Change `recorded_approved_rm` in the AI output.
- Make the LLM return plain text instead of valid JSON.
- Simulate a failed notification.

The workflow passes only when the failure is visible or the safe fallback runs.
