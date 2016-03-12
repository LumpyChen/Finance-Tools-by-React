/**
 * Created by Lumpychen on 16/3/11.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = process.env.port || 5000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    https: false,
    historyApiFallback: true
}).listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at localhost:${PORT}`);
console.log(`${config.output.publicPath}/${config.output.path}`);
});
