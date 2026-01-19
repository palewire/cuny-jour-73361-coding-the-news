<script>
  import { base } from '$app/paths';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ScriptHero from '$lib/components/ScriptHero.svelte';

  let { children, title, summary, date, week } = $props();

  // Generate breadcrumb label from week number
  const breadcrumbLabel = $derived(week ? `Week ${week} Script` : 'Script');
</script>

<svelte:head>
  <title>{title} | Coding the News</title>
  <meta
    name="description"
    content={summary || `${title} - JOUR 73361: Coding the News`}
  />
  <meta property="og:title" content={title} />
  <meta
    property="og:description"
    content={summary || `${title} - JOUR 73361: Coding the News`}
  />
  <meta property="og:image" content="{base}/social-share.jpg" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta
    name="twitter:description"
    content={summary || `${title} - JOUR 73361: Coding the News`}
  />
  <meta name="twitter:image" content="{base}/social-share.jpg" />
</svelte:head>

<Breadcrumbs items={[{ label: breadcrumbLabel }]} />
<ScriptHero {title} {summary} {date} />

<section class="section script">
  <div class="container">
    <div class="script-body">
      {@render children()}
    </div>
  </div>
</section>

<style>
  .section.script {
    margin-top: var(--spacing-sm);
  }

  .script-body {
    max-width: 720px;
  }

  .script-body h2,
  .script-body h3,
  .script-body h4 {
    margin-top: var(--spacing-lg);
  }

  .script-body h2:first-of-type {
    margin-top: 0;
  }

  .script-body :global(ul),
  .script-body :global(ol) {
    margin-left: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
    line-height: 1.7;
  }

  .script-body :global(code) {
    background: var(--color-light-gray);
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
    font-size: 0.95em;
  }

  .script-body :global(pre) {
    background: var(--color-light-gray);
    padding: var(--spacing-md);
    border-radius: 8px;
    overflow-x: auto;
  }
</style>
