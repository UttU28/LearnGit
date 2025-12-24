# 🧩 Task 3 – Resolve a Merge Conflict

## Objective
Learn real conflict resolution in Git.

## Setup (Instructor)
Ask everyone to edit **the same line** in `version.txt`.

## Steps (Student)
1. Pull latest `main`:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create a branch:
   ```bash
   git checkout -b fix/version-conflict-<your-name>
   ```
3. Edit `version.txt` and change the content to:
   ```
   v1.0-<your-name>
   ```
4. Commit & push:
   ```bash
   git add version.txt
   git commit -m "fix: update version for <your-name>"
   git push -u origin fix/version-conflict-<your-name>
   ```
5. Open a Pull Request.
6. When GitHub shows **conflicts**, resolve them:
   - Either on GitHub (web editor) OR locally:
     ```bash
     git fetch origin
     git checkout fix/version-conflict-<your-name>
     git merge origin/main
     # fix conflict in version.txt
     git add version.txt
     git commit -m "fix: resolve version conflict"
     git push
     ```
7. PR should become mergeable. Merge it.

## Deliverable
A merged PR after resolving conflict.
