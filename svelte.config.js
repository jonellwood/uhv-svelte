import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),

		prerender: {
			entries: ['*', '/sitemap.xml', '/rss.xml'],
		},
	},
};

export default config;
