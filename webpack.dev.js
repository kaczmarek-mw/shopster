const merge = require('webpack-merge');
const common = require('./webpack.common');

console.log(
`================================================================================================
=========================================== DEV BUILD ==========================================
================================================================================================`);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map'
});