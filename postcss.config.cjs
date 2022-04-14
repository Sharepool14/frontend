module.exports = {
	plugins: [
		require('postcss-nested'),
		require('autoprefixer'),
		require('@postcss-plugins/token-utility')({
			spacing: {
				thin: '0.25rem',
				light: '0.5rem',
				demiLight: '0.75rem',
				regular: '1rem',
				demiHeavy: '1.25rem',
				heavy: '2rem',
				thick: '4rem',
				extraThick: '8rem'
			}
		}),
		require('cssnano')
	]
};
