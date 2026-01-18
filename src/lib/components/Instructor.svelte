<script>
  import { base } from '$app/paths';
  
  let { 
    name = "",
    title = "",
    image = "",
    bio = "",
    link = ""
  } = $props();
</script>

<section class="instructor">
  <div class="container">
    <h2>Your Instructor</h2>
    <div class="instructor-card">
      <div class="instructor-image">
        {#if link}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {#if image}
              <img src="{base}/{image}" alt={name} />
            {:else}
              <div class="placeholder-image">
                <span>{name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            {/if}
          </a>
        {:else}
          {#if image}
            <img src="{base}/{image}" alt={name} />
          {:else}
            <div class="placeholder-image">
              <span>{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          {/if}
        {/if}
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
        <p class="instructor-bio">{bio}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .instructor {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-light-gray);
  }

  .instructor h2 {
    margin-bottom: var(--spacing-lg);
    color: var(--color-dark);
  }

  .instructor-card {
    display: flex;
    gap: var(--spacing-lg);
    align-items: flex-start;
  }

  .instructor-image {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--color-primary-orange);
  }

  .instructor-image img {
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
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary-orange);
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
    margin-bottom: var(--spacing-sm);
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

    .instructor-image {
      width: 120px;
      height: 120px;
    }
  }
</style>