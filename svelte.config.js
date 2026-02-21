import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';

/**
 * Parse a meta string to extract line numbers to highlight
 * Supports formats:
 * - {1,3,5-7} or {1, 3, 5-7}
 * - {emphasize-lines="1,3,5-7"}
 * @param {string} meta - The meta string from the code fence
 * @returns {Set<number>} - Set of line numbers to highlight
 */
function parseHighlightLines(meta) {
  if (!meta) return new Set();

  // Match {emphasize-lines="..."} or just {...}
  const emphasizeMatch = meta.match(/\{emphasize-lines=["']([^"']+)["']\}/);
  const simpleMatch = meta.match(/\{([^}]+)\}/);

  const lineSpec = emphasizeMatch?.[1] || simpleMatch?.[1];
  if (!lineSpec) return new Set();

  // Don't parse if it looks like a language or other non-numeric spec
  if (!/^[\d,\s-]+$/.test(lineSpec.trim())) return new Set();

  const lines = new Set();
  const parts = lineSpec.split(',');

  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map((n) => parseInt(n.trim(), 10));
      for (let i = start; i <= end; i++) {
        lines.add(i);
      }
    } else {
      const num = parseInt(trimmed, 10);
      if (!isNaN(num)) {
        lines.add(num);
      }
    }
  }

  return lines;
}

// Create Shiki highlighter
const theme = 'catppuccin-macchiato';
const highlighter = await createHighlighter({
  themes: [theme],
  langs: [
    'javascript',
    'typescript',
    'html',
    'css',
    'svelte',
    'json',
    'bash',
    'shell',
    'markdown',
    'yaml',
    'python',
  ],
});

/**
 * Custom highlighter function for mdsvex using Shiki
 * Following the pattern from mdsvex docs: https://mdsvex.pngwn.io/docs#with-shiki
 * @param {string} code - The code to highlight
 * @param {string} lang - The language identifier
 * @param {string} meta - The meta string from the code fence (e.g., {1,3,5-7})
 * @returns {string} - The highlighted HTML wrapped in {@html}
 */
function shikiHighlighter(code, lang = 'text', meta = '') {
  // Use 'text' for unknown languages to avoid errors
  const validLang = highlighter.getLoadedLanguages().includes(lang)
    ? lang
    : 'text';

  const highlightLines = parseHighlightLines(meta);

  const html = escapeSvelte(
    highlighter.codeToHtml(code, {
      lang: validLang,
      theme,
      transformers: [
        {
          line(node, line) {
            if (highlightLines.has(line)) {
              this.addClassToHast(node, 'highlighted');
            }
          },
        },
      ],
    })
  );

  return `{@html \`${html}\`}`;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      smartypants: false,
      layout: {
        _: './src/lib/layouts/ScriptLayout.svelte',
      },
      rehypePlugins: [rehypeSlug],
      highlight: {
        highlighter: shikiHighlighter,
      },
    }),
  ],
  kit: {
    paths: {
      base: '/docs/coding-the-news',
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
