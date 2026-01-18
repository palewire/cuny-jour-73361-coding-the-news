This is a static website that hosts a single page application using Svelte and SvelteKit. 

It is designed to publish the syllabus for JOUR 73361: "Coding the News" for the Craig Newmark Graduate School of Journalism at the City University of New York.

The site is deployed to `https://palewi.re/docs/coding-the-news/`.

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
- **TopicCard.svelte** - Reusable card with icon, title, and description (used in Module content and Evaluation)
- **Evaluation.svelte** - Section displaying evaluation criteria in a responsive grid of TopicCards
- **GuestSpeakers.svelte** - Grid display of guest speakers with circular photos and LinkedIn links
- **Instructor.svelte** - Instructor profile card with circular photo, title, bio, and external link
- **Footer.svelte** - Full CUNY J-School footer with contact info, navigation links, and social media icons

## Dependencies

- **lucide-svelte** - Icon library used for TopicCard icons, Footer social icons, and other UI elements

## Design System

Follow CUNY Craig Newmark Graduate School of Journalism design patterns:

### Colors
- **Primary orange:** `#f47920`
- **Dark:** `#1a1a1a`
- **Dark gray:** `#333333`
- **Light gray background:** `#f5f5f5`
- **White:** `#ffffff`

### Typography
- **Trade Gothic LT** - Custom font family loaded from `/static/fonts/`
  - `TradeGothicLT` (regular)
  - `TradeGothicLT-Bold` (bold)
  - `TradeGothicLT-BoldCondTwenty` (headlines)

### Section Styling
Components use common section patterns:
- `background` prop accepts `'white'` or `'light-gray'` for alternating sections
- Section headers have orange left border (`border-left: 4px solid var(--color-primary-orange)`)
- Container max-width: `1200px`

### Responsive Breakpoints
- Desktop: 960px+
- Tablet: 768px - 959px
- Mobile: < 768px

## Social Sharing

Open Graph and Twitter Card meta tags are configured in `+page.svelte` using the `social-share.jpg` image from the static folder. The image URL uses the base path for proper deployment.

## Static Assets

Located in `/static/`:
- **Logos:** CUNY J-School SVG logos
- **Photos:** Instructor and guest speaker headshots (JPG)
- **Fonts:** Trade Gothic LT font files (EOT, WOFF, WOFF2, TTF)
- **social-share.jpg:** Social media preview image