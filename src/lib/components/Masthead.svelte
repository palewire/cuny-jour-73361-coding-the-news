<script lang="ts">
  import type { Snippet } from 'svelte';
  import { base } from '$app/paths';

  let {
    logoSrc,
    logoAlt = 'Craig Newmark Graduate School of Journalism at CUNY',
    href = `${base}/`,
    children,
  } = $props<{
    logoSrc?: string;
    logoAlt?: string;
    href?: string;
    children?: Snippet;
  }>();

  // Default logo path uses base for subdirectory deployment
  const resolvedLogoSrc = $derived(logoSrc || `${base}/cuny-logo.svg`);
</script>

<header class="masthead">
  <div class="masthead-container">
    <a {href} class="logo-link">
      <img src={resolvedLogoSrc} alt={logoAlt} class="logo" />
    </a>
    {#if children}
      {@render children()}
    {/if}
  </div>
</header>

<style>
  .masthead {
    background-color: var(--color-gray);
    height: var(--masthead-height);
    position: static;
  }

  @media (max-width: 600px) {
    .masthead {
      position: sticky;
      top: 0;
      z-index: 100;
    }
  }

  .masthead-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-sm);
  }

  .logo-link {
    display: flex;
    align-items: center;
    height: 100%;
    transition: opacity 0.15s ease;
  }

  .logo-link:hover {
    opacity: 0.8;
  }

  .logo {
    height: 40px;
    width: auto;
  }
</style>
