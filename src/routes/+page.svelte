<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Module from '$lib/components/Module.svelte';
  import GuestSpeakers from '$lib/components/GuestSpeakers.svelte';
  import Instructor from '$lib/components/Instructor.svelte';

  const courseMeta = [
    '<a href="https://palewi.re/who-is-ben-welsh/">Ben Welsh</a>, Adjunct Assistant Professor',
    'Spring 2026',
    'Mondays 6–9 p.m.',
    'Lab 436'
  ];

  const guestSpeakers = [
    { name: 'Alvin Chang', org: 'The Pudding', image: 'alvin-chang.jpg' },
    { name: 'Joe Fox', org: 'Washington Post', image: 'joe-fox.jpg' },
    { name: 'Allison McCartney', org: 'New York Times', image: 'allison-mccartney.jpg' },
    { name: 'Armand Emamdjomeh', org: 'Bloomberg', image: 'armand-emamdjomeh.jpg' },
    { name: 'Andrew Briz', org: 'Politico', image: 'andrew-briz.jpg' },
    { name: 'Tiana McGee', org: 'Reuters', image: 'tiana-mcgee.jpg' },
    { name: 'Rhyannon Bartlett-Imadegawa', org: 'CNN', image: 'rhyannon-bartlett-imadegawa.jpg' }
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
    subtitle="Learn how America's top news organizations escape rigid publishing systems to design beautiful data-driven stories on deadline."
    meta={courseMeta}
  />

  <Module number={1} title="Fundamental Tools" id="fundamentals">
    <p class="placeholder">[Content for Fundamental Tools module]</p>
  </Module>

  <Module number={2} title="Simple Applications" id="applications">
    <p class="placeholder">[Content for Simple Applications module]</p>
  </Module>

  <Module number={3} title="Capstone Challenge" id="capstone">
    <p class="placeholder">[Content for Capstone Challenge module]</p>
  </Module>

  <GuestSpeakers 
    description="Throughout the semester, working professionals will join our class to share how they use code to tell compelling stories."
    speakers={guestSpeakers}
  />

  <Instructor 
    name="Ben Welsh"
    title="Adjunct Assistant Professor"
    image="ben-welsh.jpg"
    bio="I am a reporter, editor and computer programmer with more than 20 years of journalism experience. I work at Reuters, the world's largest multimedia news provider, where I founded the organization's News Applications Desk."
  />
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