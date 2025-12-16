# Installation Guide

This guide will help you set up and run the portfolio website.

## Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

## Installation Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install all required packages including:
   - Next.js 14
   - React 18
   - TypeScript
   - Tailwind CSS
   - shadcn/ui components
   - Framer Motion
   - next-themes
   - And all other dependencies

2. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Start Production Server**

   ```bash
   npm start
   ```

## Adding More shadcn/ui Components

If you want to add more shadcn/ui components in the future, you can use:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add table
```

## Customization

1. **Update Personal Information**: Edit files in the `data/` directory
   - `data/personal.ts` - Your personal info, bio, and social links
   - `data/experience.ts` - Your work experience
   - `data/projects.ts` - Your projects
   - `data/skills.ts` - Your skills
   - `data/education.ts` - Your education
   - `data/certifications.ts` - Your certifications

2. **Change Theme Colors**: Edit `app/globals.css` to modify the CSS variables for colors

3. **Update SEO Metadata**: Edit `app/layout.tsx` to change the default metadata

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── certifications/    # Certifications page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer component
│   ├── theme-provider.tsx # Theme provider wrapper
│   └── page-transition.tsx # Page transition animations
├── data/                 # Data files
│   ├── personal.ts       # Personal information
│   ├── experience.ts     # Work experience
│   ├── projects.ts       # Projects data
│   ├── skills.ts         # Skills data
│   ├── education.ts      # Education data
│   └── certifications.ts # Certifications data
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions (cn helper)
```

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors after installation, try:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Restart your IDE/editor

### Build Errors

If you encounter build errors:
1. Make sure all dependencies are installed: `npm install`
2. Check Node.js version: `node --version` (should be 18+)
3. Clear Next.js cache: `rm -rf .next` (or `rd /s /q .next` on Windows)

### Theme Not Working

If the theme toggle doesn't work:
1. Make sure `next-themes` is installed
2. Check that `ThemeProvider` is properly set up in `app/layout.tsx`
3. Clear browser cache and reload

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Just make sure to run `npm run build` during the build process.

