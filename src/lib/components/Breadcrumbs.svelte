<script lang="ts">
  import { base } from '$app/paths';
  import type { BreadcrumbItem } from '$lib/types';

  let { items = [] } = $props<{ items?: BreadcrumbItem[] }>();
</script>

<nav class="breadcrumbs container" aria-label="Breadcrumb">
  <a href={base}>Home</a>
  {#each items as item, index (item.label)}
    <span aria-hidden="true">/</span>
    {#if item.href}
      <a
        href={item.href}
        aria-current={index === items.length - 1 ? 'page' : undefined}
      >
        {item.label}
      </a>
    {:else}
      <span aria-current={index === items.length - 1 ? 'page' : undefined}>
        {item.label}
      </span>
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
    color: var(--color-orange-text);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
  }

  .breadcrumbs span {
    color: var(--color-medium-gray);
  }
</style>
