# PWA Maintenance & Operations Guide

**Internal documentation for As-Sunnah development team**

---

## 📋 Overview

This guide covers maintaining the Progressive Web App (PWA) for As-Sunnah Store. It includes:
- Version tracking and updates
- Service worker management
- Icon and manifest updates
- Monitoring user issues
- Performance optimization

---

## 📱 Deployed Files

### **Public-Facing Documentation**

| File | Location | Purpose |
|------|----------|---------|
| Quick Install | `/public/quick-install.html` | Visual guide (homepage CTA) |
| Full Guide | `/public/help-install-app.html` | Comprehensive help page |
| User Guide (MD) | `/public/PWA_USER_GUIDE.md` | Markdown version |
| Quick Start (MD) | `/public/PWA_QUICK_START.md` | Cheat sheet |

### **App Manifest & Icons**

| File | Location | Purpose |
|------|----------|---------|
| Manifest | `/public/manifest.json` | App metadata (name, icons, theme) |
| Browser Config | `/public/browserconfig.xml` | Windows tile configuration |
| Icons (SVG) | `/public/icons/*.svg` | App icons (6 variants) |

### **Generated Files** (Auto-generated on build)

| File | Purpose | Don't commit |
|------|---------|--------------|
| `/public/sw.js` | Service worker | ✓ Ignored in .gitignore |
| `/public/workbox-*.js` | Workbox bundles | ✓ Ignored in .gitignore |

---

## 🔄 Build & Deploy Process

### **Development Build**

```bash
npm run dev
```
- PWA **disabled** in development
- Hot reload enabled
- No service worker generated

### **Production Build**

```bash
npm run build
```
- Service worker generated in `/public/sw.js`
- Workbox cache strategies applied
- Icons and manifest included
- Ready for deployment

### **Testing Locally**

```bash
npm run build      # Build for production
npm start          # Run production server
```
Then visit: `http://localhost:3000`

---

## 📊 Version Tracking

### **Current Versions**

- **Next.js**: 16.2.4
- **@ducanh2912/next-pwa**: Latest (check `package.json`)
- **Service Worker**: Auto-versioned on each build
- **App Version**: Same as package.json

### **Update History**

Document PWA updates here:

```
Date        | Change                              | Impact
------------|-------------------------------------|--------
2026-04-22  | Initial PWA setup                   | Users can now install app
            | - Service worker added             |
            | - Manifest created                 |
            | - SVG icons generated              |
```

---

## 🎨 Updating Icons

### **Current State**

- Icons are **SVG placeholders** with brand color `#a4722c`
- Should be replaced with proper brand icons for production

### **How to Replace**

**Option 1: PNG Icons (Recommended)**

1. Create 192×192 PNG and 512×512 PNG from your logo/design
2. Save as:
   - `public/icons/icon-192.png`
   - `public/icons/icon-512.png`
3. Update `public/manifest.json`:
   ```json
   "icons": [
     {
       "src": "/icons/icon-192.png",
       "sizes": "192x192",
       "type": "image/png",
       "purpose": "any"
     },
     {
       "src": "/icons/icon-512.png",
       "sizes": "512x512",
       "type": "image/png",
       "purpose": "any"
     }
   ]
   ```
4. Delete or keep SVG versions as backup

**Option 2: SVG Icons**

Keep current SVG icons but customize the SVG content:
1. Edit `/public/icons/icon-192.svg` and `/public/icons/icon-512.svg`
2. Replace the SVG content with your logo (keep size 192 and 512)
3. Update color values as needed

**Option 3: Automated PNG Generation**

```bash
npm install --save-dev sharp
```

Create `scripts/generate-icons.js`:
```javascript
const sharp = require('sharp');

// Convert SVG to PNG at different sizes
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  sharp('src/logo.svg')
    .resize(size, size)
    .png()
    .toFile(`public/icons/icon-${size}.png`);
});
```

Run: `node scripts/generate-icons.js`

---

## 📝 Updating Manifest

### **Current Manifest Location**

`/public/manifest.json`

### **Key Fields to Update**

```json
{
  "name": "As-Sunnah Store",              // Full app name
  "short_name": "As-Sunnah",              // Home screen label (12 chars max)
  "description": "...",                   // App description
  "start_url": "/",                       // Launch URL
  "theme_color": "#a4722c",               // App bar color
  "background_color": "#ffffff",          // Splash screen background
  "icons": [...]                          // Icon references
}
```

### **When to Update**

- **name/short_name**: If rebranding
- **description**: If changing app tagline
- **theme_color**: If changing brand color
- **icons**: When adding new app icons
- **screenshots**: When app design changes significantly

---

## 🔐 Service Worker Updates

### **Service Worker Location**

Generated automatically at: `/public/sw.js`

### **Cache Strategies**

Configured in `next.config.ts`:

```typescript
const withPWAConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // Add custom cache strategies here if needed
});
```

### **Current Caching Behavior**

- **HTML pages**: Network-first (always fetch new)
- **Images**: Cache-first (serve old, update in background)
- **JavaScript**: Cache-first (updated with SW update)
- **API calls**: Depends on endpoint

### **Clearing Service Worker**

If users experience stale content:

1. **Automatic**: New builds invalidate old SW
2. **Manual**: Tell users to:
   - Clear app cache: Settings → Apps → As-Sunnah → Storage
   - Reinstall the app
   - Clear browser cache if in web browser

### **Debugging Service Worker**

