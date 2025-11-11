# Troubleshooting Guide

## White Screen & MIME Type Error

If you're seeing a white screen with this error:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx"
```

### Root Cause
This happens when Cloudflare Pages serves source files (`.jsx`) instead of built files (`.js`), or when the server doesn't set the correct MIME type.

### Solutions

#### 1. Verify Cloudflare Pages Configuration
Ensure your Cloudflare Pages project is configured correctly:
- **Build command:** `npm run build`
- **Build output directory:** `dist` (NOT `public` or root)
- **Root directory:** `/` (leave empty)

#### 2. Check Build Output
After building locally, verify `dist/` contains:
- `index.html` (should reference `.js` files, NOT `.jsx`)
- `_headers` file (for MIME type configuration)
- `assets/` folder with compiled JavaScript

#### 3. Clear Cloudflare Cache
1. Go to Cloudflare Dashboard
2. Navigate to your Pages project
3. Go to **Settings** → **Builds & deployments**
4. Click **Retry deployment** or trigger a new build
5. Wait for deployment to complete

#### 4. Hard Refresh Browser
- **Chrome/Edge:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Firefox:** `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Safari:** `Cmd+Option+R`

#### 5. Verify Deployment
Check that the deployed site serves files from `dist/`:
- Visit your site's URL
- Open browser DevTools (F12)
- Check Network tab
- Verify JavaScript files have `.js` extension (not `.jsx`)
- Verify `Content-Type` header is `application/javascript`

### If Issue Persists

1. **Check Build Logs:**
   - Go to Cloudflare Pages dashboard
   - Check the latest build logs
   - Ensure build completed successfully

2. **Verify _headers File:**
   - The `_headers` file should be in `dist/` after build
   - It should contain MIME type rules for `.js` and `.jsx` files

3. **Manual Deployment:**
   - Build locally: `npm run build`
   - Upload the entire `dist/` folder manually to Cloudflare Pages
   - This bypasses any Git-related issues

4. **Check for Caching:**
   - Cloudflare may cache old files
   - Try accessing via incognito/private window
   - Or add `?v=2` to your URL to bypass cache

## Deprecated Meta Tag Warning

The warning about `apple-mobile-web-app-capable` is fixed. The new meta tag `mobile-web-app-capable` has been added alongside the old one for compatibility.


