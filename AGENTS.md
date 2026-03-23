This is a static website that hosts a single page application using Svelte and SvelteKit.

It is designed to publish the syllabus for JOUR 73361: "Coding the News" for the Craig Newmark Graduate School of Journalism at the City University of New York.

The site is deployed to `https://palewi.re/docs/coding-the-news/`.

**Keep this file up to date.** When adding new components, utilities, conventions, or other notable changes to the project, update the relevant sections of this document so it remains an accurate reference for agents and contributors.

## Content Organization

All editorial content lives in `src/content/`:

- **homepage.yaml** - Homepage data (course metadata, modules, evaluation criteria, guest speakers, instructor info)
- **scripts/\*.svx** - Weekly script pages in MDsveX format (Markdown + Svelte)
- **grading/\*.svx** - Grading rubric pages in MDsveX format (one per module)

Script files use frontmatter for metadata:

```yaml
---
title: 'Week 1: Hello, World'
summary: 'Introduction to the course and tools'
date: '2026-01-27'
week: 1
locked: false
---
```

Scripts are served via dynamic routes at `/scripts/week-1`, `/scripts/week-2`, etc. The `[slug]` route in `src/routes/scripts/[slug]/` loads content from `src/content/scripts/` and MDsveX automatically applies `ScriptLayout.svelte`.

Grading rubrics are served via dynamic routes at `/grading/module-1`, `/grading/module-2`, etc. The `[slug]` route in `src/routes/grading/[slug]/` loads content from `src/content/grading/` and MDsveX applies `GradingLayout.svelte`.

## Writing Style for Scripts

When referring to UI elements (buttons, menu items, dropdown options, tabs, etc.) in the `.svx` script files:

- Use **quotes** around the element name, not bold
- Prefer direct address: call students "you" (avoid the "royal we").
- Good: `Click the "Clone repository" button`
- Good: `Select "Create a new repository" from the dropdown`
- Good: `Go to the "Settings" tab`
- Avoid: `Click the **Clone repository** button`
- Avoid: `Select **Create a new repository** from the dropdown`

## Development Workflow

- **Do not start the dev server yourself.** Ask the user to run `npm run dev` - they typically keep it running in a separate terminal.

## Svelte 5 Conventions

This project uses **Svelte 5** syntax. Follow these patterns:

- Prefer **TypeScript** for site code (use `<script lang="ts">` in components/routes) unless there's a reason a file must be plain JavaScript.

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

## MDsveX Features

- Code blocks are syntax-highlighted using **Shiki** via the mdsvex highlighter in `svelte.config.js`.
- Highlighted-line metadata is supported (e.g. `{1,3,5-7}` or `{emphasize-lines="..."}`).
- Every rendered code block is wrapped in a `.code-block` container and automatically gets a "Copy" button (`.copy-btn`) injected at render time.
- Heading IDs are automatically added using `rehype-slug`, which powers the scripts Table of Contents.

## Component Architecture

Components are located in `src/lib/components/`:

- **Masthead.svelte** - Header bar with CUNY logo linking to syllabus homepage. Accepts an optional `children` snippet for right-side content (used for ScriptDropdown). Sticky on mobile (<600px), static on desktop.
- **ScriptDropdown.svelte** - Dropdown menu in the Masthead listing all weekly scripts for quick navigation. Loads data from `scriptList.ts`. Shows locked scripts as grayed-out. Highlights the active script on script pages. Full keyboard/ARIA support.
- **ScrollProgress.svelte** - Thin orange progress bar on script pages tracking scroll position. Sticky below the masthead on mobile, at viewport top on desktop. Rendered in ScriptLayout.
- **Hero.svelte** - Course title section with flexible metadata display
- **Module.svelte** - Collapsible module sections for syllabus content
- **TopicCard.svelte** - Reusable card with icon, title, and description (used in Module content and Evaluation)
- **Evaluation.svelte** - Section displaying evaluation criteria in a responsive grid of TopicCards
- **GuestSpeakers.svelte** - Grid display of guest speakers with circular photos and LinkedIn links
- **Instructor.svelte** - Instructor profile card with circular photo, title, bio, and external link
- **Footer.svelte** - Full CUNY J-School footer with contact info, navigation links, and social media icons
- **Screenshot.svelte** - Displays screenshots with optional browser chrome styling, used in script pages
- **PhoneScreenshot.svelte** - Displays screenshots in a phone frame, used when demonstrating mobile UI
- **ScriptHero.svelte** - Hero/header for script and grading pages (title, summary, date, week/kicker). Uses global `.section-header` and `.section-kicker` utility classes.
- **ContentNavigation.svelte** - Shared previous/next navigation used by both script and grading pages. Accepts `previous` and `next` props with `{ href, title }` shape and an `ariaLabel` string.
- **TableOfContents.svelte** - Auto-generated in-page Table of Contents for scripts (based on `h2` headings)
- **Breadcrumbs.svelte** - Breadcrumb navigation (used on scripts and grading pages)
- **Meta.svelte** - SEO + social metadata (Open Graph + Twitter cards)

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
  - `TradeGothicLT` (regular) — `--font-family`
  - `TradeGothicLT-Bold` (bold) — `--font-family-bold`
  - `TradeGothicLT-BoldCondTwenty` (headlines) — `--font-family-headline`
