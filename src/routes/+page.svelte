<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Module from '$lib/components/Module.svelte';

  const courseMeta = [
    '<a href="https://palewi.re/who-is-ben-welsh/">Ben Welsh</a>, Adjunct Assistant Professor',
    'Spring 2026',
    'Mondays 6–9 p.m.',
    'Lab 436'
  ];
</script>

<svelte:head>
  <title>Coding the News | JOUR 73361</title>
  <meta name="description" content="Syllabus for JOUR 73361: Coding the News at the City University of New York's Craig Newmark Graduate School of Journalism" />
</svelte:head>

<Masthead />

<!-- Main Content -->
<main>
  <Hero
    courseCode="JOUR 73361"
    courseTitle="Coding the News"
    subtitle="Learn how America's top news organizations escape rigid publishing systems to design data-driven stories on deadline."
    meta={courseMeta}
  />

  <Module number={1} title="The Fundamentals" id="fundamentals">
    <p class="placeholder">[Content for The Fundamentals module]</p>
  </Module>

  <Module number={2} title="Simple Applications" id="applications">
    <p class="placeholder">[Content for Simple Applications module]</p>
  </Module>

  <Module number={3} title="The Capstone Challenge" id="capstone">
    <p class="placeholder">[Content for The Capstone Challenge module]</p>
  </Module>
</main>

<style>
  .placeholder {
    color: var(--color-medium-gray);
    font-style: italic;
    padding: var(--spacing-lg);
    border: 2px dashed var(--color-border);
    border-radius: 4px;
    text-align: center;
  }
</style>