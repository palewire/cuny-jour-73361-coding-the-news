<script>
  import { SITE_NAME, COURSE_CODE, SHARE_IMAGE } from '$lib/config.js';

  let {
    title,
    description = undefined,
    ogType = 'website',
    ogTitle = undefined,
    ogImage = SHARE_IMAGE,
  } = $props();

  const pageTitle = $derived(
    title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  );
  const pageDescription = $derived(
    description || `${title} - ${COURSE_CODE}: ${SITE_NAME}`
  );
  const socialTitle = $derived(ogTitle || title);
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={socialTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={socialTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
