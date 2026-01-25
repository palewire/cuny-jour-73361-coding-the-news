import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import yaml from 'js-yaml';

export const prerender = true;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

  // Load homepage content from YAML
  const yamlPath = join(__dirname, '../content/homepage.yaml');
  const yamlContent = readFileSync(yamlPath, 'utf-8');
  const content = yaml.load(yamlContent);

  return {
    scripts,
    content,
  };
}
