<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Module from '$lib/components/Module.svelte';
  import TopicCard from '$lib/components/TopicCard.svelte';
  import GuestSpeakers from '$lib/components/GuestSpeakers.svelte';
  import Instructor from '$lib/components/Instructor.svelte';
  import { Monitor, Globe, BarChart3, Blocks, Layout } from 'lucide-svelte';

  const courseMeta = [
    '<a href="https://palewi.re/who-is-ben-welsh/">Ben Welsh</a>, Adjunct Assistant Professor',
    'Spring 2026',
    'Mondays 6–9 p.m.',
    'Lab 436'
  ];

  const guestSpeakers = [
    { name: 'Alvin Chang', org: 'The Pudding', image: 'alvin-chang.jpg', linkedin: 'https://www.linkedin.com/in/alv9n/' },
    { name: 'Joe Fox', org: 'Washington Post', image: 'joe-fox.jpg', linkedin: 'https://www.linkedin.com/in/joemfox/' },
    { name: 'Allison McCartney', org: 'New York Times', image: 'allison-mccartney.jpg', linkedin: 'https://www.linkedin.com/in/allisonmccartney/' },
    { name: 'Armand Emamdjomeh', org: 'Bloomberg', image: 'armand-emamdjomeh.jpg', linkedin: 'https://www.linkedin.com/in/armand-emamdjomeh/' },
    { name: 'Andrew Briz', org: 'Politico', image: 'andrew-briz.jpg', linkedin: 'https://www.linkedin.com/in/andrewbriz/' },
    { name: 'Tiana McGee', org: 'Reuters', image: 'tiana-mcgee.jpg', linkedin: 'https://www.linkedin.com/in/tiana-m-12b535217/' },
    { name: 'Rhyannon Bartlett-Imadegawa', org: 'CNN', image: 'rhyannon-bartlett-imadegawa.jpg', linkedin: 'https://www.linkedin.com/in/r-bartlett-imadegawa/' }
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
    <p class="module-intro">We will spend the first half of the semester familiarizing you with the software and skills that news developers use to write design and build interactive, data-driven stories.</p>
    
    <div class="topic-grid">
      <TopicCard
        icon={Monitor}
        title="Today's Coding Environment"
        description="Set up Visual Studio Code, connect to GitHub for version control and learn to collaborate with an AI coding assistant."
      />
      <TopicCard
        icon={Globe}
        title="Static Site Publishing"
        description="Explore SvelteKit and the page-building frameworks used by top newsrooms to publish your projects to the World Wide Web."
      />
      <TopicCard
        icon={Blocks}
        title="Building with Components"
        description="Write Node.JS and Svelte code to create pages using modular components and interactive elements."
      />
      <TopicCard
        icon={BarChart3}
        title="Data-Driven Storytelling"
        description="Import datasets into your projects and use templating techniques to create tables, charts and other visualizations."
      />
      <TopicCard
        icon={Layout}
        title="Layout and Design"
        description="Apply CSS grid systems, typography hierarchies and responsive techniques to create polished presentations."
      />
    </div>

    <div class="homework-summary">
      <h3>Homework</h3>
      <p>Each week you'll be expected complete assignments that reinforce the skills covered in class. You'll create repositories, build and publish static sites, import real-world datasets, create visualizations and progressively strengthen your skills. Expect to research how professional newsrooms use these tools and present your findings to classmates.</p>
    </div>
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
    link="https://palewi.re/who-is-ben-welsh/"
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
    max-width: 800px;
  }

  .module-intro {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-dark-gray);
    margin-bottom: var(--spacing-lg);
    max-width: 800px;
  }

  .topic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    max-width: 1000px;
  }

  @media (max-width: 900px) {
    .topic-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .topic-grid {
      grid-template-columns: 1fr;
    }
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