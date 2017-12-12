const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
    template: 'src/index.html'
});
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
});

module.exports = {
    entry: ['babel-polyfill', './src/app.jsx'],
    output:{
        path:  path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public/'
    },
    module: {
        rules: [
            {
                test:/\.jsx/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback : "style-loader",
                    use: [
                    "css-loader",
                    "sass-loader"
                    ],

                })
            }
        ]
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    plugins: [
        extractSass,
        htmlPlugin
    ]
};