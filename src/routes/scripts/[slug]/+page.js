export const prerender = true;

// Generate static paths for all scripts
export async function entries() {
  const modules = import.meta.glob('/src/content/scripts/*.svx', {
    eager: true,
  });

  return Object.keys(modules).map((path) => {
    const slug = path.split('/').pop().replace('.svx', '');
    return { slug };
  });
}

export async function load({ params }) {
  const { slug } = params;

  try {
    // Dynamically import the .svx file from content folder
    const module = await import(`../../../content/scripts/${slug}.svx`);

    return {
      content: module.default,
      metadata: module.metadata ?? {},
    };
  } catch (e) {
    throw new Error(`Script not found: ${slug}`);
  }
}