```javascript
// Check if SW registered (in browser console)
navigator.serviceWorker.getRegistrations().then(registrations => {
  console.log('Service Workers:', registrations);
});

// Monitor SW updates
navigator.serviceWorker.ready.then(reg => {
  reg.addEventListener('updatefound', () => {
    console.log('New SW version available');
  });
});
```

---

## 📊 Monitoring & Analytics

### **What to Track**

1. **Installation Rate**
   - Track clicks on "Install" button
   - Monitor app usage vs website usage
   - Set up Google Analytics event tracking

2. **Engagement**
   - App opens per user
   - Session duration
   - Cart additions in-app vs web

3. **Performance**
   - Page load time (in-app vs browser)
   - Cache hit rate
   - Service worker registration time

4. **Errors**
   - Failed installations
   - Offline page views
   - Service worker errors

### **Analytics Setup**

Add to `src/app/layout.tsx`:

```typescript
useEffect(() => {
  // Track app installs
  window.addEventListener('beforeinstallprompt', (e) => {
    gtag.event('pwa_install_prompt_shown');
  });

  // Track app launch
  window.addEventListener('load', () => {
    if (window.navigator.standalone === true) {
      gtag.event('pwa_app_launched');
    }
  });

  // Track offline usage
  window.addEventListener('offline', () => {
    gtag.event('went_offline');
  });

  window.addEventListener('online', () => {
    gtag.event('went_online');
  });
}, []);
```

---

## 🚨 Common Issues & Solutions

### **Issue: Users See Stale Content**

**Cause**: Service worker caching old content

**Solution**:
1. Deploy new build (invalidates SW cache)
2. Tell users to force refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. Clear site data: DevTools → Application → Storage → Clear

### **Issue: App Won't Install**

**Cause**: Manifest issues or missing icons

**Solution**:
1. Check manifest in DevTools: Application → Manifest
2. Verify all required fields filled
3. Ensure icons exist and are correct size
4. Check for HTTPS (localhost ok for dev)

### **Issue: Service Worker Registration Fails**

**Cause**: Browser compatibility or SW syntax error

**Solution**:
1. Check console for errors: DevTools → Console
2. Verify SW file exists: `/public/sw.js`
3. Clear site data and reload
4. Try different browser

### **Issue: High Data Usage from App**

**Cause**: Excessive image caching

**Solution**:
1. Reduce cache size in PWA config
2. Implement image optimization (WebP, lazy loading)
3. Clear old service worker versions

---

## 🔧 Configuration Files

### **`next.config.ts`**

```typescript
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  // Existing config...
  turbopack: {},
};

const withPWAConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWAConfig(nextConfig);
```

**Key Options**:
- `dest`: Where to output service worker
- `disable`: Disable in development to allow hot reload

### **`public/manifest.json`**

See "Updating Manifest" section above.

### **`.gitignore`**

```
# PWA files
/public/sw.js
/public/sw.js.map
/public/workbox-*.js
/public/workbox-*.js.map
```

---

## 📈 Performance Optimization

### **Lighthouse PWA Audit**

Run periodically:

```bash
npm run build && npm start
# DevTools → Lighthouse → PWA
```

**Target**: 90+ score

**Common issues**:
- Missing icons: Add all required sizes
- No manifest: Ensure `/public/manifest.json` exists
- No HTTPS: Required for production
- Offline page: Ensure `/app/offline/page.tsx` works

### **Cache Optimization**

To reduce app size:

```typescript
// In next.config.ts - future enhancement
const withPWAConfig = withPWA({
  dest: "public",
  runtimeCaching: [
    // Cache images for 7 days
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: 'CacheFirst',
      options: {
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
  ],
});
```

---

## 🚀 Deployment Checklist

Before deploying PWA update:

- [ ] Run `npm run build` successfully
- [ ] Service worker generated at `/public/sw.js`
- [ ] Icons visible in `/public/icons/`
- [ ] Manifest valid: DevTools → Application → Manifest
- [ ] Lighthouse PWA score ≥ 90
- [ ] Test offline mode works
- [ ] Test installation on real device
- [ ] Check git history for changes
- [ ] Update version in `package.json` if major change
- [ ] Document update in version tracking

---

## 📞 Support Resources

### **For Users**

- Help page: `/help-install-app.html`
- Quick start: `/quick-install.html`
- User guide: `/PWA_USER_GUIDE.md`

### **For Developers**

- Next.js Docs: https://nextjs.org/docs
- PWA Plugin: https://github.com/DuCanhGit/next-pwa
- Workbox Docs: https://developers.google.com/web/tools/workbox
- Web.dev PWA Guide: https://web.dev/progressive-web-apps/

---

## 🔄 Update Frequency

### **Recommended Schedule**

- **Weekly**: Monitor error logs and user feedback
- **Monthly**: Run Lighthouse audit, check performance metrics
- **Quarterly**: Update icons/manifest if needed
- **With each app release**: Update package.json version

### **Breaking Changes**

If making breaking changes (e.g., manifest structure):
1. Test thoroughly on multiple devices
2. Deploy during low-traffic hours
3. Monitor user feedback closely
4. Have rollback plan ready

---

## 📝 Changelog

Track all PWA changes here for team reference:

```
Version | Date       | Changes
--------|------------|------------------------------------------
1.0.0   | 2026-04-22 | Initial PWA implementation
        |            | - Service worker added
        |            | - Manifest created
        |            | - Documentation published
```

---

## Questions?

Contact the development team or check internal documentation.
