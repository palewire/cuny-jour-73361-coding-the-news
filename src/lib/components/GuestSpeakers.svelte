<script>
  import Avatar from './Avatar.svelte';

  let {
    kicker = '',
    title = 'Guest Speakers',
    description = '',
    speakers = [],
    background = 'white',
  } = $props();
</script>

<section
  class="guest-speakers section"
  class:bg-white={background === 'white'}
  class:bg-light-gray={background === 'light-gray'}
>
  <div class="container">
    <div class="section-header">
      {#if kicker}
        <span class="section-kicker">{kicker}</span>
      {/if}
      <h2>{title}</h2>
    </div>
    {#if description}
      <p class="section-intro">{description}</p>
    {/if}
    <div class="grid grid-4 speakers-grid">
      {#each speakers as speaker}
        <div class="speaker-card">
          <div class="speaker-avatar">
            <Avatar
              name={speaker.name}
              image={speaker.image}
              link={speaker.linkedin}
              size="var(--speaker-avatar-size)"
              background="var(--color-light-gray)"
              textColor="var(--color-primary-orange)"
              fontSize="1.5rem"
              borderColor="var(--color-primary-orange)"
            />
          </div>
          <div class="speaker-info">
            <h3 class="speaker-name">
              {#if speaker.linkedin}
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">{speaker.name}</a
                >
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
  .speaker-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .speaker-avatar {
    --speaker-avatar-size: 80px;
    flex-shrink: 0;
  }

  .speaker-name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--color-dark);
  }

  .speaker-name a {
    color: var(--color-dark);
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

  .speakers-grid {
    gap: var(--spacing-lg);
  }

  @media (max-width: 768px) {
    .speakers-grid {
      gap: var(--spacing-md);
    }

    .speaker-avatar {
      --speaker-avatar-size: 60px;
    }
  }
</style>
