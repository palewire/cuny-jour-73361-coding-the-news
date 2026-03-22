<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Module from '$lib/components/Module.svelte';
  import TopicCard from '$lib/components/TopicCard.svelte';
  import GuestSpeakers from '$lib/components/GuestSpeakers.svelte';
  import Instructor from '$lib/components/Instructor.svelte';
  import Evaluation from '$lib/components/Evaluation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ScriptCard from '$lib/components/ScriptCard.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import * as icons from 'lucide-svelte';

  let { data } = $props();

  const scripts = $derived(data.scripts);
  const content = $derived(data.content);

  // Helper to get icon component by name
  function getIcon(iconName) {
    return icons[iconName];
  }

  // Transform evaluation criteria with icon components
  const evaluationCriteria = $derived(
    content.evaluation.criteria.map((item) => ({
      ...item,
      icon: getIcon(item.icon),
    }))
  );
</script>

<Meta
  title={content.meta.title}
  description={content.meta.description}
  ogTitle="Coding the News | JOUR 73361"
  ogImage={content.meta.ogImage}
/>

<Masthead />

<main>
  <Hero />

  {#each content.modules as module (module.id)}
    <Module
      number={module.number}
      title={module.title}
      id={module.id}
      intro={module.intro}
      homework={module.homework}
      background={module.background}
    >
      <div
        class="grid {module.gridClass || 'grid-3 grid-constrained'} grid-stack"
      >
        {#each module.topics as topic (topic.title)}
          <TopicCard
            icon={getIcon(topic.icon)}
            title={topic.title}
            description={topic.description}
          />
        {/each}
      </div>
    </Module>
  {/each}

  <Evaluation
    kicker={content.evaluation.kicker}
    title={content.evaluation.title}
    intro={content.evaluation.intro}
    criteria={evaluationCriteria}
    background={content.evaluation.background}
  />

  <GuestSpeakers
    kicker={content.guestSpeakers.kicker}
    title={content.guestSpeakers.title}
    description={content.guestSpeakers.description}
    speakers={content.guestSpeakers.speakers}
    background={content.guestSpeakers.background}
  />

  <Instructor
    kicker={content.instructor.kicker}
    headline={content.instructor.headline}
    name={content.instructor.name}
    title={content.instructor.title}
    image={content.instructor.image}
    link={content.instructor.link}
    bio={content.instructor.bio}
    background={content.instructor.background}
  />

  {#if scripts?.length}
    <Module
      kicker={content.scripts.kicker}
      title={content.scripts.title}
      id={content.scripts.id}
      intro={content.scripts.intro}
      background={content.scripts.background}
      disclosure={content.scripts.disclosure}
    >
      <div class="grid grid-3">
        {#each scripts as script (script.slug)}
          <ScriptCard {...script} />
        {/each}
      </div>
    </Module>
  {/if}
</main>

<Footer />
