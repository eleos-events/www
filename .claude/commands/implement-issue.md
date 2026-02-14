---
description: Plan and implement a Linear issue end-to-end
allowed-tools: mcp__claude_ai_Linear__get_issue, mcp__claude_ai_Linear__list_issues, mcp__claude_ai_Linear__list_comments, Read, Write, Edit, Glob, Grep, Bash(git:*), Bash(pnpm:*), Bash(gh:*), AskUserQuestion, mcp__ide__getDiagnostics, mcp__playwright__browser_navigate, mcp__playwright__browser_snapshot, mcp__playwright__browser_take_screenshot
---

# Implement Issue — Plan and build a Linear issue

Takes a Linear issue identifier (e.g., `ELE-6`) and runs the full implementation workflow: plan first, then build.

## Process

### Phase 1: Plan (same as /plan-issue)

1. **Fetch the issue** from Linear — read the full description, comments, and linked issues.
2. **Explore the codebase** — find relevant files, understand existing patterns and architecture.
3. **Ask clarifying questions** — DO NOT ASSUME. Use `AskUserQuestion` for any ambiguity in requirements, design decisions, or scope.
4. **Consider tradeoffs** — scalability, performance, maintainability, edge cases, dependencies, breaking changes.
5. **Present the plan** — structured with files to modify, implementation steps, tradeoffs, risks, and testing strategy.
6. **Wait for user approval** before proceeding to implementation.

### Phase 2: Implement

Once the plan is approved:

1. **Implement each step** from the plan sequentially.
2. **Follow existing patterns** in the codebase — match the coding style, component patterns, and conventions already in use.
3. **Check for TypeScript errors** using `mcp__ide__getDiagnostics` after making changes.
4. **Verify the build** passes with `pnpm build` or at minimum `pnpm lint`.
5. **Take a screenshot** of the result if a visual change was made and the dev server is running (save to `.claude/screenshots/`).

### Phase 3: Commit

After implementation, commit the changes:

1. **Stage only the files relevant to this change** — use `git add <specific files>`, never `git add -A` or `git add .`.
2. **Make single-scoped commits** — each commit should represent one logical change. If the implementation touches multiple concerns (e.g., a component change + a config change), split into separate commits.
3. **Write brief commit messages that capture intent**, not mechanics. The message should explain *why*, not *what*.
   - Good: `Fix Get Tickets CTA linking to /contact instead of /events`
   - Bad: `Update href in nav component`
   - Good: `Add honeypot field to block newsletter spam bots`
   - Bad: `Add hidden input to form`
4. Use this format for the commit:
   ```
   git commit -m "$(cat <<'EOF'
   Brief description of intent

   Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

### Phase 4: Summary

After committing:
- List all files modified/created
- List all commits made
- Summarize what was done
- Note anything the user should manually verify
- Suggest running `/qa-issue ELE-XX` to test the changes

## Important

- **Plan first, code second.** Never start writing code before the plan is approved.
- Follow the project's design language (see `/superdesign` for reference if making UI changes).
- Don't over-engineer. Implement exactly what the issue asks for.
- Reuse existing components and utilities — don't create new abstractions for one-time use.
- Save any screenshots to `.claude/screenshots/` per project conventions.
- **Commits are single-scoped.** One logical change per commit. Brief messages that capture intent.
- Never commit `.env`, credentials, or secrets.

$ARGUMENTS
