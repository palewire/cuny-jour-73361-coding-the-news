export interface ScriptNav {
  slug: string;
  title: string;
  week: number;
}

export interface GradingNav {
  slug: string;
  title: string;
  module: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ScriptDropdownItem {
  slug: string;
  title: string;
  week: number;
  locked: boolean;
}
