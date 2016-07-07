var config = {
    entry: './js/script.js',
    output: {
        path: './js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.node$/,
            loader: 'node'
        }, ]
    },
    extensions: ['', '.js', '.json', '.jsx', '.es6', '.babel', '.node'],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}

module.exports = config
