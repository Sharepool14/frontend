module.exports = {
	plugins: [
		require('@postcss-plugins/token-utility')({
			spacing: {
				auto: 'auto',
				x0_25: '0.25rem',
				x0_5: '0.5rem',
				x0_75: '0.75rem',
				x1: '1rem',
				x2: '2rem',
				x3: '3rem',
				x4: '4rem',
				x5: '5rem',
				x6: '6rem',
				x7: '7rem',
				x8: '8rem',
				x9: '9rem',
				x10: '10rem',
			},
		}),
		require('autoprefixer'),
		require('cssnano'),
		require('postcss-nested'),
	],
};
