import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html',
			strict: false
		}),
		
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`Prerender error: ${path} - ${message}`);
				
				// Skip all 404 errors during prerendering
				if (message.includes('404') || message.includes('Not found')) {
					return;
				}
				
				// Skip contact page specifically
				if (path === '/contact') {
					return;
				}
				
				// Skip dynamic quiz routes
				if (path.startsWith('/quizzes/') && path !== '/quizzes') {
					return;
				}
				
				// Log other errors but don't fail the build
				console.error(`Prerender error on ${path}: ${message}`);
			},
			
			// Only prerender safe routes
			entries: [
				'/',
				'/quizzes',
				'/contact'
			],
			
			// Crawl from these entry points only
			crawl: true
		}
	}
};

export default config;