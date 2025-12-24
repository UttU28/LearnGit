# 🚀 Git & GitHub Bootcamp

Welcome to the **Git & GitHub Bootcamp**! This hands-on project will teach you everything you need to know about version control.

> ⚠️ **Important**: Don't just read—**DO** the exercises! Git is learned by doing.

---

## 📋 Table of Contents

1. [Setup & Configuration](#-lesson-1-setup--configuration)
2. [Your First Commit](#-lesson-2-your-first-commit)
3. [Working with Branches](#-lesson-3-working-with-branches)
4. [Merging Branches](#-lesson-4-merging-branches)
5. [Handling Merge Conflicts](#-lesson-5-handling-merge-conflicts)
6. [Working with Remote Repositories](#-lesson-6-working-with-remote-repositories)
7. [Undoing Changes](#-lesson-7-undoing-changes)
8. [Advanced Git Commands](#-lesson-8-advanced-git-commands)
9. [Final Challenge](#-final-challenge)

---

## 🔧 Lesson 1: Setup & Configuration

### Exercise 1.1: Configure Git

Set up your identity (this appears in your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Exercise 1.2: Initialize This Repository

If you cloned this repo, you're already in a Git repository! If not:

```bash
git init
```

### Exercise 1.3: Check Your Configuration

```bash
git config --list
```

✅ **Checkpoint**: You should see your name and email in the output.

---

## 📝 Lesson 2: Your First Commit

### Understanding the Git Workflow

```
Working Directory → Staging Area → Repository
     (edit)          (git add)     (git commit)
```

### Exercise 2.1: Check Repository Status

```bash
git status
```

This shows you:
- 🔴 Untracked files (new files Git doesn't know about)
- 🟡 Modified files (changed but not staged)
- 🟢 Staged files (ready to commit)

### Exercise 2.2: Make Your First Change

1. Open `exercises/my-first-file.txt`
2. Add your name and today's date
3. Save the file

### Exercise 2.3: Stage Your Changes

```bash
# Stage a specific file
git add exercises/my-first-file.txt

# OR stage all changes
git add .
```

### Exercise 2.4: Commit Your Changes

```bash
git commit -m "Add my name to first file"
```

### Exercise 2.5: View Your Commit History

```bash
git log
git log --oneline  # Compact view
```

✅ **Checkpoint**: Run `git log --oneline` and you should see your commit!

---

## 🌿 Lesson 3: Working with Branches

Branches let you work on different features without affecting the main code.

```
main ────●────●────●
              \
feature        ●────●
```

### Exercise 3.1: View All Branches

```bash
git branch        # Local branches
git branch -a     # All branches (including remote)
```

### Exercise 3.2: Create a New Branch

```bash
git branch feature-about-me
```

### Exercise 3.3: Switch to Your Branch

```bash
git checkout feature-about-me
# OR (newer syntax)
git switch feature-about-me
```

💡 **Pro Tip**: Create and switch in one command:
```bash
git checkout -b feature-about-me
# OR
git switch -c feature-about-me
```

### Exercise 3.4: Make Changes on Your Branch

1. Open `exercises/about-me.txt`
2. Fill in your information
3. Stage and commit:

```bash
git add exercises/about-me.txt
git commit -m "Add personal information"
```

### Exercise 3.5: Switch Back to Main

```bash
git checkout main
```

Notice that your changes in `about-me.txt` are gone! They're safely stored in your feature branch.

✅ **Checkpoint**: Run `git branch` - you should see both `main` and `feature-about-me`

---

## 🔀 Lesson 4: Merging Branches

### Exercise 4.1: Merge Your Feature Branch

First, make sure you're on main:
```bash
git checkout main
```

Then merge:
```bash
git merge feature-about-me
```

### Exercise 4.2: View the Merged Changes

```bash
git log --oneline --graph
```

### Exercise 4.3: Delete the Merged Branch

```bash
git branch -d feature-about-me
```

✅ **Checkpoint**: Your changes should now be visible on main!

---

## ⚔️ Lesson 5: Handling Merge Conflicts

Conflicts happen when two branches change the same line. Don't panic—they're easy to resolve!

### Exercise 5.1: Create a Conflict Scenario

```bash
# Create branch A and make changes
git checkout -b branch-a
echo "I love pizza" >> exercises/favorites.txt
git add . && git commit -m "Add favorite food on branch A"

# Go back to main
git checkout main

# Create branch B from main and make different changes
git checkout -b branch-b
echo "I love sushi" >> exercises/favorites.txt
git add . && git commit -m "Add favorite food on branch B"
```

### Exercise 5.2: Attempt the Merge

```bash
git checkout main
git merge branch-a  # This works fine

git merge branch-b  # CONFLICT!
```

### Exercise 5.3: Resolve the Conflict

1. Open `exercises/favorites.txt`
2. You'll see conflict markers:
   ```
   <<<<<<< HEAD
   I love pizza
   =======
   I love sushi
   >>>>>>> branch-b
   ```
3. Edit the file to keep what you want (maybe both!)
4. Remove the conflict markers
5. Save and commit:

```bash
git add exercises/favorites.txt
git commit -m "Resolve merge conflict - keep both favorites"
```

✅ **Checkpoint**: Run `git log --oneline --graph` to see the merge!

---

## 🌐 Lesson 6: Working with Remote Repositories

### Key Concepts

- **Remote**: A version of your repo hosted online (GitHub, GitLab, etc.)
- **Origin**: The default name for your remote repository
- **Push**: Upload your commits to remote
- **Pull**: Download commits from remote
- **Clone**: Copy a remote repository to your computer

### Exercise 6.1: Add a Remote Repository

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

### Exercise 6.2: View Remote Repositories

```bash
git remote -v
```

### Exercise 6.3: Push Your Changes

```bash
# First time (sets upstream branch)
git push -u origin main

# After that, just:
git push
```

### Exercise 6.4: Pull Changes from Remote

```bash
git pull origin main
# OR if upstream is set:
git pull
```

### Exercise 6.5: Clone a Repository

```bash
git clone https://github.com/some-user/some-repo.git
```

✅ **Checkpoint**: Your commits should appear on GitHub!

---

## ⏪ Lesson 7: Undoing Changes

### Exercise 7.1: Discard Unstaged Changes

```bash
# Discard changes in a specific file
git checkout -- exercises/scratch.txt

# OR (newer syntax)
git restore exercises/scratch.txt
```

### Exercise 7.2: Unstage a File

```bash
git reset HEAD exercises/scratch.txt

# OR (newer syntax)
git restore --staged exercises/scratch.txt
```

### Exercise 7.3: Undo the Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

### Exercise 7.4: Undo the Last Commit (Discard Changes)

```bash
git reset --hard HEAD~1
```

⚠️ **Warning**: `--hard` permanently deletes your changes!

### Exercise 7.5: Revert a Commit (Safe for Shared Repos)

```bash
git revert HEAD
```

This creates a NEW commit that undoes the previous one.

---

## 🎓 Lesson 8: Advanced Git Commands

### Stashing Changes

Save work temporarily without committing:

```bash
git stash              # Save changes
git stash list         # View stashed changes
git stash pop          # Apply and remove stash
git stash apply        # Apply but keep stash
```

### Viewing Differences

```bash
git diff                    # Unstaged changes
git diff --staged           # Staged changes
git diff branch1..branch2   # Between branches
```

### Cherry-Pick

Apply a specific commit from another branch:

```bash
git cherry-pick <commit-hash>
```

### Interactive Rebase

Clean up commit history:

```bash
git rebase -i HEAD~3  # Edit last 3 commits
```

### Tagging Releases

```bash
git tag v1.0.0
git tag -a v1.0.0 -m "First release"
git push origin --tags
```

### Viewing Who Changed What

```bash
git blame filename.txt
```

---

## 🏆 Final Challenge

Complete all the tasks in `exercises/final-challenge.md` to test your Git skills!

---

## 📚 Quick Reference

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new repository |
| `git clone <url>` | Clone a repository |
| `git status` | Check status |
| `git add <file>` | Stage changes |
| `git commit -m "msg"` | Commit changes |
| `git push` | Upload to remote |
| `git pull` | Download from remote |
| `git branch` | List branches |
| `git checkout -b <name>` | Create & switch branch |
| `git merge <branch>` | Merge branch |
| `git log --oneline` | View history |
| `git diff` | View changes |
| `git stash` | Save changes temporarily |
| `git reset --hard HEAD` | Discard all changes |

---

## 🆘 Common Issues & Solutions

### "Permission denied (publickey)"
Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "Your branch is behind 'origin/main'"
```bash
git pull --rebase origin main
```

### "Merge conflict"
Edit the conflicting files, remove markers, then:
```bash
git add .
git commit -m "Resolve conflicts"
```

### "Detached HEAD state"
```bash
git checkout main
```

---

## 🎉 Congratulations!

You've completed the Git & GitHub Bootcamp! Keep practicing and don't be afraid to experiment—that's how you learn!

**Next Steps:**
- [ ] Create your own project and push it to GitHub
- [ ] Contribute to an open-source project
- [ ] Learn about GitHub Actions and CI/CD
- [ ] Explore advanced workflows like Git Flow

---

Made with ❤️ for developers learning Git

