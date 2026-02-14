---
description: Read a Linear issue, analyze it, and create an implementation plan — asking clarifying questions
allowed-tools: mcp__claude_ai_Linear__get_issue, mcp__claude_ai_Linear__list_issues, mcp__claude_ai_Linear__list_comments, Read, Glob, Grep, Bash(git:*), Bash(pnpm:*), AskUserQuestion, mcp__ide__getDiagnostics
---

# Plan Issue — Analyze and plan implementation for a Linear issue

Takes a Linear issue identifier (e.g., `ELE-6`) and produces a thorough implementation plan. **Makes NO assumptions** — asks clarifying questions when requirements are ambiguous.

## Process

### 1. Read the Issue
- Fetch the full issue from Linear including description, comments, and any linked issues.
- Understand the acceptance criteria, constraints, and context.

### 2. Explore the Codebase
- Search for relevant files, components, and patterns related to the issue.
- Read existing code that will be modified or extended.
- Understand the current architecture and conventions in use.
- Check for existing tests, utilities, or patterns that should be reused.

### 3. Identify Unknowns and Ask Questions
- **DO NOT ASSUME** anything that isn't explicit in the issue or codebase.
- Use `AskUserQuestion` to clarify:
  - Ambiguous requirements (e.g., "should this be X or Y?")
  - Design decisions (e.g., "which approach do you prefer?")
  - Scope boundaries (e.g., "should this also handle Z?")
  - Content or copy that needs human input
- Present tradeoffs when multiple approaches exist.

### 4. Consider Tradeoffs and Pitfalls
Think through and document:
- **Scalability**: Will this approach work as the site grows? (more events, more pages, more traffic)
- **Performance**: Any impact on bundle size, LCP, or runtime performance?
- **Maintainability**: Is this easy to change later? Does it follow existing patterns?
- **Edge cases**: What happens with empty states, missing data, error conditions?
- **Dependencies**: Does this require new packages? Are there simpler alternatives?
- **Breaking changes**: Could this affect other parts of the site?

### 5. Present the Plan
Output a structured plan:

```
## Plan: ELE-XX — [Title]

### Summary
[1-2 sentences on what we're doing and why]

### Files to Modify
- `path/to/file.tsx` — [what changes]
- `path/to/other.ts` — [what changes]

### Files to Create (if any)
- `path/to/new-file.tsx` — [purpose]

### Implementation Steps
1. [Step 1 — specific and actionable]
2. [Step 2]
3. ...

### Tradeoffs & Decisions
- [Decision made and why]
- [Alternative considered and why not]

### Risks & Edge Cases
- [Risk 1 and mitigation]
- [Edge case and how it's handled]

### Testing Strategy
- [How to verify this works]
- [What to check for regressions]
```

## Important

- Read the actual code before planning changes. Never plan blind.
- If the issue references other issues (blockers, dependencies), check those too.
- Keep the plan concrete — file paths, function names, specific changes. Not vague descriptions.
- The plan should be implementable by someone reading it without additional context.

$ARGUMENTS
