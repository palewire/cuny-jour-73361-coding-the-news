<script lang="ts">
  import { onMount } from 'svelte';

  let progress = $state(0);
  let ticking = false;

  function updateProgress() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    progress =
      maxScroll > 0 ? Math.round((window.scrollY / maxScroll) * 100) : 0;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }

  onMount(() => {
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<div
  class="scroll-progress"
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Reading progress"
>
  <div class="scroll-progress-bar" style="width: {progress}%"></div>
</div>

<style>
  .scroll-progress {
    position: sticky;
    top: 0;
    z-index: 99;
    height: 3px;
    background: var(--color-border);
  }

  .scroll-progress-bar {
    height: 100%;
    background: var(--color-primary-orange);
  }

  @media (max-width: 600px) {
    .scroll-progress {
      top: var(--masthead-height);
    }
  }
</style>
