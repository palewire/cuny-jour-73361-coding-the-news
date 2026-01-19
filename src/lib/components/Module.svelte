<script>
  let {
    number = null,
    kicker = null,
    title,
    id,
    intro = '',
    homework = '',
    children,
    background = 'white',
  } = $props();

  let displayKicker = $derived(kicker ?? (number ? `Module ${number}` : ''));
</script>

<section
  class="module section"
  class:bg-white={background === 'white'}
  class:bg-light-gray={background === 'light-gray'}
  {id}
>
  <div class="container">
    <div class="section-header">
      {#if displayKicker}
        <span class="module-number">{displayKicker}</span>
      {/if}
      <h2>{title}</h2>
    </div>
    <div class="module-content">
      {#if intro}
        <p class="section-intro">{intro}</p>
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
  .module-number {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary-orange);
    margin-bottom: var(--spacing-xs);
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
