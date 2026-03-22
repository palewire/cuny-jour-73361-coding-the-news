<script>
  let { title = 'Aside', children } = $props();
</script>

<aside class="aside">
  {#if title}
    <p class="aside__title">{title}</p>
  {/if}
  <div class="aside__body">
    {@render children()}
  </div>
</aside>

<style>
  .aside {
    margin: 1.5rem 0;
    padding: 1rem 1.25rem;
    border-left: 4px solid var(--color-primary-orange);
    background: var(--color-light-gray);
  }

  .aside__title {
    margin: 0 0 0.5rem 0;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #1a1a1a;
  }

  .aside__body {
    display: grid;
    gap: 0.75rem;
    color: #333333;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .aside__body > :global(*) {
    min-width: 0;
  }
</style>
