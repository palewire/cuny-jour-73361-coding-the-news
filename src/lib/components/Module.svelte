<script>
  let { number, title, id, intro = '', homework = '', children } = $props();
</script>

<section class="module" {id}>
  <div class="container">
    <div class="module-header">
      <span class="module-number">Module {number}</span>
      <h2>{title}</h2>
    </div>
    <div class="module-content">
      {#if intro}
        <p class="module-intro">{intro}</p>
      {/if}
      {@render children()}
      {#if homework}
        <div class="homework-summary">
          <h3>Homework</h3>
          <p>{homework}</p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .module {
    padding: var(--spacing-xxl) 0;
  }

  .module:nth-child(odd) {
    background-color: var(--color-white);
  }

  .module:nth-child(even) {
    background-color: var(--color-light-gray);
  }

  .module-header {
    margin-bottom: var(--spacing-lg);
    border-left: 4px solid var(--color-primary-orange);
    padding-left: var(--spacing-md);
  }

  .module-number {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary-orange);
    margin-bottom: var(--spacing-xs);
  }

  .module-header h2 {
    margin-bottom: 0;
    color: var(--color-dark);
  }

  .module-content {
    /* Width constraints handled by child elements */
  }

  .module-intro {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-dark-gray);
    margin-bottom: var(--spacing-lg);
    max-width: 800px;
  }

  .homework-summary {
    background-color: var(--color-light-gray);
    border-left: 4px solid var(--color-primary-orange);
    padding: var(--spacing-lg);
    border-radius: 0 8px 8px 0;
    max-width: 800px;
  }

  .homework-summary h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: var(--spacing-sm);
  }

  .homework-summary p {
    color: var(--color-dark-gray);
    margin-bottom: 0;
    line-height: 1.6;
  }
</style>