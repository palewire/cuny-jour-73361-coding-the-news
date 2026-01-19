<script>
  import { base } from '$app/paths';

  let { items = [] } = $props();
</script>

<nav class="breadcrumbs container" aria-label="Breadcrumb">
  <a href={base}>Home</a>
  {#each items as item, i}
    <span aria-hidden="true">/</span>
    {#if item.href}
      <a href={item.href}>{item.label}</a>
    {:else}
      <span>{item.label}</span>
    {/if}
  {/each}
</nav>

<style>
  .breadcrumbs {
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
    margin-top: var(--spacing-md);
    margin-bottom: 0;
    font-size: 0.95rem;
    color: var(--color-medium-gray);
    clear: both;
  }

  .breadcrumbs a {
    color: var(--color-primary-orange);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
  }

  .breadcrumbs span {
    color: var(--color-medium-gray);
  }
</style>
