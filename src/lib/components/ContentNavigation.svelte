<script lang="ts">
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  interface NavItem {
    href: string;
    title: string;
  }

  let {
    previous = undefined,
    next = undefined,
    ariaLabel = 'Content navigation',
  } = $props<{
    previous?: NavItem | null;
    next?: NavItem | null;
    ariaLabel?: string;
  }>();
</script>

<nav class="content-navigation" aria-label={ariaLabel}>
  <div class="nav-link previous">
    {#if previous}
      <a href={previous.href}>
        <ChevronLeft size={20} aria-hidden="true" focusable="false" />
        <span class="nav-content">
          <span class="nav-label">Previous</span>
          <span class="nav-title">{previous.title}</span>
        </span>
      </a>
    {/if}
  </div>

  <div class="nav-link next">
    {#if next}
      <a href={next.href}>
        <span class="nav-content">
          <span class="nav-label">Next</span>
          <span class="nav-title">{next.title}</span>
        </span>
        <ChevronRight size={20} aria-hidden="true" focusable="false" />
      </a>
    {/if}
  </div>
</nav>

<style>
  .content-navigation {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: var(--spacing-md);
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--color-light-gray);
  }

  .nav-link {
    flex: 1;
    max-width: 45%;
  }

  .nav-link.previous {
    text-align: left;
  }

  .nav-link.next {
    text-align: right;
    margin-left: auto;
  }

  .nav-link a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 8px;
    text-decoration: none;
    color: var(--color-dark);
    background: var(--color-light-gray);
    transition: all 0.2s ease;
  }

  .nav-link a:hover {
    background: var(--color-primary-orange);
    color: white;
  }

  .nav-link a:focus-visible {
    background: var(--color-primary-orange);
    color: white;
  }

  .nav-link a:hover :global(svg) {
    color: white;
  }

  .nav-link a:focus-visible :global(svg) {
    color: white;
  }

  .nav-link :global(svg) {
    flex-shrink: 0;
    color: var(--color-orange-text);
    transition: color 0.2s ease;
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .nav-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.7;
  }

  .nav-title {
    font-weight: 600;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    .content-navigation {
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .nav-link {
      flex: none;
      max-width: 100%;
      width: 100%;
    }

    .nav-link.next {
      text-align: left;
      margin-left: 0;
    }

    .nav-link a {
      width: 100%;
      padding: var(--spacing-sm) var(--spacing-md);
      gap: 0.5rem;
    }

    .nav-content {
      min-width: 0;
      flex: 1;
    }

    .nav-label {
      font-size: 0.7rem;
    }

    .nav-title {
      font-size: 0.85rem;
    }

    .nav-link :global(svg) {
      width: 18px;
      height: 18px;
    }
  }
</style>
