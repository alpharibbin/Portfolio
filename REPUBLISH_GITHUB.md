# Republish to GitHub - Step by Step Guide

## Current Status
✅ All changes are committed
✅ Ready to push to a new GitHub repository

## Steps to Republish

### 1. Remove Old Remote (if exists)
If you still have the old remote configured, remove it:
```bash
git remote remove origin
```

### 2. Create New Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Description: "Personal Portfolio Website - Next.js, TypeScript, Tailwind CSS, shadcn/ui"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### 3. Connect and Push
After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Remove old remote if it exists
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Verify Push
After pushing, check your GitHub repository to confirm all files are uploaded.

## Important Notes
- ✅ `.env.local` is in `.gitignore` - your credentials are safe
- ✅ `node_modules` is ignored
- ✅ `.env.example` is included (safe dummy file)
- ✅ All sensitive data is protected

## After Publishing

### Deploy to Vercel
1. Go to https://vercel.com
2. Import your GitHub repository
3. Add environment variables:
   - `YOUR_EMAIL`
   - `YOUR_APP_PASSWORD`
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
4. Deploy!

