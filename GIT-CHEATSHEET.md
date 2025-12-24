# 📋 Git Cheat Sheet

Print this out and keep it by your desk!

---

## 🚀 Getting Started

```bash
git init                    # Initialize new repo
git clone <url>             # Clone existing repo
git config --global user.name "Name"
git config --global user.email "email"
```

---

## 📝 Basic Workflow

```bash
git status                  # Check status
git add <file>              # Stage specific file
git add .                   # Stage all changes
git commit -m "message"     # Commit with message
git commit -am "message"    # Add & commit (tracked files)
```

---

## 🌿 Branching

```bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <name>         # Switch branch
git checkout -b <name>      # Create & switch
git switch <name>           # Switch (new syntax)
git switch -c <name>        # Create & switch (new)
git branch -d <name>        # Delete branch (safe)
git branch -D <name>        # Delete branch (force)
```

---

## 🔀 Merging

```bash
git merge <branch>          # Merge branch into current
git merge --abort           # Abort merge
git rebase <branch>         # Rebase current onto branch
git rebase -i HEAD~3        # Interactive rebase
```

---

## 🌐 Remote

```bash
git remote -v               # List remotes
git remote add origin <url> # Add remote
git push -u origin main     # Push & set upstream
git push                    # Push to upstream
git pull                    # Pull from upstream
git fetch                   # Fetch without merge
git push origin --delete <branch>  # Delete remote branch
```

---

## 📜 History

```bash
git log                     # Full log
git log --oneline           # Compact log
git log --graph             # Visual graph
git log --all               # All branches
git show <commit>           # Show commit details
git diff                    # Unstaged changes
git diff --staged           # Staged changes
git blame <file>            # Who changed each line
```

---

## ⏪ Undoing

```bash
git restore <file>          # Discard changes
git restore --staged <file> # Unstage file
git reset HEAD~1            # Undo last commit (keep changes)
git reset --hard HEAD~1     # Undo last commit (lose changes)
git revert <commit>         # Create undo commit
git clean -fd               # Remove untracked files
```

---

## 📦 Stashing

```bash
git stash                   # Stash changes
git stash save "message"    # Stash with message
git stash list              # List stashes
git stash pop               # Apply & remove stash
git stash apply             # Apply & keep stash
git stash drop              # Delete stash
git stash clear             # Delete all stashes
```

---

## 🏷️ Tags

```bash
git tag                     # List tags
git tag <name>              # Create lightweight tag
git tag -a <name> -m "msg"  # Create annotated tag
git push --tags             # Push all tags
git tag -d <name>           # Delete local tag
```

---

## 🔍 Finding & Fixing

```bash
git bisect start            # Start binary search
git bisect bad              # Mark current as bad
git bisect good <commit>    # Mark commit as good
git cherry-pick <commit>    # Apply specific commit
git reflog                  # View all HEAD changes
```

---

## 🛠️ Configuration

```bash
git config --list           # Show all config
git config --global -e      # Edit global config
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
```

---

## 💡 Pro Tips

```bash
# Amend last commit
git commit --amend -m "new message"

# See what will be pushed
git log origin/main..HEAD

# Checkout specific file from another branch
git checkout <branch> -- <file>

# Create branch from specific commit
git checkout -b <branch> <commit>

# Squash last N commits
git reset --soft HEAD~N
git commit -m "Squashed message"
```

---

## 🚨 Emergency Commands

```bash
# I committed to wrong branch!
git reset HEAD~1 --soft
git stash
git checkout correct-branch
git stash pop
git commit

# I need to undo a public commit!
git revert <commit>

# I accidentally deleted a branch!
git reflog
git checkout -b <branch> <commit-from-reflog>

# Everything is broken, start fresh!
git fetch origin
git reset --hard origin/main
```

---

## 📁 .gitignore Examples

```
# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/
*.o

# IDE
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Environment
.env
.env.local
*.log
```

---

Keep Learning! 🎓

