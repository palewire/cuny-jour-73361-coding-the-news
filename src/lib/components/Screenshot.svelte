<script>
  import { base } from '$app/paths';

  let {
    src,
    alt,
    showChrome = true,
    chromeTitle = '',
    chromeUrl = '',
    width = '100%',
    maxWidth = '720px',
  } = $props();

  // Handle both absolute URLs and relative paths
  const imageSrc = $derived(
    src.startsWith('http') || src.startsWith('//')
      ? src
      : `${base}${src.startsWith('/') ? src : '/' + src}`
  );
</script>

<figure class="screenshot" style="max-width: {maxWidth}; width: {width};">
  {#if showChrome}
    <div class="browser-chrome">
      <div class="chrome-header">
        <div class="chrome-buttons">
          <span class="chrome-button close"></span>
          <span class="chrome-button minimize"></span>
          <span class="chrome-button maximize"></span>
        </div>
        {#if chromeTitle}
          <div class="chrome-title">{chromeTitle}</div>
        {/if}
      </div>
      {#if chromeUrl}
        <div class="chrome-url-bar">
          <div class="url-bar-inner">
            <svg
              class="lock-icon"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span class="url-text">{chromeUrl}</span>
          </div>
        </div>
      {/if}
      <div class="chrome-content">
        <img src={imageSrc} {alt} loading="lazy" />
      </div>
    </div>
  {:else}
    <div class="screenshot-simple">
      <img src={imageSrc} {alt} loading="lazy" />
    </div>
  {/if}
</figure>

<style>
  .screenshot {
    margin: var(--spacing-md) 0 var(--spacing-lg);
  }

  /* Browser Chrome Styles */
  .browser-chrome {
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    background: var(--color-white);
  }

  .chrome-header {
    background: linear-gradient(to bottom, #e8e8e8, #d8d8d8);
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #c0c0c0;
  }

  .chrome-buttons {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  }

  .chrome-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: block;
  }

  .chrome-button.close {
    background: #ff5f57;
    border: 1px solid #e14942;
  }

  .chrome-button.minimize {
    background: #ffbd2e;
    border: 1px solid #dfa123;
  }

  .chrome-button.maximize {
    background: #28c840;
    border: 1px solid #1bad2b;
  }

  .chrome-title {
    font-size: 0.75rem;
    color: var(--color-dark-gray);
    flex: 1;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 60px; /* Balance the buttons on the left */
  }

  .chrome-url-bar {
    background: #f5f5f5;
    padding: 6px 12px;
    border-bottom: 1px solid #e0e0e0;
  }

  .url-bar-inner {
    background: var(--color-white);
    border: 1px solid #d0d0d0;
    border-radius: 6px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    color: var(--color-medium-gray);
  }

  .lock-icon {
    color: #5cb85c;
    flex-shrink: 0;
  }

  .url-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .chrome-content {
    background: var(--color-white);
  }

  .chrome-content img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Simple Screenshot (no chrome) */
  .screenshot-simple {
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--color-border);
  }

  .screenshot-simple img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .chrome-header {
      padding: 6px 10px;
    }

    .chrome-button {
      width: 10px;
      height: 10px;
    }

    .chrome-title {
      font-size: 0.7rem;
      padding-right: 48px;
    }

    .chrome-url-bar {
      padding: 4px 10px;
    }

    .url-bar-inner {
      font-size: 0.7rem;
      padding: 3px 8px;
    }
  }
</style>
