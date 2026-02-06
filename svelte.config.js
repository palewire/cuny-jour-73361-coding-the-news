import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';

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
 * @returns {string} - The highlighted HTML wrapped in {@html}
 */
function shikiHighlighter(code, lang = 'text') {
  // Use 'text' for unknown languages to avoid errors
  const validLang = highlighter.getLoadedLanguages().includes(lang)
    ? lang
    : 'text';

  const html = escapeSvelte(
    highlighter.codeToHtml(code, {
      lang: validLang,
      theme,
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
