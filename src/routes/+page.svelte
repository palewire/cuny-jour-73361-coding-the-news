<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Module from '$lib/components/Module.svelte';
  import TopicCard from '$lib/components/TopicCard.svelte';
  import GuestSpeakers from '$lib/components/GuestSpeakers.svelte';
  import Instructor from '$lib/components/Instructor.svelte';
  import Evaluation from '$lib/components/Evaluation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { Monitor, Globe, BarChart3, Blocks, Layout, ScrollText, Layers, CircleHelp, Map, Lightbulb, Database, ClipboardList, Hammer, MessageCircle, Presentation, MessageSquare, FileCheck, Trophy } from 'lucide-svelte';

  const courseMeta = [
    '<a href="https://palewi.re/who-is-ben-welsh/">Ben Welsh</a>, Adjunct Assistant Professor',
    'Spring 2026',
    'Mondays 6–9 p.m.',
    'Lab 436'
  ];

  const evaluationCriteria = [
    { icon: MessageSquare, title: 'Participation', description: 'You should engage in seminar-style discussions and give thoughtful feedback to peers.' },
    { icon: FileCheck, title: 'Homework', description: 'Your assignments should demonstrate effort and experimentation.' },
    { icon: Trophy, title: 'Capstone', description: 'You should deliver a page that is ready to publish on a professional news site.' }
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

  <Module 
    number={1} 
    title="Fundamental Tools" 
    id="fundamentals"
    intro="The first half of the semester will familiarize you with the software and skills that news developers use to design and build interactive, data-driven stories."
    homework="Each week you'll be expected to complete assignments that reinforce the skills covered in class. You'll create repositories, build and publish static sites, import real-world datasets, create visualizations and progressively strengthen your skills. Expect to research how professional newsrooms use these tools and present your findings to classmates."
  >
    <div class="topic-grid">
      <TopicCard
        icon={Monitor}
        title="Today's Toolbelt"
        description="Set up Visual Studio Code, connect to GitHub for version control and learn to collaborate with an AI coding assistant."
      />
      <TopicCard
        icon={Globe}
        title="Static Site Publishing"
        description="Explore SvelteKit and the page-building frameworks used by top newsrooms to publish your projects to the World Wide Web."
      />
      <TopicCard
        icon={Blocks}
        title="Building Blocks"
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
  </Module>

  <Module 
    number={2} 
    title="Simple Applications" 
    id="applications"
    intro="Now it's time to build. You will apply your new skills to create simplified versions of common digital story formats."
    homework="Each class begins with a folder of text, images, data and graphics that you'll assemble into a working prototype. After getting familiar with each format, you'll design and publish your own version."
  >
    <div class="topic-grid topic-grid-2x2">
      <TopicCard
        icon={ScrollText}
        title="Longform Story"
        description="A story page that weaves together multiple forms of media to guide readers through a lengthy narrative."
      />
      <TopicCard
        icon={Layers}
        title="Data Story"
        description="A stacked presentation that combines charts and analysis to walk readers through data-driven findings."
      />
      <TopicCard
        icon={CircleHelp}
        title="News Quiz"
        description="An interactive test that challenges readers and provides instant feedback."
      />
      <TopicCard
        icon={Map}
        title="Interactive Map"
        description="A geographic visualization that lets readers explore location-based data."
      />
    </div>
  </Module>

  <Module 
    number={3} 
    title="Capstone Challenge" 
    id="capstone"
    intro="The final weeks will be dedicated to your capstone project—a custom designed story that showcases what you've learned. You'll propose an original idea or choose an instructor-provided challenge, then bring it to life."
    homework="Your capstone is the culmination of the semester—a portfolio-ready piece that demonstrates your ability to design, build and publish interactive journalism."
  >
    <div class="topic-grid">
      <TopicCard
        icon={Lightbulb}
        title="Pitch Your Story"
        description="Choose a project idea for an interactive data story."
      />
      <TopicCard
        icon={Database}
        title="Gather Assets"
        description="Collect the text, images and data you need to make your story special."
      />
      <TopicCard
        icon={ClipboardList}
        title="Make a Plan"
        description="Map out your project's structure with a detailed outline."
      />
      <TopicCard
        icon={Hammer}
        title="Build and Iterate"
        description="Implement your outline and refine the presentation through multiple iterations."
      />
      <TopicCard
        icon={MessageCircle}
        title="Take Feedback"
        description="Share your work-in-progress and incorporate constructive criticism."
      />
      <TopicCard
        icon={Presentation}
        title="Hit the Deadline"
        description="Deliver a polished presentation of your completed capstone to the class."
      />
    </div>
  </Module>

  <Evaluation 
    title="Evaluation"
    intro="Your grade will be determined based on three factors."
    criteria={evaluationCriteria}
    background="white"
  />

  <GuestSpeakers 
    description="Throughout the semester, working professionals will join our class to share how they use code to tell compelling stories."
    speakers={guestSpeakers}
    background="light-gray"
  />

  <Instructor 
    name="Ben Welsh"
    title="Adjunct Assistant Professor"
    image="ben-welsh.jpg"
    link="https://palewi.re/who-is-ben-welsh/"
    bio="I am a reporter, editor and computer programmer with more than 20 years of journalism experience. I work at Reuters, the world's largest multimedia news provider, where I founded the organization's News Applications Desk."
    background="white"
  />
</main>

<Footer />

<style>
  .topic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    max-width: 1000px;
  }

  .topic-grid-2x2 {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
  }

  @media (max-width: 900px) {
    .topic-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .topic-grid-2x2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .topic-grid {
      grid-template-columns: 1fr;
    }

    .topic-grid-2x2 {
      grid-template-columns: 1fr;
    }
  }

</style>