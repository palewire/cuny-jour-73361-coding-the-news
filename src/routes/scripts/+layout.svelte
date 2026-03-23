<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import ScriptDropdown from '$lib/components/ScriptDropdown.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<Masthead>
  <ScriptDropdown />
</Masthead>

<main id="main-content">
  <Hero linkToHome={true} />
  {@render children()}
</main>

<Footer />
