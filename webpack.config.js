const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'index.html'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|html)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Uday Bhaskhar',
            inject: true
        })
    ]
}