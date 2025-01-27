# Git and GitHub

## Introduction

### Version Control System (VCS)

A version control system is like a time machine for your code. It allows you to:

- Track changes
- Go back in time
- Collaborate easily

### Everyday Analogy

Imagine you are writing a big essay in Microsoft Word.

- You make a lot of edits over time, but you forgot what you changed.
- if you accidentally delete a section, there is no way to get it back unless you saved a new file.
- if you and a friend edit the same file or section, you will end up duplicate versions like `essay-final-v2.0.0.docx`.

A version control system fixes these problems by:

- Keeping a history of all changes.
- Allowing you to undo mistakes by restoring old versions.
- Merging edits from multiple people into a single file without conflicts.

### Why developers use Git and GitHub

In coding projects:

- A team might work on the same codebase, without a VCS, changes could overwrite each other.
- Bugs might be appear after changes, and a VCS helps pinpoint the issue by reviewing past changes.
- VCS tools like Git automate this process, making it fast and reliable.

## Getting Started with Git

### Installing Git

Here is an installation guide for Windows, MacOS, and Linux: [Git Installation Guide](https://git-scm.com/downloads).

### Configuring Git

Setting up Git for the first time:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com" # please use your GitHub email, if you do not have one, use the same Git email when you create a GitHub account
```

To check your Git configuration:

```bash
git config --list
```

### Basic Git Terminology:

### Repository (Repo)

Is a container for your project and its entire history.

Think of it as a folder that tracks all your code, and their changes.

There are two types of repositories:

- **Local repository**: Stored on your computer.
- **Remote repository**: Stored on a platform, like GitHub.

Creating your first (local) repository:

```bash
mkdir git-github-crash-course
```

```bash
cd git-github-crash-course
```

```bash
git init
```

### Commit

A commit is a snapshot of your code at a specific point in time.

It saves your changes so you can review or go back to them later.

Think of it as taking a photo of your project after making edits.

### `git status`

What it does?

- Shows the current state of your working directory and staging area.
- Tells you which files have been modified, added, or deleted.
- Helps you track what changes are ready to commit and what needs to be staged.

```bash
git status
```

### `git add file-name`

What it does?

- Moves changes from the working directory to the staging area, preparing them for a commit.
- Files must be staged before they can be committed.

```bash
git add file-name
```

```bash
git add file-name other-file-name
```

```bash
git add -A # add all files
```

```bash
git add . # add all files
```

### `git restore --staged file-name`

What it does?

- Removes files from the staging area, but keeps the changes in the working directory.
- It "un-stages" files without discarding edits.

```bash
git restore --staged file-name
```

### `git commit -m "Commit Message"`

What it does?

- Takes a snapshot of the files in the staging area and saves it in the repository's history.

```bash
git commit -m "Commit Message"
```

Best Practices?

- Write meaningful commit messages to make it easy to understand what changes were made.

### Branch

A branch is a separate copy of your codebase where you can work on new features or fixes without affecting the main codebase.

The main branch (usually called `main` or `master`) hold the final, stable version of your project.

Example? You might create a branch called feature-log-in to add a log-in system.

### `git branch branch-name`

What it does?

- Manages branches in your repository. Branches allow you to work on new features or fixes without affecting the main codebase.
- List all branches, the current branch will be highlighted with an asterisk.

```bash
git branch
```

- Create a new branch.

```bash
git branch feature-log-in
```

- Delete a branch.

```bash
git branch -d feature-log-in
```

### `git checkout branch-name`

What it does?

- Switches between branches in your repository.

```bash
git checkout feature-sing-up
```

- Create and switch to a new branch.

```bash
git checkout -b feature-sing-up
```

## Getting Started with GitHub

### What is GitHub and how does it complement Git?

GitHub is an online platform for hosting, sharing, and collaborating on code or Git repositories.

It is built around Git, the version control system, and adds a range of tools to simplify collaboration, project management, and code sharing.

Think of GitHub as a cloud-based home for your Git repositories.

### Setting up a GitHub Repository

You can create a new repository on GitHub by clicking the "+" button in the top-right corner of the screen and selecting "New repository" or by clicking this link after signing in: [Create a new repository](https://github.com/new).

### `git push`

What it does?

- Uploads changes from your local repository to a remote repository (e.g. GitHub or GitLab).
- It syncs your local repository with the remote repository so others can see and collaborate on it.

How `git push` works?

- After committing changes locally using `git commit`, they stay in your local repository.
- `git push` sends those committed changes to the remote repository, uploading with your latest work.

```bash
git push [remote-name] [branch-name]
```

- Remote name is the name of the remote repository, usually `origin` (default).
- Branch name is the name of the branch you want to push to (e.g. `main` or `master`).

### Pull Request (PR)

A pull request is a feature in platforms like GitHub that allows developers to:

- Request to merge changes from one branch into another.
- Collaborate and review code before merging.
