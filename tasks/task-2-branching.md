# 🧩 Task 2 – Branching & Pull Request Merge

## Objective
Understand isolated work on branches and merging via PR.

## Steps
1. Update your local repo:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create a new branch:
   ```bash
   git checkout -b feature/update-changelog-<your-name>
   ```
3. Add a line to `changelog.md` with your name and today’s date.
4. Commit & push:
   ```bash
   git add changelog.md
   git commit -m "chore: update changelog for <your-name>"
   git push -u origin feature/update-changelog-<your-name>
   ```
5. Open a Pull Request.
6. Reviewer merges the PR.

## Deliverable
A merged PR that updates `changelog.md`.
