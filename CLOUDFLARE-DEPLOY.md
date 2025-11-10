# Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy Steps

### Method 1: Connect GitHub Repo (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Select your repository: `RentaProfessor/designlandingtest` or `Kendall-website`
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node version:** `18` (or use .node-version file)

6. Click **Save and Deploy**

### Method 2: Direct Upload (Manual)

```bash
# Build the production version
npm run build

# The dist/ folder is ready to upload to Cloudflare Pages
```

Then drag and drop the `dist` folder in Cloudflare Pages dashboard.

## ⚙️ Build Configuration

**Framework preset:** Vite  
**Build command:** `npm run build`  
**Build output directory:** `dist`  
**Node version:** 18+ (set in `.node-version`)

## 🔧 Environment Variables

No environment variables needed for this static site.

## 📁 What Gets Deployed

The `dist/` folder contains:
- `index.html` - Main HTML file
- `assets/` - Optimized JS, CSS, and images
- Static files (logo, favicon, etc.)

All optimized and ready for production!

## ✅ After Deployment

1. Your site will be live at: `https://[project-name].pages.dev`
2. You can add a custom domain in Cloudflare Pages settings
3. SSL is automatic
4. Edge caching is automatic
5. Every git push auto-deploys!

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch auto-deploys
- Pull requests get preview deployments
- Rollback to any previous deployment anytime

## 📊 Performance

Cloudflare Pages provides:
- ⚡ Global CDN edge caching
- 🔒 Free SSL certificate
- 🌍 Deployed to 300+ cities worldwide
- 📈 Unlimited bandwidth (on free tier)
- 🚀 Sub-50ms response times globally

## 🐛 Troubleshooting

**Build fails?**
- Check Node version is 18+
- Run `npm install` and `npm run build` locally first
- Check build logs in Cloudflare dashboard

**404 errors?**
- Cloudflare Pages handles React routing automatically
- No additional configuration needed for this single-page app

**Assets not loading?**
- Make sure `base: './'` is in `vite.config.js` (already set)
- This makes paths work on any domain

---

🎉 Your React + Tailwind site is optimized for Cloudflare Pages!

