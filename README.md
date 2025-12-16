# Personal Portfolio Website

A modern, premium-quality personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- ✨ Modern UI with shadcn/ui components
- 🎨 Dark & Light theme toggle
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 14
- ♿ Accessibility best practices
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note**: All shadcn/ui components are already set up. If you want to add more components in the future, use:
```bash
npx shadcn-ui@latest add [component-name]
```

For detailed installation instructions, see [INSTALL.md](./INSTALL.md)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── certifications/    # Certifications page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── data/                 # Example data objects
└── public/               # Static assets
```

## Customization

1. **Update Personal Information**: Edit files in the `data/` directory:
   - `data/personal.ts` - Your name, role, bio, email, social links
   - `data/experience.ts` - Your work experience entries
   - `data/projects.ts` - Your projects and portfolio items
   - `data/skills.ts` - Your technical skills
   - `data/education.ts` - Your educational background
   - `data/certifications.ts` - Your certifications and achievements

2. **Modify Theme Colors**: Edit CSS variables in `app/globals.css`

3. **Update SEO Metadata**: Edit `app/layout.tsx` to change default metadata

4. **Add Images**: Place your images in the `public/` directory and reference them in your data files

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy to Vercel or your preferred hosting platform.

## License

MIT

