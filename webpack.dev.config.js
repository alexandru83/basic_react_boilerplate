const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: 'src/index.html'
});

module.exports = {
    entry: ['babel-polyfill', './src/app.jsx'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    devtool: '#sourcemap',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                     ]
            }
        ]
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    plugins: [
        htmlPlugin
    ]
};