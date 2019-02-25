var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	context: __dirname,
	mode: "development",
	entry:{
		app: ['./static/src/js/app.js',]
	},
	output: {
		path: path.resolve('./static/webpack_bundles/'),
		filename: "[name]-[hash].js"
	},
	module: {
		rules: [
		  {
		  	test: /\.js$/,
		  	exclude: /('node_modules')/,
		  	use: {
		  		loader: "babel-loader",
		  		options: {
		  			presets: ["babel-preset-env"]
		  		}
		  	}
		  }
		]
	},
	plugins: [
       new BundleTracker({path: __dirname,filename: './webpack-stats.json'})
	]
}