The syllabus for "JOUR 73361: Coding the News," a course taught at the City University of New York's Craig Newmark Graduate School of Journalism.

Published at [palewi.re/docs/coding-the-news/](https://palewi.re/docs/coding-the-news/)

## Content

All editorial content lives in `src/content/`:

- `homepage.yaml` - The copy that appears on the homepage, including the course metadata, modules, evaluation criteria, guest speakers and instructor bio.
- `scripts/*.svx` - Weekly script pages in MDsveX format

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
