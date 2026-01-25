This is a static website that hosts a single page application using Svelte and SvelteKit. 

It is designed to publish the syllabus for JOUR 73361: "Coding the News" for the Craig Newmark Graduate School of Journalism at the City University of New York.

The site is deployed to `https://palewi.re/docs/coding-the-news/`.

## Content Organization

All editorial content lives in `src/content/`:

- **homepage.yaml** - Homepage data (course metadata, modules, evaluation criteria, guest speakers, instructor info)
- **scripts/*.svx** - Weekly script pages in MDsveX format (Markdown + Svelte)

Script files use frontmatter for metadata:
```yaml
---
title: "Week 1: Hello, World"
summary: "Introduction to the course and tools"
date: "2026-01-27"
week: 1
locked: false
---
```

Scripts are served via dynamic routes at `/scripts/week-1`, `/scripts/week-2`, etc. The `[slug]` route in `src/routes/scripts/[slug]/` loads content from `src/content/scripts/` and MDsveX automatically applies `ScriptLayout.svelte`.

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
- **Screenshot.svelte** - Displays screenshots with optional browser chrome styling, used in script pages

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
- **screenshots/** - Screenshots organized by week (e.g., `screenshots/week-1/`)

## Screenshot Component

The `Screenshot.svelte` component displays images with optional browser chrome styling. Use it in `.svx` script files:

```svelte
<script>
  import Screenshot from '$lib/components/Screenshot.svelte';
</script>

<!-- With browser chrome (default) -->
<Screenshot 
  src="/screenshots/week-1/vscode-welcome.png" 
  alt="VS Code welcome screen"
  chromeTitle="Visual Studio Code"
  chromeUrl="https://code.visualstudio.com"
/>

<!-- Without browser chrome -->
<Screenshot 
  src="/screenshots/week-1/terminal-output.png" 
  alt="Terminal showing git status"
  showChrome={false}
/>
```

### Screenshot Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Path to image (relative to static/) or absolute URL |
| `alt` | string | required | Alt text for accessibility |
| `showChrome` | boolean | `true` | Show browser window chrome |
| `chromeTitle` | string | `''` | Title in browser title bar |
| `chromeUrl` | string | `''` | URL displayed in address bar |
| `width` | string | `'100%'` | CSS width of the figure |
| `maxWidth` | string | `'720px'` | CSS max-width of the figure |

### Screenshot Organization

Store screenshots in `static/screenshots/` organized by week:
```
static/screenshots/
   week-1/
      vscode-welcome.png
      github-new-repo.png
      copilot-chat.png
   week-2/
       ...
```

## Agent Skills

Agent Skills are stored in `.github/skills/` following the [VS Code Agent Skills standard](https://code.visualstudio.com/docs/copilot/customization/agent-skills). Each skill has a `SKILL.md` file with instructions that Copilot loads on-demand.

Available skills:
- **browser-screenshots** - Captures browser screenshots using Playwright for embedding in tutorials
- **vscode-screenshots** - Captures VSCode window screenshots using a semi-automated workflow with countdown timer
- **page-scroll-video** - Records scrolling videos of web pages with browser chrome for social media promotion
