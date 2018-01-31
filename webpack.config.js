const path = require('path');

module.exports = {
	watch: true,
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: __dirname,
		stats: "errors-only",
		overlay: {
			errors: true,
			warnings: true,
		},
		open: true
	},

};