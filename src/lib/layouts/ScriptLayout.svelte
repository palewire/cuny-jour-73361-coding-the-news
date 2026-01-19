<script>
  let { children, metadata = {} } = $props();
</script>

<section class="section script">
  <div class="container">
    <div class="section-header">
      <h2>{metadata.title ?? 'Script'}</h2>
    </div>
    {#if metadata.summary}
      <p class="section-intro">{metadata.summary}</p>
    {/if}
    {#if metadata.date}
      <p class="script-meta">{metadata.date}</p>
    {/if}
    <div class="script-body">
      {@render children()}
    </div>
  </div>
</section>

<style>
  .script-meta {
    color: var(--color-medium-gray);
    margin-bottom: var(--spacing-lg);
  }

  .script-body :global(h2),
  .script-body :global(h3),
  .script-body :global(h4) {
    margin-top: var(--spacing-lg);
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
