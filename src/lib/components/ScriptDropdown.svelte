<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { ChevronDown } from 'lucide-svelte';
  import { scriptList } from '$lib/scriptList';

  let open = $state(false);
  let buttonRef: HTMLButtonElement | undefined = $state();
  let panelRef: HTMLDivElement | undefined = $state();

  const currentSlug = $derived(
    $page.url.pathname.match(/\/scripts\/([^/]+)/)?.[1] ?? ''
  );

  function toggle() {
    open = !open;
    if (open) {
      // Focus first relevant item after DOM updates
      requestAnimationFrame(() => {
        const activeItem = panelRef?.querySelector<HTMLElement>(
          '.dropdown-item.active'
        );
        const firstItem =
          panelRef?.querySelector<HTMLElement>('a.dropdown-item');
        (activeItem ?? firstItem)?.focus();
      });
    }
  }

  function close() {
    open = false;
    buttonRef?.focus();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!open) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const items = Array.from(
        panelRef?.querySelectorAll<HTMLElement>('a.dropdown-item') ?? []
      );
      if (!items.length) return;

      const currentIndex = items.findIndex(
        (el) => el === document.activeElement
      );
      let nextIndex: number;

      if (event.key === 'ArrowDown') {
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      }

      items[nextIndex].focus();
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      panelRef?.querySelector<HTMLElement>('a.dropdown-item')?.focus();
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      const items = panelRef?.querySelectorAll<HTMLElement>('a.dropdown-item');
      if (items?.length) items[items.length - 1].focus();
    }
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;
    if (
      open &&
      buttonRef &&
      panelRef &&
      !buttonRef.contains(target) &&
      !panelRef.contains(target)
    ) {
      open = false;
    }
  }

  // Close dropdown on navigation
  const pathname = $derived($page.url.pathname);
  $effect(() => {
    // Track pathname changes to close dropdown on navigation
    void pathname;
    open = false;
  });

  // Click-outside listener
  $effect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  });
</script>

<nav class="dropdown-wrapper" aria-label="Script navigation">
  <button
    bind:this={buttonRef}
    class="dropdown-toggle"
    aria-expanded={open}
    aria-controls="script-menu"
    onclick={toggle}
    onkeydown={handleKeydown}
  >
    Scripts
    <ChevronDown size={16} class="chevron {open ? 'chevron-open' : ''}" />
  </button>

  {#if open}
    <div
      bind:this={panelRef}
      id="script-menu"
      class="dropdown-panel"
      role="menu"
      tabindex="-1"
      onkeydown={handleKeydown}
    >
      {#each scriptList as script (script.slug)}
        {#if script.locked}
          <span
            class="dropdown-item locked"
            role="menuitem"
            aria-disabled="true"
          >
            Week {script.week}: {script.title.replace(/^Week\s+\d+:\s*/i, '')}
          </span>
        {:else}
          <a
            class="dropdown-item {script.slug === currentSlug ? 'active' : ''}"
            href="{base}/scripts/{script.slug}"
            role="menuitem"
          >
            Week {script.week}: {script.title.replace(/^Week\s+\d+:\s*/i, '')}
          </a>
        {/if}
      {/each}
    </div>
  {/if}
</nav>

<style>
  .dropdown-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .dropdown-toggle {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    background: transparent;
    border: none;
    color: var(--color-white);
    font-family: var(--font-family-bold);
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    transition:
      background-color 0.15s ease,
      color 0.15s ease;
    white-space: nowrap;
  }

  .dropdown-toggle:hover,
  .dropdown-toggle[aria-expanded='true'] {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .dropdown-toggle :global(.chevron) {
    transition: transform 0.2s ease;
  }

  .dropdown-toggle :global(.chevron-open) {
    transform: rotate(180deg);
  }

  .dropdown-panel {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 280px;
    max-height: 70vh;
    overflow-y: auto;
    background: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    z-index: 100;
    padding: 0.5rem 0;
  }

  .dropdown-item {
    display: block;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    color: var(--color-dark);
    text-decoration: none;
    transition: background-color 0.1s ease;
    border-left: 3px solid transparent;
    margin: 0;
  }

  a.dropdown-item:hover,
  a.dropdown-item:focus-visible {
    background-color: var(--color-light-gray);
    color: var(--color-orange-text);
    text-decoration: none;
  }

  .dropdown-item.active {
    border-left-color: var(--color-primary-orange);
    font-family: var(--font-family-bold);
    color: var(--color-orange-text);
  }

  .dropdown-item.locked {
    opacity: 0.5;
    cursor: not-allowed;
    color: var(--color-medium-gray);
  }

  @media (max-width: 600px) {
    .dropdown-panel {
      position: fixed;
      top: var(--masthead-height);
      left: 0;
      right: 0;
      min-width: unset;
      border-radius: 0 0 8px 8px;
      max-height: calc(100vh - var(--masthead-height));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dropdown-toggle :global(.chevron) {
      transition: none;
    }

    .dropdown-toggle {
      transition: none;
    }

    .dropdown-item {
      transition: none;
    }
  }
</style>
