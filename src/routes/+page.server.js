import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import yaml from 'js-yaml';

export const prerender = true;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function load() {
  // Load scripts from .svx files
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

  // Load homepage content from YAML
  const yamlPath = join(__dirname, '../content/homepage.yaml');
  const yamlContent = readFileSync(yamlPath, 'utf-8');
  const content = yaml.load(yamlContent);

  return {
    scripts,
    content,
  };
}
