export const prerender = true;

export async function load() {
  const modules = import.meta.glob('./scripts/*/+page.svx', { eager: true });

  const scripts = Object.entries(modules).map(([path, module]) => {
    const segments = path.split('/');
    const slug = segments[2]; // scripts/<slug>/+page.svx
    const meta = module?.metadata ?? {};

    return {
      slug,
      title: meta.title ?? slug,
      summary: meta.summary ?? '',
      date: meta.date ?? null,
      locked: Boolean(meta.locked),
    };
  });

  scripts.sort((a, b) => a.slug.localeCompare(b.slug));

  return { scripts };
}
