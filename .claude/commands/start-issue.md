---
description: Start a Linear issue — create git branch and update status to In Progress
allowed-tools: mcp__claude_ai_Linear__get_issue, mcp__claude_ai_Linear__update_issue, mcp__claude_ai_Linear__list_issues, Bash(git:*)
---

# Start Issue — Begin work on a Linear issue

Takes a Linear issue identifier (e.g., `ELE-6`) and sets up the local environment to begin work.

## Process

1. **Get the issue from Linear** using the provided identifier. If no identifier is provided, tell the user to run `/next-issue` first or provide an issue ID.
2. **Read the git branch name** from the issue's `gitBranchName` field.
3. **Create and checkout the git branch** from the `preview` branch:
   ```
   git fetch origin preview
   git checkout -b <branchName> origin/preview
   ```
   If the branch already exists locally, check it out instead of creating it.
4. **Update the Linear issue status** to `In Progress`.
5. **Confirm** to the user what was done:
   - Issue moved to In Progress
   - Branch name created/checked out
   - Ready to work

## Important

- Always branch from `origin/preview`, never from `main` or the current branch.
- Use the `gitBranchName` from the Linear issue — do not generate your own branch name.
- If the issue is already In Progress, warn the user but proceed with branch setup.

$ARGUMENTS
