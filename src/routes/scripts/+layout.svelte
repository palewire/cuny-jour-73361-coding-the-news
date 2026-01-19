<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';

  const courseMeta = [
    '<a href="https://palewi.re/who-is-ben-welsh/">Ben Welsh</a>, Adjunct Assistant Professor',
    'Spring 2026',
    'Mondays 6–9 p.m.',
    'Lab 436',
  ];
</script>

<Masthead />

<main>
  <Hero
    courseCode="JOUR 73361"
    courseTitle="Coding the News"
    subtitle="Learn how America's top news organizations escape rigid publishing systems to design beautiful data-driven stories on deadline."
    meta={courseMeta}
  />

  <div class="container breadcrumb">
    <a href={base}>Home</a>
    <span aria-hidden="true">/</span>
    <span>Script</span>
  </div>

  <slot />
</main>

<Footer />

<style>
  .breadcrumb {
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    font-size: 0.95rem;
    color: var(--color-medium-gray);
    clear: both;
  }

  .breadcrumb a {
    color: var(--color-primary-orange);
    text-decoration: none;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  .breadcrumb span {
    color: var(--color-medium-gray);
  }
</style>
