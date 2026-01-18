<script>
  let { courseCode, courseTitle, subtitle, meta = [] } = $props();
</script>

<section class="hero">
  <div class="container">
    <p class="course-code">{courseCode}</p>
    <h1 class="course-title">{courseTitle}</h1>
    {#if subtitle}
      <p class="course-subtitle">{subtitle}</p>
    {/if}
    {#if meta.length > 0}
      <div class="course-meta">
        {#each meta as item}
          <p>{@html item}</p>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .hero {
    background-color: var(--color-gray);
    color: var(--color-white);
    padding: var(--spacing-xl) 0;
  }

  .course-code {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary-orange);
    margin-bottom: var(--spacing-xs);
  }

  .course-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: var(--spacing-xs);
    color: var(--color-white);
  }

  .course-subtitle {
    font-size: 1.25rem;
    max-width: 600px;
    margin-bottom: var(--spacing-md);
    color: var(--color-light-gray);
  }

  .course-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    font-size: 0.95rem;
    align-items: center;
  }

  .course-meta p {
    margin: 0;
  }

  .course-meta p:not(:last-child)::after {
    content: '•';
    color: var(--color-light-gray);
    margin-left: var(--spacing-xs);
  }

  .course-meta :global(a) {
    color: var(--color-white);
    text-decoration: underline;
    text-decoration-color: var(--color-primary-orange);
    text-underline-offset: 2px;
  }

  .course-meta :global(a:hover) {
    color: var(--color-primary-orange);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .course-title {
      font-size: 3rem;
    }
  }
</style>