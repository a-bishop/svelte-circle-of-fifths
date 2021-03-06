import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		babel: {
			presets: [
			  [
				'@babel/preset-env',
				{
				  loose: true,
				  // No need for babel to resolve modules
				  modules: false,
				  targets: {
					// ! Very important. Target es6+
					esmodules: true,
				  },
				},
			  ],
			],
		  },
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// for gh-pages deployment - has to match the repo name
		paths: {
			base: dev ? '' : '/svelte-circle-of-fifths',
		},
		files: {
			assets: './src/assets'
		},
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
