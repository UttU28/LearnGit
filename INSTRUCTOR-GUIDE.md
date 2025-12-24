# 👨‍🏫 Instructor Guide

This guide helps you teach Git effectively using this repository.

---

## 📚 Course Structure

### Session 1: Git Basics (1-2 hours)
- **Concepts**: Version control, repositories, commits
- **Exercises**: Lessons 1-2
- **Goal**: Students can init, add, commit, and view history

### Session 2: Branching & Merging (1-2 hours)
- **Concepts**: Branches, checkout, merge
- **Exercises**: Lessons 3-4
- **Goal**: Students can create branches and merge without conflicts

### Session 3: Conflict Resolution (1 hour)
- **Concepts**: Merge conflicts, conflict markers
- **Exercises**: Lesson 5
- **Goal**: Students can resolve merge conflicts confidently

### Session 4: Remote Repositories (1-2 hours)
- **Concepts**: GitHub, push, pull, clone
- **Exercises**: Lesson 6
- **Goal**: Students can work with remote repositories

### Session 5: Advanced Topics (1-2 hours)
- **Concepts**: Undo, stash, rebase, tags
- **Exercises**: Lessons 7-8
- **Goal**: Students understand advanced workflows

---

## 🎯 Teaching Tips

### Before the Session
1. Ensure all students have Git installed
2. Have students create GitHub accounts
3. Fork this repo for each student OR have them clone it

### During the Session
- **Do live demos** - type commands while explaining
- **Make mistakes on purpose** - show how to recover
- **Use visual tools** - `git log --graph --oneline --all`
- **Pair programming** - have students work together on conflicts

### Common Student Issues
| Issue | Solution |
|-------|----------|
| "Permission denied" | Set up SSH keys or use HTTPS |
| "Detached HEAD" | `git checkout main` |
| "Already up to date" (but changes exist) | Check branch names |
| "Merge conflict" panic | Walk through resolution step-by-step |

---

## 📋 Suggested Timeline

| Time | Activity |
|------|----------|
| 0:00 | Introduction & Setup |
| 0:15 | Lesson demonstration |
| 0:30 | Hands-on exercises |
| 0:50 | Q&A / Troubleshooting |
| 1:00 | Wrap-up & Preview |

---

## 🏆 Assessment Ideas

### Beginner Check
- Can create a repo and make commits
- Understands staging vs committed
- Can view history

### Intermediate Check
- Can create and merge branches
- Can resolve simple conflicts
- Can push/pull from remote

### Advanced Check
- Can use stash, rebase, cherry-pick
- Can recover from mistakes
- Understands Git workflows (GitFlow, trunk-based)

---

## 🎮 Interactive Exercises

### The Conflict Challenge
1. Have two students edit the same file on different branches
2. Have them try to merge
3. Walk through resolution together

### The Time Travel Challenge
1. Have students make several commits
2. Ask them to find a specific commit
3. Have them revert or reset to it

### The Collaboration Challenge
1. Set up a shared repo
2. Have students push/pull changes
3. Introduce a conflict they must resolve

---

## 📊 Progress Tracking

Use the Final Challenge (`exercises/final-challenge.md`) to assess student progress:

- **Challenges 1-2**: Basic proficiency
- **Challenges 3-5**: Intermediate proficiency  
- **Challenges 6-10**: Advanced proficiency

---

## 🔗 Additional Resources

### Official Documentation
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

### Interactive Learning
- [Learn Git Branching](https://learngitbranching.js.org/)
- [GitHub Learning Lab](https://lab.github.com/)

### Visualizations
- [Visualizing Git](https://git-school.github.io/visualizing-git/)
- [Git Explorer](https://gitexplorer.com/)

---

## 💬 Common Questions

**Q: Should I use merge or rebase?**
A: Merge for beginners. Introduce rebase for cleaner history once comfortable.

**Q: GUI or command line?**
A: Teach command line first - it works everywhere. Introduce GUIs later.

**Q: What about Git Flow?**
A: Teach after basics. Most teams use simplified trunk-based development now.

---

Happy Teaching! 🎉

