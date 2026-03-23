<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { GradingNav } from '$lib/types';
  import { base } from '$app/paths';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ScriptHero from '$lib/components/ScriptHero.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import ContentNavigation from '$lib/components/ContentNavigation.svelte';

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
    <div class="content-body grading-body">
      {@render children()}
      <ContentNavigation
        previous={previousGrading
          ? {
              href: `${base}/grading/${previousGrading.slug}`,
              title: `Module ${previousGrading.module}: ${previousGrading.title}`,
            }
          : null}
        next={nextGrading
          ? {
              href: `${base}/grading/${nextGrading.slug}`,
              title: `Module ${nextGrading.module}: ${nextGrading.title}`,
            }
          : null}
        ariaLabel="Grading navigation"
      />
    </div>
  </div>
</section>

<style>
  .section.grading {
    margin-top: 0;
    padding-top: 0;
  }

  :global(.grading-body h2) {
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-xs);
  }

  :global(.grading-body td:first-child) {
    white-space: nowrap;
    width: 5rem;
  }

  :global(.grading-body p) {
    line-height: 1.7;
  }
</style>
