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
          <p>
            {#if typeof item === 'string'}
              {item}
            {:else if item.label}
              <strong>{item.label}:</strong> {item.value}
            {:else}
              {item.value}
            {/if}
          </p>
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
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: var(--spacing-sm);
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
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .course-meta p:not(:last-child)::after {
    content: '•';
    color: var(--color-light-gray);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .course-title {
      font-size: 2.5rem;
    }

    .course-meta {
      flex-direction: column;
      gap: var(--spacing-xs);
    }
  }
</style>