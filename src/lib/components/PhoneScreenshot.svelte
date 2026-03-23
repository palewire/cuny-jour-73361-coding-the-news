<script lang="ts">
  import { base } from '$app/paths';

  let {
    src,
    alt,
    maxWidth = '320px',
  } = $props<{ src: string; alt: string; maxWidth?: string }>();

  const imageSrc = $derived(
    src.startsWith('http') || src.startsWith('//')
      ? src
      : `${base}${src.startsWith('/') ? src : '/' + src}`
  );
</script>

<figure class="phone-screenshot" style="max-width: {maxWidth};">
  <div class="phone-frame">
    <div class="phone-notch">
      <div class="phone-camera"></div>
    </div>
    <div class="phone-screen">
      <img src={imageSrc} {alt} loading="lazy" decoding="async" />
    </div>
    <div class="phone-home-bar">
      <div class="home-indicator"></div>
    </div>
  </div>
</figure>

<style>
  .phone-screenshot {
    margin: var(--spacing-md) auto var(--spacing-lg);
  }

  .phone-frame {
    background: var(--color-dark);
    border-radius: 40px;
    padding: 12px;
    box-shadow:
      0 8px 24px -4px rgba(0, 0, 0, 0.2),
      0 4px 8px -2px rgba(0, 0, 0, 0.1),
      inset 0 0 0 2px var(--color-dark-gray);
    overflow: hidden;
  }

  .phone-notch {
    display: flex;
    justify-content: center;
    padding: 8px 0 6px;
    background: var(--color-dark);
  }

  .phone-camera {
    width: 80px;
    height: 24px;
    background: var(--color-black);
    border-radius: 12px;
  }

  .phone-screen {
    border-radius: 4px;
    overflow: hidden;
    background: var(--color-white);
  }

  .phone-screen img {
    display: block;
    width: 100%;
    height: auto;
  }

  .phone-home-bar {
    display: flex;
    justify-content: center;
    padding: 10px 0 4px;
    background: var(--color-dark);
  }

  .home-indicator {
    width: 100px;
    height: 4px;
    background: var(--color-medium-gray);
    border-radius: 2px;
  }

  @media print {
    .phone-screenshot {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .phone-frame {
      background: transparent;
      box-shadow: none;
      padding: 0;
      border-radius: 0;
      overflow: visible;
    }

    .phone-notch,
    .phone-home-bar {
      display: none;
    }

    .phone-screen {
      border-radius: 0;
      border: 1px solid var(--color-border);
    }
  }
</style>
