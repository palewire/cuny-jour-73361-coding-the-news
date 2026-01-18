<script>
  import TopicCard from './TopicCard.svelte';
  
  let { title, intro = '', criteria, background = 'light-gray' } = $props();
</script>

<section class="evaluation section" class:bg-white={background === 'white'} class:bg-light-gray={background === 'light-gray'}>
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