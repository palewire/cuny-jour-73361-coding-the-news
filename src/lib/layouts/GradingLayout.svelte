<script>
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ScriptHero from '$lib/components/ScriptHero.svelte';

  let { children, title, summary } = $props();
</script>

<svelte:head>
  <title>{title} | Coding the News</title>
  <meta
    name="description"
    content={summary || `${title} - JOUR 73361: Coding the News`}
  />
</svelte:head>

<Breadcrumbs items={[{ label: 'Grading' }]} />
<ScriptHero {title} {summary} />

<section class="section grading">
  <div class="container">
    <div class="grading-body">
      {@render children()}
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
    padding: var(--spacing-xs) var(--spacing-sm);
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
