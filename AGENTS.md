This is a static website that hosts a single page application using Svelte and SvelteKit. 

It is designed to publish the syllabus for JOUR 73361: "Coding the News" for the Craig Newmark Graduate School of Journalism at the City University of New York.

## Development Workflow

- **Do not start the dev server yourself.** Ask the user to run `npm run dev` - they typically keep it running in a separate terminal.

## Svelte 5 Conventions

This project uses **Svelte 5** syntax. Follow these patterns:

- Use `$props()` for component props:
  ```svelte
  <script>
    let { prop1, prop2 = defaultValue } = $props();
  </script>
  ```

- Use `{@render children()}` for slot content (not the deprecated `<slot>`):
  ```svelte
  <script>
    let { children } = $props();
  </script>
  
  <div>
    {@render children()}
  </div>
  ```

## Component Architecture

Components are located in `src/lib/components/`:

- **Masthead.svelte** - Header with CUNY J-School logo
- **Hero.svelte** - Course title section with flexible metadata display
- **Module.svelte** - Collapsible module sections for syllabus content

## Design System

Follow CUNY Craig Newmark Graduate School of Journalism design patterns:

- **Primary color:** `#f47920` (orange)
- **Background:** Dark backgrounds with light text
- **Typography:** Libre Franklin font family (Google Fonts)
- **Layout:** Clean, left-aligned hero section
- **Metadata:** Bullet (") separators between inline items using CSS `::after`