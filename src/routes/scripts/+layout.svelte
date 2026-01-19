<script>
  import Masthead from '$lib/components/Masthead.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Masthead />

<main>
  <Hero />
  <Breadcrumbs items={[{ label: 'Script' }]} />
  <slot />
</main>

<Footer />
