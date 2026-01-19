<script>
  import ScriptCard from '$lib/components/ScriptCard.svelte';

  let { data } = $props();

  const weeks = $derived(data.weeks);
</script>

<svelte:head>
  <title>Weekly Scripts | Coding the News</title>
  <meta
    name="description"
    content="Weekly class scripts and materials for Coding the News."
  />
</svelte:head>

<section class="section bg-light-gray">
  <div class="container">
    <div class="section-header">
      <h2>Weekly Scripts</h2>
    </div>
    <p class="section-intro">
      Reference each week's rundown, links, and assignments. New scripts publish
      after class.
    </p>
    <div class="grid grid-3">
      {#each weeks as week}
        <ScriptCard
          title={week.title}
          summary={week.summary}
          date={week.date}
          slug={week.slug}
          locked={week.locked}
        />
      {/each}
    </div>
  </div>
</section>
