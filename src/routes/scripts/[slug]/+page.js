export const prerender = true;

const scriptModules = import.meta.glob('/src/content/scripts/*.svx');

// Generate static paths for all scripts
export async function entries() {
  return Object.keys(scriptModules).map((path) => {
    const slug = path.split('/').pop().replace('.svx', '');
    return { slug };
  });
}

export async function load({ params }) {
  const { slug } = params;
  const loader = scriptModules[`/src/content/scripts/${slug}.svx`];

  if (!loader) {
    throw new Error(`Script not found: ${slug}`);
  }

  const module = await loader();

  // Load all script metadata to find previous/next
  const allScripts = await Promise.all(
    Object.entries(scriptModules).map(async ([path, moduleLoader]) => {
      const mod = await moduleLoader();
      const scriptSlug = path.split('/').pop().replace('.svx', '');
      return {
        slug: scriptSlug,
        title: mod.metadata?.title || scriptSlug,
        week: mod.metadata?.week || 0,
        locked: mod.metadata?.locked ?? true,
      };
    })
  );

  // Filter out locked scripts and sort by week number
  const unlockedScripts = allScripts
    .filter((s) => !s.locked)
    .sort((a, b) => a.week - b.week);

  // Find current script's index
  const currentIndex = unlockedScripts.findIndex((s) => s.slug === slug);

  // Get previous and next scripts (only if they exist and are unlocked)
  const previousScript =
    currentIndex > 0 ? unlockedScripts[currentIndex - 1] : null;
  const nextScript =
    currentIndex >= 0 && currentIndex < unlockedScripts.length - 1
      ? unlockedScripts[currentIndex + 1]
      : null;

  return {
    content: module.default,
    metadata: module.metadata ?? {},
    previousScript,
    nextScript,
  };
}
