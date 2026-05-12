# Santhosh Ganesan - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and TanStack React Start.
It showcases professional AI, IoT, and software engineering work using dynamic markdown-driven content, polished UI, and Cloudflare Workers deployment.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile screens
- **Dynamic Content**: Projects and certifications are loaded from markdown files
- **Modern UI**: Gradient backgrounds, glass cards, smooth animations, and hover effects
- **SSR + Edge Deployment**: Built with TanStack React Start and deployable to Cloudflare Workers
- **Markdown Rendering**: Project content is rendered from markdown with a simple authoring flow
- **Contact Integration**: Contact page with direct email links and rich interaction
- **Project Showcase**: Detailed project pages with reusable route generation and dynamic metadata

## 🛠️ Technologies Used

- Frontend: React 19 + TypeScript
- Styling: Tailwind CSS v4
- Routing: TanStack React Router / TanStack React Start
- Build Tool: Vite
- Deployment: Cloudflare Workers (Wrangler)
- Markdown: Vite markdown imports + custom markdown parsing logic
- Icons: Lucide React

## 📁 Project Structure

```text
src/
├── components/      # Shared UI components and layout pieces
├── content/         # Markdown content for projects and certifications
├── hooks/           # Reusable hooks
├── lib/             # Utility helpers and error capture
├── routes/          # Page route components and route definitions
└── styles.css       # Tailwind + custom CSS theme
```

## 🎯 How to Add New Projects

1. Create a new markdown file in `src/content/projects/`:

```md
---
title: AI Predictive Maintenance System
category: Software Systems • AI Applications
summary: Predictive maintenance platform for industrial systems.
stack: [Python, FastAPI, Streamlit, Machine Learning]
metric: Reduced downtime by 30%
---

Project details here...
```

2. The project is loaded automatically by the markdown content loader.
3. Add or update frontmatter fields to control how it appears in the project grid.

## 📜 How to Add New Certifications

1. Create a new markdown file in `src/content/certifications/`:

```md
---
title: AWS Certified Solutions Architect
issuer: Amazon Web Services
date: 2026
skills:
  - Cloud Architecture
  - Distributed Systems
---

Certification details here...
```

2. The certification will be available in the certifications section automatically.

## 🔧 Development Setup

Clone the repository:

```bash
git clone <repository-url>
cd website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment to Cloudflare Workers

This app is configured for Cloudflare Workers deployment.

1. Install Wrangler globally if needed:

```bash
npm install -g wrangler
```

2. Set your Cloudflare account ID in `wrangler.jsonc`.
3. Deploy:

```bash
npm run deploy:cloudflare
```

## 🎨 Customization

Update your personal information and branding in:

- `src/routes/index.tsx` — landing page hero and summary
- `src/components/Navbar.tsx` — site name and navigation
- `src/routes/about.tsx` — bio and experience
- `src/routes/projects.tsx` — project filters and metadata
- `src/content/projects/` — project markdown files
- `src/content/certifications/` — certification markdown files

## 📱 Responsive Design Notes

- Mobile-first styling with responsive breakpoints
- Collapsible mobile menu for small screens
- Flexible grid layouts for project and feature cards
- Touch-friendly button and link interactions

## ⚡ Performance Notes

- Vite build optimizations for client and SSR
- Tailwind CSS with a lightweight utility-first approach
- Minimal dependencies for faster load times

## 📄 License

This project is available under the MIT License.
