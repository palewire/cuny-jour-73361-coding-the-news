<script>
  import { base } from '$app/paths';

  let { data } = $props();

  const weeks = $derived(data.weeks);
</script>

<svelte:head>
  <title>Weekly Scripts | Coding the News</title>
  <meta
    name="description"
    content="Weekly class scripts and materials for Coding the News."
  />
</svelte:head>

<section class="section bg-light-gray">
  <div class="container">
    <div class="section-header">
      <h2>Weekly Scripts</h2>
    </div>
    <p class="section-intro">
      Reference each week's rundown, links, and assignments. New scripts publish
      after class.
    </p>
    <div class="grid grid-3">
      {#each weeks as week}
        <a class="script-card" href={`${base}/scripts/${week.slug}`}>
          <h3>{week.title}</h3>
          {#if week.date}
            <p class="script-date">{week.date}</p>
          {/if}
          {#if week.summary}
            <p>{week.summary}</p>
          {/if}
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .script-card {
    display: block;
    padding: var(--spacing-lg);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-white);
    color: var(--color-dark);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.04);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      border-color 0.15s ease;
  }

  .script-card:hover,
  .script-card:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    border-color: var(--color-primary-orange);
  }

  .script-card h3 {
    margin-bottom: var(--spacing-xs);
  }

  .script-date {
    color: var(--color-medium-gray);
    margin-bottom: var(--spacing-sm);
    font-size: 0.95rem;
  }
</style>
