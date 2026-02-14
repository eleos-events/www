---
description: Get the highest priority unstarted engineering task from Linear
allowed-tools: mcp__claude_ai_Linear__list_issues, mcp__claude_ai_Linear__get_issue
---

# Next Issue — Find the next engineering task to work on

Query Linear for engineering tasks on the **Eleos_events** team and find the highest priority issue that has NOT been started yet.

## Process

1. **Query Linear** for issues with the `Engineering` label on the `Eleos_events` team, filtering for status `Todo` (not `In Progress`, not `Backlog`, not `Done`).
2. **Sort by priority** — Urgent (1) > High (2) > Medium (3) > Low (4). Within the same priority, prefer lower issue numbers (older issues first).
3. **Display the result** clearly:
   - Issue identifier (e.g., ELE-6)
   - Title
   - Priority
   - Estimate
   - Project
   - A brief summary of the description
   - The Linear URL
4. If no `Todo` issues exist, check `Backlog` status next and report the top candidate from there.
5. If no engineering issues are available at all, inform the user.

## Output Format

Present the issue like:

```
Next up: ELE-XX — [Title]
Priority: [Urgent/High/Medium/Low] | Estimate: [X]pt | Project: [Name]
Status: [Todo/Backlog]

Summary: [1-2 sentence summary of the task]

Link: [Linear URL]
```

$ARGUMENTS
