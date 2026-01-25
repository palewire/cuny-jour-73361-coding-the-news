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

  return {
    content: module.default,
    metadata: module.metadata ?? {},
  };
}
