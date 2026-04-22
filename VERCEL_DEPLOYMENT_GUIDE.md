# 🚀 Deploy PWA to Vercel

Complete guide to deploy your As-Sunnah PWA to Vercel.

---

## ✅ Prerequisites

- GitHub account (free)
- Vercel account (free)
- Code pushed to GitHub

---

## 📋 Step-by-Step Deployment

### **Step 1: Prepare Code for Git**

```bash
# Stage all changes
git add .

# Check what's staged
git status

# Commit changes
git commit -m "Add PWA features: manifest, service worker, offline page, documentation"

# Push to GitHub
git push origin main
```

---

### **Step 2: Create GitHub Repository** (If not already done)

1. Go to **github.com** → **New Repository**
2. Name: `assunnah-client` (or your choice)
3. Description: "As-Sunnah Store - Next.js PWA"
4. Public or Private (your choice)
5. Click **Create Repository**

Then follow GitHub's instructions:
```bash
git remote add origin https://github.com/YOUR-USERNAME/assunnah-client.git
git branch -M main
git push -u origin main
```

---

### **Step 3: Connect to Vercel**

**Option A: Automatic (Recommended)**

1. Go to **vercel.com** → Sign in with GitHub
2. Click **Add New** → **Project**
3. Find your `assunnah-client` repository
4. Click **Import**
5. Vercel auto-detects Next.js ✓
6. Click **Deploy**

**Option B: Manual**

1. Go to **vercel.com** → **New Project**
2. Select GitHub
3. Authorize Vercel to access your repositories
4. Select `assunnah-client` repo
5. Click **Import**
6. Review settings (should be auto-configured)
7. Click **Deploy**

---

### **Step 4: Configure Environment Variables** (If needed)

If your app uses `.env` variables:

1. Go to **Vercel Dashboard** → Your Project
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   ```
   NEXT_PUBLIC_API_URL = http://localhost:5001/api/v1
   NEXTAUTH_URL = your-domain.vercel.app
   NEXTAUTH_SECRET = your-secret
   ```
4. Click **Save**

---

### **Step 5: Wait for Deployment**

- Vercel builds and deploys automatically
- Takes 2-5 minutes
- You'll see a URL like: `assunnah-client-xyz.vercel.app`
- Status shows **Production ✓** when done

---

### **Step 6: Verify PWA Works on Vercel**

1. Open your Vercel URL in Chrome
2. **DevTools** → **Application** tab
3. Check **Manifest**: All fields populated ✓
4. Check **Service Workers**: `sw.js` registered ✓
5. Test offline: Toggle **Offline** checkbox
6. Refresh → Page still loads ✓

---

## 🎯 Add Custom Domain

### **Connect Your Domain**

1. Go to **Vercel Dashboard** → Your Project
2. Click **Settings** → **Domains**
3. Enter your domain: `assunnah.com`
4. Follow DNS setup instructions
5. Vercel provides nameservers or DNS records
6. Update domain registrar with Vercel's DNS
7. Wait 24 hours for DNS to propagate

### **Get SSL Certificate (HTTPS)**

Vercel automatically provides **free SSL** for all domains. No extra setup needed! ✓

---

## 🔄 Continuous Deployment

Now that you're on Vercel:

**Auto-deploy on push:**
```bash
git push origin main
```
→ Vercel detects push → Auto-builds → Auto-deploys ✓

**No manual deployment needed!**

---

## 🔐 Environment Variables for Production

Update your `.env` for production:

```bash
# .env.local (local development)
NEXT_PUBLIC_API_URL=http://localhost:5001/api/v1

# Vercel automatically uses production .env when deployed
```

Add to Vercel dashboard:
```
NEXT_PUBLIC_API_URL = https://your-api-server.com/api/v1
NEXTAUTH_URL = https://assunnah.com
NEXTAUTH_SECRET = (use a strong secret)
NEXT_PUBLIC_APP_URL = https://assunnah.com
```

---

## 📊 Monitor Deployment

### **Vercel Dashboard**

1. **Deployments tab** → See all deploys
2. **Analytics** → Traffic, performance metrics
3. **Logs** → Check for errors
4. **Settings** → Manage environment, domains, etc.

### **Performance Monitoring**

Go to **Analytics** tab to see:
- Page views
- Response times
- Error rates
- Traffic trends

---

## 🧪 Test PWA on Vercel

### **Verify Installation Works**

