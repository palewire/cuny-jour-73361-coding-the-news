import type { Component } from 'svelte';
import type { PageLoad, EntryGenerator } from './$types';
import type { GradingNav } from '$lib/types';

export const prerender = true;

interface SvxModule {
  default: Component;
  metadata?: {
    title?: string;
    module?: number;
  };
}

const gradingModules = import.meta.glob<SvxModule>(
  '/src/content/grading/*.svx'
);

// Generate static paths for all grading pages
export const entries: EntryGenerator = async () => {
  return Object.keys(gradingModules).map((path) => {
    const slug = path.split('/').pop()!.replace('.svx', '');
    return { slug };
  });
};

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  const loader = gradingModules[`/src/content/grading/${slug}.svx`];

  if (!loader) {
    throw new Error(`Grading page not found: ${slug}`);
  }

  const module = await loader();

  // Load all grading modules to find previous/next
  const allGrading = await Promise.all(
    Object.entries(gradingModules).map(async ([path, moduleLoader]) => {
      const mod = await moduleLoader();
      const gradingSlug = path.split('/').pop()!.replace('.svx', '');
      return {
        slug: gradingSlug,
        title: mod.metadata?.title || gradingSlug,
        module: mod.metadata?.module || 0,
      };
    })
  );

  const sorted = allGrading.sort((a, b) => a.module - b.module);
  const currentIndex = sorted.findIndex((g) => g.slug === slug);
  const previousGrading: GradingNav | null =
    currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const nextGrading: GradingNav | null =
    currentIndex >= 0 && currentIndex < sorted.length - 1
      ? sorted[currentIndex + 1]
      : null;

  return {
    content: module.default,
    metadata: module.metadata ?? {},
    previousGrading,
    nextGrading,
  };
};
