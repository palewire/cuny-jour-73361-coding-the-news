<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ScriptNav } from '$lib/types';
  import { onMount } from 'svelte';
  import ScrollProgress from '$lib/components/ScrollProgress.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ScriptHero from '$lib/components/ScriptHero.svelte';
  import TableOfContents from '$lib/components/TableOfContents.svelte';
  import ScriptNavigation from '$lib/components/ScriptNavigation.svelte';
  import Meta from '$lib/components/Meta.svelte';

  let {
    children,
    title,
    summary,
    date,
    week,
    previousScript,
    nextScript,
  }: {
    children: Snippet;
    title: string;
    summary?: string;
    date?: string;
    week?: number;
    previousScript?: ScriptNav | null;
    nextScript?: ScriptNav | null;
  } = $props();

  onMount(() => {
    const scriptBody = document.querySelector('.script-body');
    if (!scriptBody) return;

    scriptBody.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.copy-btn');
      if (!btn) return;
      const pre = btn.closest('.code-block')?.querySelector('pre');
      if (!pre) return;
      const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
      navigator.clipboard.writeText(pre.textContent ?? '').then(() => {
        btn.innerHTML = `${checkIcon}Copied!`;
        btn.setAttribute('aria-label', 'Copied');
        setTimeout(() => {
          btn.innerHTML = `${copyIcon}Copy`;
          btn.setAttribute('aria-label', 'Copy code');
        }, 2000);
      });
    });
  });

  // Breadcrumb label (week info is now shown as a kicker in ScriptHero)
  const breadcrumbLabel = 'Script';
</script>

<Meta {title} description={summary} ogType="article" />

<ScrollProgress />
<Breadcrumbs items={[{ label: breadcrumbLabel }]} />
<ScriptHero {title} {summary} {date} {week} />

<section class="section toc">
  <div class="container">
    <TableOfContents />
  </div>
</section>

<section class="section script">
  <div class="container">
    <div class="script-body">
      {@render children()}
      <ScriptNavigation {previousScript} {nextScript} />
    </div>
  </div>
</section>

<style>
  .section.toc {
    padding-top: var(--spacing-sm);
    padding-bottom: var(--spacing-sm);
    background: var(--color-light-gray);
    margin: 0;
  }

  .section.script {
    margin-top: 0;
    padding-top: var(--spacing-lg);
  }

  .script-body {
    max-width: 720px;
  }

  :global(.script-body h2),
  :global(.script-body h3),
  :global(.script-body h4) {
    margin-top: var(--spacing-lg);
  }

  :global(.script-body h2:first-of-type) {
    margin-top: 0;
  }

  .script-body :global(ul),
  .script-body :global(ol) {
    margin-left: 0;
    padding-left: 1.5em;
    margin-bottom: var(--spacing-md);
    line-height: 1.7;
    list-style-position: outside;
  }

  .script-body :global(li) {
    margin-left: 0;
    padding-left: 0;
  }

  /* Inline code (not in pre blocks) */
  .script-body :global(code) {
    background: var(--color-light-gray);
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
    font-size: 0.95em;
  }

  /* Code blocks - Shiki provides the background via inline styles */
  .script-body :global(pre) {
    padding: var(--spacing-sm);
    border-radius: 8px;
    overflow-x: auto;
    margin-left: 0;
    margin-bottom: var(--spacing-md);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  /* Reset inline code styles when inside pre (Shiki handles it) */
  .script-body :global(pre code) {
    background: transparent;
    padding: 0;
    border-radius: 0;
    font-size: inherit;
  }

  /* Shiki .line styling for proper line-height */
  .script-body :global(.shiki .line) {
    line-height: 1.6;
  }

  /* Highlighted lines in code blocks */
  .script-body :global(.shiki .line.highlighted) {
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0 calc(-1 * var(--spacing-sm));
    padding: 0 var(--spacing-sm);
    display: inline-block;
    width: calc(100% + 2 * var(--spacing-sm));
  }

  /* Ensure empty highlighted lines still render */
  .script-body :global(.shiki .line.highlighted:empty)::before {
    content: ' ';
  }

  /* Copy button */
  :global(.code-block) {
    position: relative;
    margin-bottom: var(--spacing-md);
  }

  :global(.code-block pre) {
    margin-bottom: 0;
  }

  :global(.copy-btn) {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.2rem 0.6rem;
    background: rgba(255, 255, 255, 0.1);
    color: #ccc;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  :global(.copy-btn:focus-visible) {
    outline: 2px solid var(--color-primary-orange);
    outline-offset: 2px;
  }

  :global(.code-block:hover .copy-btn) {
    opacity: 1;
  }

  :global(.code-block:focus-within .copy-btn) {
    opacity: 1;
  }

  :global(.copy-btn:hover) {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
</style>
