<script>
  import { base } from '$app/paths';
  
  let { 
    title = "Guest Speakers",
    description = "",
    speakers = []
  } = $props();
</script>

<section class="guest-speakers">
  <div class="container">
    <div class="section-header">
      <h2>{title}</h2>
      {#if description}
        <p class="description">{description}</p>
      {/if}
    </div>
    <div class="speakers-grid">
      {#each speakers as speaker}
        <div class="speaker-card">
          <div class="speaker-image">
            {#if speaker.linkedin}
              <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                {#if speaker.image}
                  <img src="{base}/{speaker.image}" alt={speaker.name} />
                {:else}
                  <div class="placeholder-image">
                    <span>{speaker.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                {/if}
              </a>
            {:else}
              {#if speaker.image}
                <img src="{base}/{speaker.image}" alt={speaker.name} />
              {:else}
                <div class="placeholder-image">
                  <span>{speaker.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              {/if}
            {/if}
          </div>
          <div class="speaker-info">
            <h3 class="speaker-name">
              {#if speaker.linkedin}
                <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">{speaker.name}</a>
              {:else}
                {speaker.name}
              {/if}
            </h3>
            <p class="speaker-org">{speaker.org}</p>
            {#if speaker.note}
              <p class="speaker-note">{speaker.note}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .guest-speakers {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-gray);
    color: var(--color-white);
  }

  .section-header {
    margin-bottom: var(--spacing-xl);
  }

  .section-header h2 {
    color: var(--color-white);
    margin-bottom: var(--spacing-sm);
  }

  .description {
    color: var(--color-light-gray);
    font-size: 1.125rem;
    max-width: 600px;
  }

  .speakers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }

  .speaker-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .speaker-image {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--color-primary-orange);
  }

  .speaker-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    background-color: var(--color-gray);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-image span {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary-orange);
    letter-spacing: 0.05em;
  }

  .speaker-name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--color-white);
  }

  .speaker-name a {
    color: var(--color-white);
    text-decoration: none;
  }

  .speaker-name a:hover {
    color: var(--color-primary-orange);
    text-decoration: underline;
  }

  .speaker-org {
    font-size: 0.875rem;
    color: var(--color-primary-orange);
    margin-bottom: 0;
  }

  @media (max-width: 992px) {
    .speakers-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .speakers-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-md);
    }

    .speaker-image {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    .speakers-grid {
      grid-template-columns: 1fr;
    }
  }
</style>