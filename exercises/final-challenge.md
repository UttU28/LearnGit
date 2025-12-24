# 🏆 Final Git Challenge

Complete all the tasks below to prove your Git mastery!

---

## Challenge 1: Basic Workflow ⭐

- [ ] Create a new file called `challenge-1.txt` in this folder
- [ ] Add your name and the current date
- [ ] Stage the file
- [ ] Commit with message: "Complete challenge 1"

**Commands you'll need:** `git add`, `git commit`

---

## Challenge 2: Branching Basics ⭐⭐

- [ ] Create a new branch called `challenge-2-branch`
- [ ] Switch to that branch
- [ ] Create a file called `challenge-2.txt` with text "Hello from branch!"
- [ ] Commit the changes
- [ ] Switch back to main
- [ ] Merge `challenge-2-branch` into main
- [ ] Delete the branch

**Commands you'll need:** `git checkout -b`, `git add`, `git commit`, `git merge`, `git branch -d`

---

## Challenge 3: The Merge Conflict ⭐⭐⭐

- [ ] Create branch `conflict-a` from main
- [ ] Add "Version A" to `challenge-3.txt`
- [ ] Commit
- [ ] Switch to main
- [ ] Create branch `conflict-b` from main  
- [ ] Add "Version B" to `challenge-3.txt`
- [ ] Commit
- [ ] Switch to main
- [ ] Merge `conflict-a` (should succeed)
- [ ] Merge `conflict-b` (should conflict!)
- [ ] Resolve the conflict by keeping BOTH versions
- [ ] Commit the resolution

**Commands you'll need:** `git checkout -b`, `git add`, `git commit`, `git merge`

---

## Challenge 4: Time Travel ⭐⭐

- [ ] Create a file `challenge-4.txt` with "Version 1"
- [ ] Commit
- [ ] Change it to "Version 2"  
- [ ] Commit
- [ ] Change it to "Version 3"
- [ ] Commit
- [ ] Use `git log --oneline` to see your commits
- [ ] Use `git revert` to undo "Version 3" (creates new commit)
- [ ] Verify the file now says "Version 2"

**Commands you'll need:** `git add`, `git commit`, `git log`, `git revert`

---

## Challenge 5: Stash Master ⭐⭐

- [ ] Create a file `challenge-5.txt` with some content
- [ ] DON'T commit yet!
- [ ] Stash your changes
- [ ] Verify the file is gone with `git status`
- [ ] Create and switch to a new branch `other-work`
- [ ] Create a different file, commit it
- [ ] Switch back to main
- [ ] Pop your stash
- [ ] Verify your original file is back
- [ ] Commit it

**Commands you'll need:** `git stash`, `git stash pop`, `git checkout -b`, `git add`, `git commit`

---

## Challenge 6: Remote Operations ⭐⭐⭐

- [ ] Create a new repository on GitHub (don't initialize with README)
- [ ] Add the remote to this local repo
- [ ] Push your main branch
- [ ] Create a new branch locally
- [ ] Make a change and commit
- [ ] Push the new branch to GitHub
- [ ] Go to GitHub and verify both branches exist

**Commands you'll need:** `git remote add`, `git push -u origin main`, `git push -u origin branch-name`

---

## Challenge 7: The Detective ⭐⭐

- [ ] Use `git log --oneline --graph --all` to see the full history
- [ ] Find a specific commit hash
- [ ] Use `git show <hash>` to see what changed in that commit
- [ ] Use `git diff HEAD~3..HEAD` to see changes in last 3 commits

**Commands you'll need:** `git log`, `git show`, `git diff`

---

## Challenge 8: Clean History ⭐⭐⭐⭐

- [ ] Create 3 small commits with messages "WIP 1", "WIP 2", "WIP 3"
- [ ] Use interactive rebase to squash them into one commit
- [ ] Give the squashed commit a meaningful message

**Commands you'll need:** `git rebase -i HEAD~3`

⚠️ **Warning:** Only do this on commits that haven't been pushed!

---

## Challenge 9: Cherry Pick ⭐⭐⭐

- [ ] Create branch `feature-x` and add a file `feature-x.txt`
- [ ] Make 3 commits on this branch
- [ ] Switch to main
- [ ] Cherry-pick only the SECOND commit from `feature-x`
- [ ] Verify only that commit's changes appear on main

**Commands you'll need:** `git checkout -b`, `git log`, `git cherry-pick <hash>`

---

## Challenge 10: Tag It! ⭐

- [ ] Create an annotated tag `v1.0.0` with message "First release!"
- [ ] View all tags
- [ ] Push tags to remote

**Commands you'll need:** `git tag -a`, `git tag`, `git push --tags`

---

## 🎉 Completion Checklist

Once you've completed all challenges, run these commands and paste the output in a file called `completed.txt`:

```bash
git log --oneline -20
git branch -a
git tag
git remote -v
```

Congratulations! You are now a Git expert! 🚀

---

## Scoring

- ⭐ = Beginner (1 point)
- ⭐⭐ = Intermediate (2 points)
- ⭐⭐⭐ = Advanced (3 points)
- ⭐⭐⭐⭐ = Expert (4 points)

**Total possible: 23 points**

| Score | Level |
|-------|-------|
| 0-8 | Git Padawan |
| 9-15 | Git Knight |
| 16-20 | Git Master |
| 21-23 | Git Jedi |

What level did you reach?

