# ⚡ Git + Vercel Setup - Quick Reference

## 🚀 Do This (In Order)

### **1. Install Git**
- Windows: Download from `git-scm.com`
- Mac: `brew install git`
- Linux: `sudo apt install git`

```bash
git --version
# Verify it works
```

### **2. Configure Git**
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### **3. Generate SSH Key**
```bash
ssh-keygen -t ed25519 -C "your@email.com"
# Press Enter twice (no passphrase)
```

### **4. Get Your Public Key**

**Windows (PowerShell):**
```bash
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

**Mac/Linux:**
```bash
cat ~/.ssh/id_ed25519.pub
```

### **5. Add Key to GitHub**
1. Go to `github.com` → Settings → SSH keys
2. Click **New SSH key**
3. Paste your key
4. Click **Add**

### **6. Test Connection**
```bash
ssh -T git@github.com
# Should say "Hi YourName! You've successfully authenticated"
```

### **7. Initialize Git in Your Project**
```bash
cd F:/NextZen/zico/assunnah-client

git init
```

### **8. Make First Commit**
```bash
git add .
git commit -m "Initial commit: Add Next.js app with PWA"
```

### **9. Create GitHub Repository**
1. Go to `github.com`
2. Click **+** → **New repository**
3. Name: `assunnah-client`
4. Click **Create repository**

### **10. Connect Local to GitHub**
```bash
git remote add origin git@github.com:YOUR-USERNAME/assunnah-client.git
git branch -M main
git push -u origin main
```

### **11. Connect Vercel to GitHub**
1. Go to `vercel.com`
2. Click **Add New** → **Project**
3. Select your repository
4. Click **Deploy**

### **12. Done!** ✨
Now every push auto-deploys!

---

## 📤 After Setup: Daily Workflow

```bash
# Make changes in your code editor

# Commit
git add .
git commit -m "feat: Add new feature"

# Push
git push origin main

# ✅ Vercel automatically deploys!
# No more manual work!
```

---

## 🔗 How Auto-Deploy Works

```
You Push Code → GitHub Notifies Vercel → Vercel Builds → Vercel Deploys
    (1 sec)              (1 sec)           (1-2 min)      (1-2 min)
                                          LIVE! ✨
```

---

## 💻 Useful Commands

```bash
# Check git status
git status

# View your commits
git log --oneline

# View changes
git diff

# Undo changes (before commit)
git restore .

# Test SSH
ssh -T git@github.com
```

---

## ✅ Verify It Works

1. Make a small change in your code
2. Run: `git add .`
3. Run: `git commit -m "test"`
4. Run: `git push origin main`
5. Go to `vercel.com` → Deployments
6. See it building...
7. When done → Your changes are live! 🚀

---

## 🆘 Having Issues?

**SSH permission denied?**
- Regenerate SSH key (step 3 above)
- Verify in GitHub settings

**Can't push to GitHub?**
- Check `git remote -v`
- Make sure you have commits (`git log`)

**Vercel won't deploy?**
- Check Vercel logs in dashboard
- Check for build errors

---

## 📚 Full Guide

See `GIT_AND_VERCEL_SETUP.md` for complete detailed guide with all explanations.

---

## 🎉 You're All Set!

Your app now has:
- ✅ Git version control
- ✅ GitHub backup
- ✅ Automatic Vercel deployments
- ✅ Professional workflow

**No manual deployments ever again!** 🚀
