<script lang="ts">
  import { page } from '$app/state';
  import { base } from '$app/paths';
  import Masthead from '$lib/components/Masthead.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Masthead />

<main id="main-content" class="error-page">
  <div class="container">
    <h1>{page.status}</h1>
    <p>{page.error?.message || 'Something went wrong'}</p>
    <a href="{base}/" class="home-link">Back to syllabus</a>
  </div>
</main>

<Footer />

<style>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
  }

  .container {
    max-width: var(--max-width);
    padding: var(--spacing-xl) var(--spacing-md);
  }

  h1 {
    font-family: var(--font-family-headline);
    font-size: 4rem;
    color: var(--color-dark);
    margin: 0 0 var(--spacing-sm);
  }

  p {
    font-size: 1.25rem;
    color: var(--color-medium-gray);
    margin: 0 0 var(--spacing-lg);
  }

  .home-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--color-primary-orange);
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-family-bold);
    font-size: 0.95rem;
    transition: opacity 0.2s;
  }

  .home-link:hover {
    opacity: 0.9;
  }
</style>
