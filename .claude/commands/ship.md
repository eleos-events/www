---
description: Full dev cycle — pick the next issue, start it, plan, implement, and QA
allowed-tools: mcp__claude_ai_Linear__list_issues, mcp__claude_ai_Linear__get_issue, mcp__claude_ai_Linear__update_issue, mcp__claude_ai_Linear__list_comments, Read, Write, Edit, Glob, Grep, Bash(git:*), Bash(pnpm:*), Bash(gh:*), AskUserQuestion, mcp__ide__getDiagnostics, mcp__playwright__browser_navigate, mcp__playwright__browser_snapshot, mcp__playwright__browser_take_screenshot, mcp__playwright__browser_click, mcp__playwright__browser_type, mcp__playwright__browser_hover, mcp__playwright__browser_press_key, mcp__playwright__browser_evaluate, mcp__playwright__browser_console_messages, mcp__playwright__browser_network_requests, mcp__playwright__browser_resize, mcp__playwright__browser_wait_for, mcp__playwright__browser_fill_form, mcp__playwright__browser_run_code, mcp__playwright__browser_tabs
---

# Ship — Full development cycle from issue selection to QA

Runs the complete workflow: pick the next issue, set up the branch, plan the implementation, build it, and QA the result.

## Workflow

### Step 1: Next Issue
- Query Linear for `Engineering`-labeled issues on the `Eleos_events` team.
- Filter for `Todo` status (fall back to `Backlog` if none).
- Pick the highest priority issue (Urgent > High > Medium > Low, then lowest issue number).
- Present the issue to the user and **ask for confirmation** before proceeding. The user may want to pick a different issue.

### Step 2: Start Issue
- Checkout `preview` and pull latest:
  ```
  git checkout preview
  git pull origin preview
  ```
- Fetch the issue's `gitBranchName` from Linear.
- Create and checkout the git branch from `preview`:
  ```
  git checkout -b <branchName>
  ```
- Update the Linear issue status to `In Progress`.
- Confirm the branch is set up.

### Step 3: Plan Issue
- Read the full issue description and any comments from Linear.
- Explore the codebase to understand relevant files and patterns.
- **Ask clarifying questions** — make NO assumptions about ambiguous requirements.
- Consider tradeoffs: scalability, performance, maintainability, edge cases, dependencies.
- Present a structured implementation plan.
- **Wait for user approval** before proceeding.

### Step 4: Implement & Commit
- Execute the approved plan step by step.
- Follow existing codebase conventions and patterns.
- Check for TypeScript errors after changes.
- Verify the build passes (`pnpm build` or `pnpm lint`).
- Take screenshots of visual changes (save to `.claude/screenshots/`).
- **Commit as you go** — single-scoped commits, each representing one logical change.
- Stage specific files (`git add <files>`), never `git add -A` or `git add .`.
- Write brief commit messages that capture **intent**, not mechanics:
  - Good: `Fix Get Tickets CTA linking to /contact instead of /events`
  - Bad: `Update href in nav component`
- Every commit message ends with:
  ```
  Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
  ```

### Step 5: QA Issue
- Navigate to relevant pages on `http://localhost:3000` using Playwright.
- Verify each acceptance criterion from the issue.
- Check for regressions: navigation, layout, console errors, failed network requests.
- Test at desktop (1280x800) and mobile (375x812) viewports.
- Save all screenshots to `.claude/screenshots/`.
- Report results — pass or fail with details.

### Step 6: Push & Create PR
Once QA passes:
- Push the branch to origin: `git push -u origin <branchName>`
- Create a pull request targeting `preview` using `gh pr create`:
  ```
  gh pr create --base preview --title "ELE-XX: Brief title" --body "$(cat <<'EOF'
  ## Summary
  - [What was done and why — 1-3 bullets]

  ## Linear Issue
  [ELE-XX: Issue Title](linear-url)

  ## Changes
  - [Specific changes for reviewers]

  ## Test Plan
  - [How to verify this works]

  🤖 Generated with [Claude Code](https://claude.com/claude-code)
  EOF
  )"
  ```
- **PR title**: `ELE-XX: Brief description` — keep it under 70 characters.
- **PR body**: Link to the Linear issue, summarize changes, include a test plan.
- Report the PR URL to the user.

### Step 7: Wrap Up
If QA passed and PR is created:
- Summarize everything that was done.
- List all commits made.
- Provide the PR URL.
- The issue stays In Progress until the PR is merged.

If QA fails:
- List the bugs found.
- Attempt to fix them and commit the fixes.
- Re-run the failing QA checks.
- If still failing, report what remains and let the user decide before pushing.

## Important

- **Always pause for user input** at Step 1 (issue selection) and Step 3 (plan approval).
- The dev server must be running for QA. If it's not, ask the user to start it.
- Branch from `origin/preview` — never from `main` or the current HEAD.
- PRs always target `preview`, never `main`.
- **Commits are single-scoped.** One logical change per commit. Brief messages capturing intent.
- Never commit `.env`, credentials, or secrets.
- Save all screenshots to `.claude/screenshots/`.
- This is an interactive workflow — keep the user informed at each step.

$ARGUMENTS
