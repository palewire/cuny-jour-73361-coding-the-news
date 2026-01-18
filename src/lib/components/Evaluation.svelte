<script>
  import TopicCard from './TopicCard.svelte';
  
  let { title, criteria } = $props();
</script>

<section class="evaluation">
  <div class="container">
    <h2>{title}</h2>
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
    background-color: var(--color-dark);
    padding: var(--spacing-xxl) 0;
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  h2 {
    color: var(--color-white);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
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