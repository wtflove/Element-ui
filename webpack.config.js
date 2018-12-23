const path = require('path')

module.export = {
	entry: {
		index: './src/index.js'
	}
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}