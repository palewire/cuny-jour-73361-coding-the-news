<script lang="ts">
  let {
    title,
    summary,
    date,
    week,
    kicker = undefined,
  } = $props<{
    title: string;
    summary?: string;
    date?: string;
    week?: number;
    kicker?: string;
  }>();

  const displayKicker = $derived(kicker ?? (week ? `Week ${week}` : undefined));
</script>

<section class="script-hero">
  <div class="container">
    <div class="script-header">
      {#if displayKicker}
        <span class="kicker">{displayKicker}</span>
      {/if}
      <h1 class="script-title">{title}</h1>
    </div>
    {#if summary}
      <p class="script-summary">{summary}</p>
    {/if}
    {#if date}
      <p class="script-date">{date}</p>
    {/if}
  </div>
</section>

<style>
  .script-hero {
    padding: var(--spacing-sm) 0;
    background-color: var(--color-white);
  }

  .script-header {
    border-left: 4px solid var(--color-primary-orange);
    padding-left: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
  }

  .kicker {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary-orange);
    margin-bottom: var(--spacing-xs);
  }

  .script-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-dark);
    margin: 0;
    line-height: 1.2;
  }

  .script-summary {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--color-dark-gray);
    margin-bottom: var(--spacing-xs);
    max-width: 800px;
  }

  .script-date {
    font-size: 0.95rem;
    color: var(--color-medium-gray);
    margin: 0;
  }

  @media (max-width: 768px) {
    .script-title {
      font-size: 2rem;
    }

    .script-summary {
      font-size: 1.125rem;
    }
  }
</style>
