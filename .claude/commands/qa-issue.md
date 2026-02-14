---
description: QA a completed issue using Playwright to test for bugs and regressions
allowed-tools: mcp__playwright__browser_navigate, mcp__playwright__browser_snapshot, mcp__playwright__browser_take_screenshot, mcp__playwright__browser_click, mcp__playwright__browser_type, mcp__playwright__browser_hover, mcp__playwright__browser_press_key, mcp__playwright__browser_evaluate, mcp__playwright__browser_console_messages, mcp__playwright__browser_network_requests, mcp__playwright__browser_resize, mcp__playwright__browser_wait_for, mcp__playwright__browser_fill_form, mcp__playwright__browser_run_code, mcp__playwright__browser_tabs, mcp__claude_ai_Linear__get_issue, mcp__claude_ai_Linear__list_comments, Read, Glob, Grep
---

# QA Issue — Test a solution using Playwright

Takes a Linear issue identifier (e.g., `ELE-6`) and uses Playwright to verify the implementation works correctly, checking for bugs and regressions.

## Process

### 1. Understand What to Test
- Fetch the issue from Linear to understand the acceptance criteria.
- Read the implementation plan or recent code changes to know what was built.
- Identify the pages/components that were modified.

### 2. Test Against localhost:3000
- Navigate to the relevant pages on `http://localhost:3000`.
- **The dev server must already be running.** If it's not accessible, inform the user to start it with `pnpm dev`.

### 3. Functional Testing
For each acceptance criterion in the issue:
- Navigate to the relevant page
- Take a snapshot to understand the page structure
- Interact with elements (click, type, hover) as a user would
- Verify the expected behavior occurs
- Take screenshots of key states and save them to `.claude/screenshots/` with descriptive names like `qa-ele-XX-description.png`

### 4. Regression Testing
Check that existing functionality still works:
- Navigation links still work
- Page layouts aren't broken
- No console errors (check `browser_console_messages` with level `error`)
- No failed network requests (check `browser_network_requests`)
- Mobile responsiveness (resize to 375x812 and check layout)

### 5. Visual Inspection
- Take screenshots at desktop (1280x800) and mobile (375x812) viewports
- Check for visual issues: overflow, misalignment, broken images, text truncation
- Save all screenshots to `.claude/screenshots/`

### 6. Report Results

**If all tests pass:**
```
QA PASSED: ELE-XX — [Title]

Tested:
- [What was verified]
- [What was verified]

Screenshots saved to .claude/screenshots/
```

**If issues are found:**
```
QA FAILED: ELE-XX — [Title]

Issues Found:
1. [BUG] [Description of the bug]
   - Expected: [what should happen]
   - Actual: [what actually happens]
   - Screenshot: .claude/screenshots/[filename]

2. [REGRESSION] [Description]
   ...

Recommendations:
- [How to fix each issue]
```

## Important

- Always save screenshots to `.claude/screenshots/` per project conventions.
- Test both desktop and mobile viewports.
- Check the browser console for errors — JavaScript errors are bugs even if the page looks fine.
- Don't just check the happy path — test edge cases mentioned in the issue.
- Be specific about what's broken and where. Include element references and screenshots.

$ARGUMENTS
