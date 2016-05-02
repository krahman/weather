var webpack = require('webpack');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:1337",
        "webpack/hot/dev-server",
        "./src/index"
    ],
    output: {
        path: __dirname,
        filename: "app.bundle.js",
        publicPath: "/bundle/"
    },
    module: {
        loaders: [
            { 
                test: /.jsx?$/, 
                loader: 'babel-loader', 
                exclude: [/node_modules/, /bundle/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            },
            {   
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file" 
            },
            { 
                test: /\.(woff|woff2)$/, 
                loader:"url?prefix=font/&limit=5000" 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=application/octet-stream" 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=image/svg+xml" 
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};