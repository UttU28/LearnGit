# 🧩 Task 1 – Git Basics

## Objective
Learn: fork/clone, status, add, commit, push, PR.

## Steps
1. **Fork** this repo to your GitHub account (if you are not a collaborator).
2. Clone your fork locally:
   ```bash
   git clone <your-fork-url>
   cd gitquest
   ```
3. Create a branch:
   ```bash
   git checkout -b feature/<your-name>
   ```
4. Create a file in `students/` named:
   ```
   <your-name>.md
   ```
5. Add:
   - Your name
   - GitHub username
   - One fun fact
6. Stage & commit:
   ```bash
   git status
   git add students/<your-name>.md
   git commit -m "feat: add <your-name> intro"
   ```
7. Push your branch:
   ```bash
   git push -u origin feature/<your-name>
   ```
8. Open a Pull Request to `main`.

## Deliverable
A PR that adds your `students/<your-name>.md` file.
