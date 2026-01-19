<script>
  import Avatar from './Avatar.svelte';

  let {
    name = '',
    title = '',
    image = '',
    bio = '',
    link = '',
    background = 'light-gray',
  } = $props();
</script>

<section
  class="instructor section"
  class:bg-white={background === 'white'}
  class:bg-light-gray={background === 'light-gray'}
>
  <div class="container">
    <div class="section-header">
      <h2>Your Instructor</h2>
    </div>
    <div class="instructor-card">
      <div class="instructor-avatar">
        <Avatar
          {name}
          {image}
          {link}
          size="var(--instructor-avatar-size)"
          background="var(--color-gray)"
          textColor="var(--color-primary-orange)"
          fontSize="2rem"
          borderColor="var(--color-primary-orange)"
        />
      </div>
      <div class="instructor-info">
        <h3 class="instructor-name">
          {#if link}
            <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
          {:else}
            {name}
          {/if}
        </h3>
        <p class="instructor-title">{title}</p>
        <p class="instructor-bio">{@html bio}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .instructor-card {
    display: flex;
    gap: var(--spacing-lg);
    align-items: flex-start;
  }

  .instructor-avatar {
    --instructor-avatar-size: 150px;
    flex-shrink: 0;
  }

  .instructor-info {
    flex: 1;
  }

  .instructor-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
    color: var(--color-dark);
  }

  .instructor-name a {
    color: var(--color-dark);
    text-decoration: none;
  }

  .instructor-name a:hover {
    color: var(--color-primary-orange);
    text-decoration: underline;
  }

  .instructor-title {
    font-size: 1rem;
    color: var(--color-primary-orange);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
  }

  .instructor-bio {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-dark-gray);
    max-width: 700px;
  }

  @media (max-width: 768px) {
    .instructor-card {
      flex-direction: column;
      align-items: flex-start;
    }

    .instructor-avatar {
      --instructor-avatar-size: 120px;
    }
  }
</style>
