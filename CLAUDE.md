# Git workflow

For any change that touches tracked files (code, openspec artifacts, docs), work on a
new branch off `main`, not on `main` directly. Name the branch for what it does, e.g.
`docs/readme-run-locally`, `openspec/it-career-navigator-mvp-update`. Commit, push,
and tell the user the branch is up so they can open and merge the PR themselves. Do
not open the PR unless asked.

Once the user says a PR is merged, clean up without asking first:
1. `git checkout main && git pull origin main`
2. Delete the merged branch locally: `git branch -d <branch>`
3. Delete the merged branch on GitHub: `git push origin --delete <branch>`

This cleanup is pre-authorized for branches the user confirms are merged. It is not
pre-authorized for `git push --force`, `git reset --hard`, or deleting a branch that
is not yet merged.
