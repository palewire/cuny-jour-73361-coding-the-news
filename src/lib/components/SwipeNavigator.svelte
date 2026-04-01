<script lang="ts">
  import type { Snippet } from 'svelte';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  let {
    children,
    previousHref = undefined,
    nextHref = undefined,
  }: {
    children: Snippet;
    previousHref?: string | null;
    nextHref?: string | null;
  } = $props();

  let container: HTMLElement;
  let isMobile = $state(false);
  let swipeProgress = $state(0); // -1 to 1, negative = swiping right (previous), positive = swiping left (next)
  let isSwiping = $state(false);

  const SWIPE_THRESHOLD = 60;
  const MAX_HINT_DISTANCE = 120;

  let startX = 0;
  let startY = 0;
  let tracking = false;

  onMount(() => {
    const mql = window.matchMedia('(max-width: 600px)');
    isMobile = mql.matches;
    const handler = (e: MediaQueryListEvent) => (isMobile = e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  });

  function onTouchStart(e: TouchEvent) {
    if (!isMobile) return;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    tracking = true;
    isSwiping = false;
    swipeProgress = 0;
  }

  function onTouchMove(e: TouchEvent) {
    if (!tracking) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    // Only track horizontal swipes (angle < 30 degrees from horizontal)
    if (!isSwiping && Math.abs(dy) > Math.abs(dx)) {
      tracking = false;
      swipeProgress = 0;
      return;
    }

    if (Math.abs(dx) > 10) {
      isSwiping = true;
    }

    if (isSwiping) {
      // Clamp progress: negative = going to previous (swipe right), positive = going to next (swipe left)
      const raw = -dx / MAX_HINT_DISTANCE;
      // Only allow swipe if there's a destination in that direction
      if (raw < 0 && !previousHref) {
        swipeProgress = 0;
      } else if (raw > 0 && !nextHref) {
        swipeProgress = 0;
      } else {
        swipeProgress = Math.max(-1, Math.min(1, raw));
      }
    }
  }

  function onTouchEnd() {
    if (!tracking) return;
    tracking = false;

    const absDx = Math.abs(swipeProgress) * MAX_HINT_DISTANCE;

    if (absDx >= SWIPE_THRESHOLD) {
      if (swipeProgress < 0 && previousHref) {
        goto(previousHref);
      } else if (swipeProgress > 0 && nextHref) {
        goto(nextHref);
      }
    }

    isSwiping = false;
    swipeProgress = 0;
  }
</script>

<div
  bind:this={container}
  class="swipe-container"
  ontouchstart={onTouchStart}
  ontouchmove={onTouchMove}
  ontouchend={onTouchEnd}
>
  {@render children()}

  {#if isMobile && isSwiping && swipeProgress < 0 && previousHref}
    <div
      class="swipe-hint swipe-hint-left"
      style="opacity: {Math.min(1, Math.abs(swipeProgress) * 1.5)}"
    >
      <ChevronLeft size={24} aria-hidden="true" />
    </div>
  {/if}

  {#if isMobile && isSwiping && swipeProgress > 0 && nextHref}
    <div
      class="swipe-hint swipe-hint-right"
      style="opacity: {Math.min(1, Math.abs(swipeProgress) * 1.5)}"
    >
      <ChevronRight size={24} aria-hidden="true" />
    </div>
  {/if}
</div>

<style>
  .swipe-container {
    position: relative;
  }

  .swipe-hint {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--color-orange-text);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    pointer-events: none;
    transition: opacity 0.1s ease;
  }

  .swipe-hint-left {
    left: 8px;
  }

  .swipe-hint-right {
    right: 8px;
  }
</style>
