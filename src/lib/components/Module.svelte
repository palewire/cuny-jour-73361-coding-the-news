<script>
  let { number, title, id, children } = $props();
</script>

<section class="module" {id}>
  <div class="container">
    <div class="module-header">
      <span class="module-number">Module {number}</span>
      <h2>{title}</h2>
    </div>
    <div class="module-content">
      {@render children()}
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
    max-width: 800px;
  }
</style>