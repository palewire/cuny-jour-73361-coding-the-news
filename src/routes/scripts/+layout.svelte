<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<Masthead />

<main id="main-content">
  <Hero linkToHome={true} />
  {@render children()}
</main>

<Footer />
