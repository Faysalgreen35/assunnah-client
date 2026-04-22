# 🔗 Git + Vercel Auto-Deploy Setup

Complete guide to set up Git and automatic deployment to Vercel.

---

## 📋 What We're Setting Up

- ✅ **Git** on your local machine
- ✅ **GitHub** repository (cloud storage for code)
- ✅ **Vercel** connected to GitHub
- ✅ **Auto-deployment** (push to GitHub → auto-deploy to Vercel)

---

## 🚀 Quick Overview (How It Works)

```
Your Computer → Git → GitHub → Vercel → Live Website
   (changes)    (push)  (cloud)  (auto)     (users)
```

**When you:**
1. Make code changes on your computer
2. Commit them locally (`git commit`)
3. Push to GitHub (`git push`)

**Vercel automatically:**
1. Detects the push
2. Builds your app
3. Deploys new version
4. Your site updates live

No manual deployments needed! ⚡

---

## 📥 Part 1: Install Git

### **Windows**

1. Go to **git-scm.com**
2. Download **Git for Windows**
3. Run the installer
4. Use default options
5. Click **Finish**

**Verify installation:**
```bash
git --version
# Should show: git version 2.xx.x
```

### **Mac**

```bash
# Using Homebrew (recommended)
brew install git

# Or download from git-scm.com
```

**Verify:**
```bash
git --version
```

### **Linux**

```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora/RedHat
sudo dnf install git
```

---

## ⚙️ Part 2: Configure Git

