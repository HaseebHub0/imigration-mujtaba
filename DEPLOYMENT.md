# 🚀 Netlify Deployment Guide

## Quick Deploy Steps

### 1. **Connect to Netlify**
- Go to [netlify.com](https://netlify.com)
- Sign up/Login with your GitHub account
- Click "New site from Git"

### 2. **Choose Repository**
- Select your GitHub repository: `immigration-website`
- Netlify will automatically detect it's a Next.js project

### 3. **Build Settings**
- **Build command**: `npm run build` (already configured)
- **Publish directory**: `out` (already configured)
- **Node version**: 18 (already configured)

### 4. **Deploy**
- Click "Deploy site"
- Wait for build to complete (usually 2-3 minutes)

## 🔧 Manual Configuration (if needed)

### Build Command
```bash
npm run build
```

### Publish Directory
```
out
```

### Environment Variables (if needed)
- `NODE_VERSION`: `18`

## 📁 Files Created for Deployment

- ✅ `netlify.toml` - Netlify configuration
- ✅ `.nvmrc` - Node.js version specification
- ✅ `next.config.mjs` - Optimized for static export

## 🚨 Common Issues & Solutions

### Issue: "pnpm not recognized"
**Solution**: Use `npm run build` instead of `pnpm run build`

### Issue: Build fails
**Solution**: 
1. Check if all dependencies are in `package.json`
2. Ensure Node.js version 18+ is used
3. Check build logs for specific errors

### Issue: Images not loading
**Solution**: Images are configured as `unoptimized: true` in Next.js config

## 🌐 After Deployment

1. **Custom Domain**: Add your domain in Netlify dashboard
2. **HTTPS**: Automatically enabled
3. **Forms**: Configure form handling if needed
4. **Analytics**: Add Google Analytics or other tracking

## 📱 Performance Tips

- Images are optimized for web
- CSS is automatically minified
- JavaScript is bundled and optimized
- Static generation for better performance

## 🔄 Continuous Deployment

- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Easy rollback to previous versions

---

**Ready to deploy?** Just connect your GitHub repo to Netlify and you're all set! 🎉
