<script>
  import TopicCard from './TopicCard.svelte';

  let { title, intro = '', criteria, background = 'light-gray' } = $props();
</script>

<section
  class="evaluation section"
  class:bg-white={background === 'white'}
  class:bg-light-gray={background === 'light-gray'}
>
  <div class="container">
    <div class="section-header">
      <h2>{title}</h2>
    </div>
    {#if intro}
      <p class="section-intro">{intro}</p>
    {/if}
    <div class="grid grid-3">
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
