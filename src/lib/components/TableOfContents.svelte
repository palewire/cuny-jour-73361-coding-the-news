<script>
  import { onMount } from 'svelte';

  let headings = $state([]);

  onMount(() => {
    // Extract all h2 elements from the script body
    const h2Elements = document.querySelectorAll('.script-body h2');
    headings = Array.from(h2Elements).map((h) => ({
      id: h.id,
      text: h.textContent,
    }));
  });
</script>

{#if headings.length > 0}
  <nav class="table-of-contents">
    <h3>Table of Contents</h3>
    <ul>
      {#each headings as heading}
        <li>
          <a href="#{heading.id}">{heading.text}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  .table-of-contents {
    background: var(--color-light-gray);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    border-left: 4px solid var(--color-primary-orange);
  }

  .table-of-contents h3 {
    font-family: var(--font-trade-gothic-bold-cond);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 var(--spacing-sm) 0;
    color: var(--color-dark);
  }

  .table-of-contents ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .table-of-contents li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .table-of-contents li:last-child {
    margin-bottom: 0;
  }

  .table-of-contents a {
    color: var(--color-dark-gray);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .table-of-contents a:hover {
    color: var(--color-primary-orange);
  }
</style>
