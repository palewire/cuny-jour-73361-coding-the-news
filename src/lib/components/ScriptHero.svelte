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
    <div class="section-header">
      {#if displayKicker}
        <span class="section-kicker">{displayKicker}</span>
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

  .script-hero :global(.section-header) {
    margin-bottom: var(--spacing-sm);
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
