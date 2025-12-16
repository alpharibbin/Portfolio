# GitHub Repository Setup Guide

## Steps to Push to GitHub

### 1. Create a New Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Description: "Personal Portfolio Website - Next.js, TypeScript, Tailwind CSS"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### 2. Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website with contact form, skills, projects, and animations"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Important Notes

- ✅ `.env.local` is already in `.gitignore` - your credentials are safe
- ✅ `node_modules` is ignored
- ✅ Build files are ignored
- ✅ All sensitive data is protected

### 4. After Pushing

1. Go to your repository settings
2. Add environment variables for deployment (Vercel, etc.):
   - `YOUR_EMAIL`
   - `YOUR_APP_PASSWORD`
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`

### 5. Deploy to Vercel

1. Go to https://vercel.com
2. Import your GitHub repository
3. Add environment variables
4. Deploy!

