<script>
  import { base } from '$app/paths';

  let { title, summary = '', date = '', slug, locked = false } = $props();

  const href = $derived(`${base}/scripts/${slug}`);

  // Extract week number from slug (e.g., "week-1" � 1)
  const weekNumber = $derived(() => {
    const match = slug.match(/week-(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  });

  // Remove "Week X:" prefix from title to get just the topic
  const topicTitle = $derived(() => {
    return title.replace(/^Week\s+\d+:\s*/i, '');
  });
</script>

{#if locked}
  <div class="script-card script-card-disabled">
    <div class="card-header">
      {#if weekNumber()}
        <div class="week-badge">{weekNumber()}</div>
      {/if}
      <div class="header-text">
        <h3>{topicTitle()}</h3>
        {#if date}
          <p class="script-date">{date}</p>
        {/if}
      </div>
    </div>
    {#if summary}
      <p class="script-summary">{summary}</p>
    {/if}
  </div>
{:else}
  <a class="script-card" {href}>
    <div class="card-header">
      {#if weekNumber()}
        <div class="week-badge">{weekNumber()}</div>
      {/if}
      <div class="header-text">
        <h3>{topicTitle()}</h3>
        {#if date}
          <p class="script-date">{date}</p>
        {/if}
      </div>
    </div>
    {#if summary}
      <p class="script-summary">{summary}</p>
    {/if}
  </a>
{/if}

<style>
  .script-card {
    display: block;
    padding: var(--spacing-lg);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: var(--color-white);
    color: var(--color-dark);
    text-decoration: none;
    transition: border-color 0.15s ease;
  }

  .script-card:hover,
  .script-card:focus-visible {
    border-color: var(--color-primary-orange);
  }

  .script-card-disabled {
    opacity: 0.55;
    cursor: not-allowed;
    background: var(--color-light-gray);
    border-color: var(--color-medium-gray);
    color: var(--color-dark-gray);
  }

  .script-card-disabled:hover,
  .script-card-disabled:focus-visible {
    border-color: var(--color-medium-gray);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xs);
  }

  .week-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    min-width: 38px;
    width: 38px;
    background-color: var(--color-primary-orange);
    color: var(--color-white);
    border-radius: 50%;
    font-family: var(--font-family-bold);
    font-size: 0.875rem;
    font-weight: 700;
  }

  .script-card-disabled .week-badge {
    background-color: var(--color-medium-gray);
  }

  .header-text {
    flex: 1;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: var(--color-dark);
  }

  .script-date {
    font-size: 0.875rem;
    color: var(--color-medium-gray);
    margin: 0;
    margin-top: 2px;
  }

  .script-card-disabled .script-date {
    color: var(--color-medium-gray);
  }

  .script-summary {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--color-medium-gray);
    margin: 0;
  }
</style>
