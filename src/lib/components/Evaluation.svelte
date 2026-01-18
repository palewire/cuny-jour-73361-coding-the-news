<script>
  import TopicCard from './TopicCard.svelte';
  
  let { title, intro = '', criteria, background = 'light-gray' } = $props();
</script>

<section class="evaluation" class:bg-white={background === 'white'} class:bg-light-gray={background === 'light-gray'}>
  <div class="container">
    <div class="section-header">
      <h2>{title}</h2>
    </div>
    {#if intro}
      <p class="section-intro">{intro}</p>
    {/if}
    <div class="evaluation-grid">
      {#each criteria as criterion}
        <TopicCard
          icon={criterion.icon}
          title={criterion.title}
          description={criterion.description}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .evaluation {
    padding: var(--spacing-xxl) 0;
  }

  .bg-white {
    background-color: var(--color-white);
  }

  .bg-light-gray {
    background-color: var(--color-light-gray);
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  .section-header {
    margin-bottom: var(--spacing-lg);
    border-left: 4px solid var(--color-primary-orange);
    padding-left: var(--spacing-md);
  }

  .section-header h2 {
    margin-bottom: 0;
    color: var(--color-dark);
  }

  .section-intro {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-dark-gray);
    margin-bottom: var(--spacing-lg);
    max-width: 800px;
  }

  .evaluation-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
  }

  @media (max-width: 900px) {
    .evaluation-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .evaluation-grid {
      grid-template-columns: 1fr;
    }
  }
</style>