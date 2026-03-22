<script lang="ts">
  import type { Component } from 'svelte';
  import TopicCard from './TopicCard.svelte';

  let {
    kicker = '',
    title,
    intro = '',
    criteria,
    background = 'light-gray',
  }: {
    kicker?: string;
    title: string;
    intro?: string;
    criteria: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: Component<any>;
      title: string;
      description: string;
      href?: string;
    }[];
    background?: string;
  } = $props();
</script>

<section
  class="evaluation section"
  class:bg-white={background === 'white'}
  class:bg-light-gray={background === 'light-gray'}
>
  <div class="container">
    <div class="section-header">
      {#if kicker}
        <span class="section-kicker">{kicker}</span>
      {/if}
      <h2>{title}</h2>
    </div>
    {#if intro}
      <p class="section-intro">{intro}</p>
    {/if}
    <div class="grid grid-3">
      {#each criteria as criterion (criterion.title)}
        <TopicCard
          icon={criterion.icon}
          title={criterion.title}
          description={criterion.description}
          href={criterion.href}
        />
      {/each}
    </div>
  </div>
</section>
