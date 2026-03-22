<script>
  import { base } from '$app/paths';

  let { icon: Icon, title, description, href = null } = $props();
</script>

{#if href}
  <a class="topic-card topic-card-link" href="{base}{href}">
    <div class="card-header">
      <div class="icon-wrapper">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3>{title}</h3>
    </div>
    <p>{description}</p>
  </a>
{:else}
  <div class="topic-card">
    <div class="card-header">
      <div class="icon-wrapper">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3>{title}</h3>
    </div>
    <p>{description}</p>
  </div>
{/if}

<style>
  .topic-card {
    background-color: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: var(--spacing-lg);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
  }

  .icon-wrapper {
    color: var(--color-primary-orange);
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: var(--color-dark);
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--color-medium-gray);
    margin-bottom: 0;
  }

  .topic-card-link {
    text-decoration: none;
    display: block;
    transition: border-color 0.2s;
  }

  .topic-card-link:hover {
    border-color: var(--color-primary-orange);
  }
</style>
