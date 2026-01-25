import yaml from 'js-yaml';

export const prerender = true;

export async function load() {
  // Load scripts from .svx files in content folder
  const modules = import.meta.glob('/src/content/scripts/*.svx', {
    eager: true,
  });

  const scripts = Object.entries(modules).map(([path, module]) => {
    // Extract slug from path: /src/content/scripts/week-1.svx -> week-1
    const slug = path.split('/').pop().replace('.svx', '');
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

  // Load homepage content from YAML via Vite's glob import to avoid fs path issues
  const homepageFiles = import.meta.glob('/src/content/homepage.yaml', {
    eager: true,
    import: 'default',
    query: '?raw',
  });

  const homepageSource = homepageFiles['/src/content/homepage.yaml'];
  const content = yaml.load(homepageSource ?? '');

  return {
    scripts,
    content,
  };
}
