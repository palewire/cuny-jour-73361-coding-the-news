<script>
  import { base } from '$app/paths';

  let {
    name = '',
    image = '',
    link = '',
    size = 'var(--avatar-size, 80px)',
    background = 'var(--color-light-gray)',
    borderColor = 'var(--color-primary-orange)',
    textColor = 'var(--color-primary-orange)',
    fontSize = '1.5rem',
  } = $props();

  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
    : '';

  const style = `--avatar-size: ${size}; --avatar-bg: ${background}; --avatar-border: ${borderColor}; --avatar-text: ${textColor}; --avatar-font: ${fontSize};`;
</script>

{#if link}
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    class="avatar avatar-link"
    {style}
  >
    {#if image}
      <img src="{base}/{image}" alt={name} />
    {:else}
      <div class="avatar-placeholder"><span>{initials}</span></div>
    {/if}
  </a>
{:else}
  <div class="avatar" {style}>
    {#if image}
      <img src="{base}/{image}" alt={name} />
    {:else}
      <div class="avatar-placeholder"><span>{initials}</span></div>
    {/if}
  </div>
{/if}

<style>
  .avatar {
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--avatar-border);
    display: block;
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      border-color 0.15s ease;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background-color: var(--avatar-bg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-placeholder span {
    font-size: var(--avatar-font);
    font-weight: 700;
    color: var(--avatar-text);
    letter-spacing: 0.05em;
  }

  .avatar-link:hover,
  .avatar-link:focus-visible {
    transform: translateY(-2px);
    border-color: var(--color-primary-orange);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }

  .avatar-link:hover img,
  .avatar-link:focus-visible img {
    filter: brightness(1.05);
  }
</style>
