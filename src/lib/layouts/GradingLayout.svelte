<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { GradingNav } from '$lib/types';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ScriptHero from '$lib/components/ScriptHero.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import GradingNavigation from '$lib/components/GradingNavigation.svelte';

  let {
    children,
    title,
    summary,
    module,
    previousGrading,
    nextGrading,
  }: {
    children: Snippet;
    title: string;
    summary?: string;
    module?: number;
    previousGrading?: GradingNav | null;
    nextGrading?: GradingNav | null;
  } = $props();

  const kicker = $derived(module ? `Module ${module}` : undefined);
  const pageTitle = $derived(kicker ? `${kicker}: ${title}` : title);
</script>

<Meta title={pageTitle} description={summary} />

<Breadcrumbs items={[{ label: 'Grading' }]} />
<ScriptHero {title} {summary} {kicker} />

<section class="section grading">
  <div class="container">
    <div class="grading-body">
      {@render children()}
      <GradingNavigation {previousGrading} {nextGrading} />
    </div>
  </div>
</section>

<style>
  .section.grading {
    margin-top: 0;
    padding-top: 0;
  }

  .grading-body {
    max-width: 720px;
  }

  :global(.grading-body h2) {
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-xs);
  }

  :global(.grading-body table) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--spacing-md);
    font-size: 0.9375rem;
  }

  :global(.grading-body th),
  :global(.grading-body td) {
    text-align: left;
    padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) 0;
    border-bottom: 1px solid var(--color-border);
    vertical-align: top;
  }

  :global(.grading-body th) {
    font-weight: 600;
    color: var(--color-dark);
  }

  :global(.grading-body td:first-child) {
    white-space: nowrap;
    width: 5rem;
  }

  :global(.grading-body p) {
    line-height: 1.7;
  }
</style>
