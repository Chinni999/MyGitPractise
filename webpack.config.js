var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
        {
        test: /\.css$/,
        loader:'css-loader'
      }

      ]
       
   },
   plugins: [
        new ExtractTextPlugin("index.css")
    ]
}

module.exports = config;