# Learning With Us

A responsive company profile website for Learning With Us, built with React and Vite.

## Features

- Home page with hero section, CTA, social icons, and testimonial carousel
- About page
- Vision & Mission page
- Products & Services page
- Dark/light theme toggle
- Responsive layout for desktop and mobile
- Linktree integration for contact access

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

Production output will be generated in the `dist` folder.

## Deploy to Vercel

1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Use these settings:
	- Build Command: `npm run build`
	- Output Directory: `dist`
4. Deploy.

This project already includes a [vercel.json](vercel.json) rewrite so React Router routes work correctly on refresh.

## Project Structure

- `src/App.jsx` - app shell and theme state
- `src/pages` - page components
- `src/components` - shared layout components
- `src/styles.css` - global styling and animations

## Customization

Edit the content inside `src/pages` and `src/components` to update text, links, or sections.
