---
name: browser-screenshots
description: Captures browser screenshots on request using Playwright for embedding in tutorials. Use this when asked to capture, document, or screenshot a web page or locally running development server.
---

# Browser Screenshot Capture

Capture browser screenshots when the user requests them. This skill uses a Playwright-based script to automate browser interactions and save screenshots directly to disk.

## When to Use

Use this skill when the user asks you to:
- Capture a screenshot of a specific URL
- Document a web page or web application state
- Take screenshots of a locally running development server
- Capture a sequence of browser interactions

## How to Capture

Use the Playwright capture script located at `.github/skills/browser-screenshots/scripts/capture.cjs`.

### Basic Screenshot

```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --output static/screenshots/week-1/example-homepage.png
```

### Common Options

| Option | Description | Default |
|--------|-------------|---------|
| `--url` | URL to capture (required) | - |
| `--output` | Output file path (required) | - |
| `--width` | Viewport width | 1280 |
| `--height` | Viewport height | 800 |
| `--fullpage` | Capture full scrollable page | false |
| `--element` | CSS selector to capture specific element | - |
| `--highlight` | CSS selector to highlight with red border | - |
| `--execute` | JavaScript to run before capture | - |
| `--wait` | Milliseconds to wait before capture | 500 |
| `--dark` | Use dark color scheme | false |

### Examples

**Capture with dark mode:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://code.visualstudio.com \
  --dark \
  --output static/screenshots/week-1/vscode-homepage.png
```

**Highlight a specific element:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://github.com/new \
  --highlight ".repo-name-input" \
  --output static/screenshots/week-1/github-repo-name.png
```

**Capture a specific element only:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --element ".hero-section" \
  --output static/screenshots/week-1/hero-only.png
```

**Execute JavaScript before capture (e.g., click a button):**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --execute "document.querySelector('button').click()" \
  --wait 1000 \
  --output static/screenshots/week-1/after-click.png
```

**Full page screenshot:**
```bash
node .github/skills/browser-screenshots/scripts/capture.cjs \
  --url https://example.com \
  --fullpage \
  --output static/screenshots/week-1/full-page.png
```

## Saving Screenshots

Save to `/static/screenshots/week-{week}/` with descriptive kebab-case filenames.

**Naming convention:** Use kebab-case:
- ✅ `github-new-repo.png`
- ✅ `homepage-hero-section.png`
- ❌ `GitHubNewRepo.png`

**Directory structure:**
```
static/screenshots/
  week-1/
    vscode-homepage.png
    github-new-repo.png
  week-2/
    ...
```

## Embedding in Tutorials

When embedding in `.svx` files, use the Screenshot component:

```svelte
<script>
  import Screenshot from '$lib/components/Screenshot.svelte';
</script>

<Screenshot 
  src="/screenshots/week-1/github-new-repo.png" 
  alt="GitHub new repository form"
  chromeTitle="Create a new repository"
  chromeUrl="https://github.com/new"
/>
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Path relative to `/static/` |
| `alt` | string | required | Accessibility description |
| `showChrome` | boolean | `true` | Browser window styling |
| `chromeTitle` | string | `''` | Title bar text |
| `chromeUrl` | string | `''` | Address bar URL |

## Prerequisites

Playwright must be installed. If not already installed:

```bash
npm install playwright
npx playwright install chromium
```

## Limitations

- **Cannot capture:** VS Code windows, terminal output, system dialogs (these require manual screenshots)
- **Requires network access:** URLs must be reachable from the machine running the script