Set your name and email (used for commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**Example:**
```bash
git config --global user.name "Faysal Green"
git config --global user.email "aetherzen.associate1@gmail.com"
```

**Verify:**
```bash
git config --list
# Shows all your git settings
```

---

## 🔑 Part 3: Set Up SSH Authentication

This allows Git to authenticate with GitHub without entering passwords every time.

### **Step 1: Generate SSH Key**

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

**When prompted:**
- File location: Press Enter (default is fine)
- Passphrase: Press Enter (no passphrase for simplicity)

**Result:** Creates two files in `~/.ssh/`
- `id_ed25519` (private key - keep secret)
- `id_ed25519.pub` (public key - share with GitHub)

### **Step 2: Copy Your Public Key**

**Windows (PowerShell):**
```bash
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

**Mac/Linux:**
```bash
cat ~/.ssh/id_ed25519.pub
# Then copy the output manually
```

### **Step 3: Add Key to GitHub**

1. Go to **github.com** → Sign in
2. Click your profile → **Settings**
3. Left menu → **SSH and GPG keys**
4. Click **New SSH key**
5. **Title:** "My Computer" (or device name)
6. **Key:** Paste the key you copied
7. Click **Add SSH key**

### **Step 4: Test Connection**

```bash
ssh -T git@github.com
# Should show: Hi YourUsername! You've successfully authenticated...
```

---

## 📦 Part 4: Initialize Git in Your Project

Navigate to your project folder:

```bash
cd F:/NextZen/zico/assunnah-client
```

Initialize Git:

```bash
git init
```

Check status:

```bash
git status
# Shows files ready to commit
```

---

## 📝 Part 5: Create `.gitignore`

This file tells Git which files to ignore (don't commit).

**Already exists in your project?**
```bash
cat .gitignore
# Shows current ignore rules
```

**Make sure it includes PWA files:**
```
# PWA - auto-generated (don't commit)
/public/sw.js
/public/sw.js.map
/public/workbox-*.js
/public/workbox-*.js.map
```

---

## 🔄 Part 6: Make First Commit

### **Step 1: Stage Files**

```bash
# Add all changes
git add .

# Or add specific files
git add src/
git add public/manifest.json
git add PWA_SETUP_GUIDE.md
```

### **Step 2: Check What's Staged**

```bash
git status
# Shows green (staged) files
```

### **Step 3: Commit**

```bash
git commit -m "Initial commit: Add Next.js app with PWA setup"
```

**Good commit messages:**
```bash
# ✅ Good
git commit -m "feat: Add PWA with manifest and service worker"
git commit -m "docs: Add user documentation"
git commit -m "fix: Hydration error in layout"

# ❌ Bad
git commit -m "update"
git commit -m "stuff"
git commit -m "fix bug"
```

### **Step 4: Check Log**

```bash
git log --oneline
# Shows your commits
```

---

## 🌐 Part 7: Create GitHub Repository

### **Step 1: Go to GitHub**

1. Visit **github.com**
2. Sign in (or create account)
3. Click **+** icon → **New repository**

### **Step 2: Configure Repository**

**Repository name:** 
```
assunnah-client
```

**Description:**
```
As-Sunnah Store - Next.js PWA with offline support
```

**Visibility:**
- ✅ Public (recommended for portfolio)
- ⚪ Private (if sensitive code)

**Initialize with:**
- ⚪ Don't check any options (we already have commits locally)

### **Step 3: Create**

Click **Create repository**

---

## 🔗 Part 8: Connect Local Git to GitHub

After creating the repo, GitHub shows commands. Run these:

```bash
# Point local git to GitHub repo
git remote add origin git@github.com:YOUR-USERNAME/assunnah-client.git

# Rename branch to 'main'
git branch -M main

# Push commits to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin git@github.com:Faysalgreen35/assunnah-client.git
git branch -M main
git push -u origin main
```

**Verify:**
```bash
git remote -v
# Shows: origin  git@github.com:YOUR-USERNAME/assunnah-client.git
```

---

## 🚀 Part 9: Connect Vercel to GitHub

### **Step 1: Go to Vercel**

1. Visit **vercel.com**
2. Sign in with GitHub (or create account)
3. Click **Add New** → **Project**

### **Step 2: Select Repository**

1. Click **Import Git Repository**
2. **GitHub** is selected automatically
3. Search for `assunnah-client`
4. Click **Select**

### **Step 3: Configure Project**

**Framework:** Next.js (auto-selected) ✓  
**Build Command:** `npm run build` (default) ✓  
**Output Directory:** `.next` (default) ✓  

**Environment Variables** (if needed):
```
NEXT_PUBLIC_API_URL = your-api-url
NEXTAUTH_URL = your-domain
```

### **Step 4: Deploy**

Click **Deploy** button

**Wait 2-5 minutes** for first deployment

---

## ✅ Part 10: Test Auto-Deployment

### **Make a Small Change**

Edit a file in your project:

```bash
# Example: Edit the offline page
nano src/app/offline/page.tsx
# Change a message
```

### **Commit and Push**

```bash
git add .
git commit -m "test: Update offline page message"
git push origin main
```

### **Watch Vercel Deploy**

1. Go to **vercel.com** → Your Project
2. Watch **Deployments** tab
3. See it building...
4. See it deploying...
5. When it's done → **Visit** button appears

✅ **Your change is live!**

---

## 🔄 Your Daily Workflow

Once everything is set up:

### **Make Changes**
```bash
# Edit files in your code editor
# Test locally: npm run dev
```

### **Commit**
```bash
git add .
git commit -m "feat: Add new feature"
```

### **Push**
```bash
git push origin main
```

### **Done!** ✨
- Vercel automatically detects push
- Builds your app
- Deploys to live site
- Changes live in 2-5 minutes

---

## 📊 Useful Git Commands

### **Check Status**
```bash
git status
# Shows changed files
```

### **View History**
```bash
git log --oneline
# Shows last 10 commits

git log --oneline -n 5
# Shows last 5 commits
```

### **View Changes**
```bash
git diff
# Shows what changed since last commit
```

### **Undo Changes** (before commit)
```bash
git restore filename.txt
# Undo changes to one file

git restore .
# Undo all changes
```

### **Undo Commit** (last commit)
```bash
git reset --soft HEAD~1
# Undo commit but keep changes staged

git reset --hard HEAD~1
# Undo commit and discard changes
```

### **Create Branch** (for features)
```bash
git checkout -b feature/new-feature
# Create and switch to new branch

git checkout main
# Switch back to main
```

### **Push Branch to GitHub**
```bash
git push -u origin feature/new-feature
```

---

## 🔍 Vercel Dashboard Features

### **Deployments Tab**
- See all deployments
- View build logs
- Rollback to previous version
- See deployment status

### **Settings Tab**
- Environment variables
- Custom domains
- Cron jobs
- Team members

### **Analytics Tab**
- Traffic data
- Page load times
- Error rates
- Real user metrics

---

## 🆘 Common Issues & Solutions

### **Issue: "Permission denied (publickey)"**

**Cause:** SSH key not recognized

**Fix:**
```bash
# Test SSH connection
ssh -T git@github.com

# If it fails, regenerate SSH key (Part 3 above)
# And re-add it to GitHub settings
```

### **Issue: "Everything up-to-date" (nothing pushes)**

**Cause:** Already pushed

**Fix:**
```bash
git log --oneline
# Verify you made commits

git status
# Should show "nothing to commit"
```

### **Issue: Merge Conflicts**

**Cause:** GitHub has changes you don't have locally

**Fix:**
```bash
git pull origin main
# Pull latest changes from GitHub
# Resolve conflicts if any
git push origin main
# Push again
```

### **Issue: Vercel Deployment Fails**

**Check:**
1. Vercel logs: Deployments → Failed build → View Logs
2. Common issues:
   - Missing environment variables
   - Build errors (TypeScript, syntax)
   - Missing files

**Fix:**
1. Fix error locally
2. Commit and push
3. Vercel auto-rebuilds

---

## 📈 Best Practices

### **Commit Often**
```bash
# Good: Multiple small commits
git commit -m "Add new component"
git commit -m "Fix styling"
git commit -m "Add tests"

# Bad: One huge commit
git commit -m "Updated everything"
```

### **Write Clear Messages**
```bash
# Format: [type]: [description]
# Types: feat, fix, docs, style, refactor, test, chore

git commit -m "feat: Add dark mode toggle"
git commit -m "fix: Hydration error in layout"
git commit -m "docs: Update README"
```

### **Pull Before Push**
```bash
git pull origin main
git push origin main
```

### **Use Branches for Features**
```bash
# Main branch is production
# Create branches for new features
git checkout -b feature/dark-mode
# Work on feature
git push origin feature/dark-mode
# Then merge when ready
```

---

## 🎯 Next Steps

1. ✅ Install Git
2. ✅ Configure Git with your name/email
3. ✅ Set up SSH authentication
4. ✅ Initialize Git in your project
5. ✅ Make first commit
6. ✅ Create GitHub repository
7. ✅ Push to GitHub
8. ✅ Connect Vercel to GitHub
9. ✅ Test auto-deployment
10. ✅ You're done! 🚀

---

## 💡 Pro Tips

1. **GitHub Desktop (optional)** — GUI for Git if you prefer clicking
2. **VS Code Git Integration** — Built-in Git commands in editor
3. **Branch Protection** — Require reviews before merging to main
4. **Automatic Backups** — GitHub is your backup
5. **Portfolio Building** — GitHub shows your contributions

---

## 📞 Need Help?

**Git Issues:**
- https://git-scm.com/doc
- https://github.com/git/git/wiki/Git-Beginner's-Guide

**GitHub Issues:**
- https://docs.github.com
- https://github.com/features/issues

**Vercel Issues:**
- https://vercel.com/docs
- https://vercel.com/support

---

## ✅ Summary

**What you now have:**
- ✅ Git version control on your computer
- ✅ GitHub backup of your code
- ✅ Automatic deployment to Vercel on every push
- ✅ Live PWA that updates when you push changes

**Your workflow:**
```
Edit → Commit → Push → Auto-Deploy → Live! ✨
```

**No manual deployment needed ever again!**

---

*That's it! You're now a professional developer with automated deployments.* 🎉