1. Visit your Vercel URL in Chrome
2. Click **Install** button in address bar
3. Choose **Install**
4. App installs to desktop ✓

### **Verify Offline Works**

1. Open DevTools → **Application**
2. Check **Offline** checkbox
3. Refresh page → Still loads from cache ✓
4. Try `/offline` → Shows offline page ✓

### **Lighthouse Audit**

1. DevTools → **Lighthouse**
2. Select **PWA** category
3. Run audit → Target 90+ score ✓

---

## 🐛 Troubleshooting

### **Build Fails on Vercel**

**Check:**
1. Vercel logs: Click **Deployments** → **Failed** deployment
2. Look for error messages
3. Common issues:
   - Missing `.env` variables
   - TypeScript errors
   - Module not found

**Fix:**
1. Fix error locally: `npm run build`
2. Commit and push: `git push origin main`
3. Vercel auto-rebuilds

### **PWA Not Working on Vercel**

**Check:**
1. Is it HTTPS? (Vercel provides free SSL)
2. Is manifest.json loading? DevTools → Application → Manifest
3. Is sw.js generated? Check public folder
4. Clear browser cache and try again

**Fix:**
1. Clear site data: DevTools → Application → Storage → Clear site data
2. Reload page
3. Try in incognito window

### **Custom Domain Not Working**

**Issue:** Domain shows Vercel's default page

**Fix:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS records are correct
3. In Vercel: Settings → Domains → Verify
4. Use DNS checker: `nslookup yourdomain.com`

---

## 📱 Share Your PWA

Now that it's deployed:

### **Share Installation Link**

Send to users:
```
Install our app: https://assunnah.com/quick-install.html
```

### **Update Documentation Links**

Update all docs to use your real domain:
- `quick-install.html` → `/quick-install.html`
- `help-install-app.html` → `/help-install-app.html`
- Email campaigns → `https://assunnah.com/quick-install.html`

### **Social Media Post**

```
📱 Install As-Sunnah as an App!

✅ Works offline
⚡ Loads instantly  
🎯 Easy access from home screen
🔔 Get order notifications

Download now: https://assunnah.com
```

---

## 🔄 Update Process

### **Make Changes Locally**

```bash
# Make code changes
# Test locally: npm run dev
git add .
git commit -m "Description of changes"
git push origin main
```

**Vercel automatically:**
1. Detects push
2. Builds the app
3. Runs tests (if configured)
4. Deploys to production
5. Shows deployment URL

No manual steps needed! ✓

---

## 📈 Production Checklist

Before going live, verify:

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel successfully
- [ ] PWA installs correctly
- [ ] Offline page works
- [ ] Lighthouse score ≥ 90
- [ ] Manifest.json loads
- [ ] Service worker registered
- [ ] Images load properly
- [ ] Cart/checkout works
- [ ] Email/support links active

---

## 🚀 Optional Enhancements

### **Enable Analytics**

```bash
npm install @vercel/analytics @vercel/web-vitals
```

Add to `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### **Add API Routes** (Optional)

Create `src/app/api/hello/route.ts`:
```typescript
export async function GET() {
  return Response.json({ hello: 'world' });
}
```

Available at: `https://assunnah.com/api/hello`

### **Enable Caching Headers**

Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/icons/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 💰 Pricing

**Vercel Free Tier Includes:**
- ✅ Unlimited projects
- ✅ Unlimited deployments
- ✅ Serverless functions
- ✅ Custom domains
- ✅ Free SSL/HTTPS
- ✅ Analytics (basic)
- ✅ PWA support

**Perfect for your app!** No cost. 🎉

---

## 🎓 Useful Vercel Features

1. **Instant Rollback**: Revert to previous deployment in 1 click
2. **Preview Deployments**: Every git branch gets a preview URL
3. **Edge Functions**: Deploy code to edge servers worldwide
4. **Analytics**: See real user metrics
5. **Monitoring**: Get alerts on errors/performance issues

---

## 📞 Support

**Issues?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/help
- Next.js Docs: https://nextjs.org/docs

---

## ✅ Summary

**To deploy your PWA to Vercel:**

1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! ✓

**Your PWA is now live and auto-updates on every push!**

---

## 🎉 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Verify PWA works (install, offline, etc.)
3. ✅ Add custom domain
4. ✅ Share installation link with users
5. ✅ Monitor analytics
6. ✅ Celebrate! 🚀
