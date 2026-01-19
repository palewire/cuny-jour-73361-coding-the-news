<script>
  import { base } from '$app/paths';

  let { title, summary = '', date = '', slug, locked = false } = $props();

  const href = $derived(`${base}/scripts/${slug}`);
</script>

{#if locked}
  <div class="script-card script-card-disabled">
    <div class="script-card-body">
      <h3>{title}</h3>
      {#if date}
        <p class="script-date">{date}</p>
      {/if}
      {#if summary}
        <p>{summary}</p>
      {/if}
    </div>
  </div>
{:else}
  <a class="script-card" {href}>
    <div class="script-card-body">
      <h3>{title}</h3>
      {#if date}
        <p class="script-date">{date}</p>
      {/if}
      {#if summary}
        <p>{summary}</p>
      {/if}
    </div>
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
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.04);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      border-color 0.15s ease;
    text-decoration: none;
  }

  .script-card:hover,
  .script-card:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    border-color: var(--color-primary-orange);
  }

  .script-card-disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    background: var(--color-light-gray);
    border-color: var(--color-medium-gray);
    color: var(--color-dark-gray);
  }

  .script-card-disabled:hover,
  .script-card-disabled:focus-visible {
    transform: none;
    box-shadow: none;
    border-color: var(--color-border);
  }

  .script-card-disabled .script-date {
    color: var(--color-medium-gray);
  }

  .script-card-body {
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-bottom: var(--spacing-xs);
  }

  .script-date {
    color: var(--color-medium-gray);
    margin-bottom: var(--spacing-xs);
    font-size: 0.95rem;
  }
</style>
