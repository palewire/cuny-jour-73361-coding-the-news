# cuny-jour-73361-coding-the-news

The syllabus for JOUR 73361: "Coding the News" for the Craig Newmark Graduate School of Journalism at the City University of New York.

## SvelteKit 5 Project

This is a minimal SvelteKit 5 project configured for static site generation and deployment to GitHub Pages.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Building

To create a production build:

```bash
npm run build
```

The static site will be generated in the `build` directory.

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to Pages
3. Set the source to "GitHub Actions"