- **Font size scale** (CSS custom properties defined in `:root`):
  - `--font-size-xs` (0.75rem) — labels, chrome text
  - `--font-size-sm` (0.875rem) — kickers, small UI, code
  - `--font-size-base` (1rem) — body text
  - `--font-size-md` (1.125rem) — intros, card titles
  - `--font-size-lg` (1.25rem) — subtitles, summaries
  - `--font-size-xl` (1.5rem) — h3
  - `--font-size-2xl` (2rem) — h2
  - `--font-size-3xl` (2.5rem) — h1
  - `--font-size-4xl` (4rem) — hero display
- **Line heights:** `--line-height-tight` (1.2, headings), `--line-height-base` (1.6, body)
- **Border radii:** `--radius-sm` (4px), `--radius-md` (8px)

### Section Styling

Components use common section patterns:

- `background` prop accepts `'white'` or `'light-gray'` for alternating sections
- Section headers have orange left border (`border-left: 4px solid var(--color-primary-orange)`)
- Container max-width: `1200px`
- Global utility classes in `app.css`: `.section-header` (orange left border + padding), `.section-kicker` (uppercase orange label), `.section-intro` (intro paragraph), `.content-body` (max-width: 720px for content areas)

### Responsive Breakpoints

- Desktop: 960px+
- Tablet: 768px - 959px
- Mobile: < 768px

## Social Sharing

Open Graph and Twitter Card meta tags are configured in `+page.svelte` using the `social-share.jpg` image from the static folder. The image URL uses the base path for proper deployment.

## Accessibility & Print

- A "Skip to main content" link is included site-wide via the root layout.
- Focus styles are implemented using `:focus-visible` for keyboard navigation.
- Print styles live in `src/app.css` and are designed to hide navigation chrome (breadcrumbs, TOC, prev/next, dropdown, scroll progress, footer) and make code blocks readable.
- Screenshot components include print-specific overrides to reduce ink usage (hide decorative chrome/frames) and avoid splitting figures across pages.

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

| Prop          | Type    | Default   | Description                                         |
| ------------- | ------- | --------- | --------------------------------------------------- |
| `src`         | string  | required  | Path to image (relative to static/) or absolute URL |
| `alt`         | string  | required  | Alt text for accessibility                          |
| `showChrome`  | boolean | `true`    | Show browser window chrome                          |
| `chromeTitle` | string  | `''`      | Title in browser title bar                          |
| `chromeUrl`   | string  | `''`      | URL displayed in address bar                        |
| `width`       | string  | `'100%'`  | CSS width of the figure                             |
| `maxWidth`    | string  | `'720px'` | CSS max-width of the figure                         |

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

Note: It is OK for scripts that are locked/unpublished to reference screenshots that don't exist yet. Those missing assets may show up as 404s during local preview or Playwright web server logging, and should not be treated as a required fix unless the script is being published.

## Testing

- Run `npm run lint` for typechecking + ESLint.
- Run `npm test` to execute Playwright end-to-end tests in `tests/`.

## Agent Skills

Agent Skills are stored in `.github/skills/` following the [VS Code Agent Skills standard](https://code.visualstudio.com/docs/copilot/customization/agent-skills). Each skill has a `SKILL.md` file with instructions that Copilot loads on-demand.

Available skills:

- **browser-screenshots** - Captures browser screenshots using Playwright for embedding in tutorials
- **vscode-screenshots** - Captures VSCode window screenshots using a semi-automated workflow with countdown timer
- **page-scroll-video** - Records scrolling videos of web pages with browser chrome for social media promotion
