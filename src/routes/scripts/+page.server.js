export const prerender = true;

export async function load() {
  const modules = import.meta.glob('./*/+page.svx', { eager: true });

  const weeks = Object.entries(modules).map(([path, module]) => {
    const parts = path.split('/');
    const slug = parts[1];
    const meta = module?.metadata ?? {};

    return {
      slug,
      title: meta.title ?? slug,
      summary: meta.summary ?? '',
      date: meta.date ?? null,
      locked: Boolean(meta.locked),
    };
  });

  weeks.sort((a, b) => a.slug.localeCompare(b.slug));

  return { weeks };
}
