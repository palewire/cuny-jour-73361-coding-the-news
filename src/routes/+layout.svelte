<script lang="ts">
  import type { Snippet } from 'svelte';
  import '../app.css';
  import { onNavigate } from '$app/navigation';

  let { children }: { children: Snippet } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>
{@render children()}
