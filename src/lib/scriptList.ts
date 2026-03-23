import type { ScriptDropdownItem } from '$lib/types';

interface SvxModule {
  metadata?: {
    title?: string;
    week?: number;
    locked?: boolean;
  };
}

const modules = import.meta.glob<SvxModule>('/src/content/scripts/*.svx', {
  eager: true,
});

export const scriptList: ScriptDropdownItem[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace('.svx', '');
    const meta = mod?.metadata ?? {};
    return {
      slug,
      title: meta.title ?? slug,
      week: meta.week ?? 0,
      locked: meta.locked ?? true,
    };
  })
  .sort((a, b) => a.week - b.week);
