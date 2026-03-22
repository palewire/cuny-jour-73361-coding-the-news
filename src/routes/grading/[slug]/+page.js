export const prerender = true;

const gradingModules = import.meta.glob('/src/content/grading/*.svx');

// Generate static paths for all grading pages
export async function entries() {
  return Object.keys(gradingModules).map((path) => {
    const slug = path.split('/').pop().replace('.svx', '');
    return { slug };
  });
}

export async function load({ params }) {
  const { slug } = params;
  const loader = gradingModules[`/src/content/grading/${slug}.svx`];

  if (!loader) {
    throw new Error(`Grading page not found: ${slug}`);
  }

  const module = await loader();

  return {
    content: module.default,
    metadata: module.metadata ?? {},
  };
}
