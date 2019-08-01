const path = require('path');

// project root path  
console.log(path.join(__dirname, 'public'));

// entry -> output

module.exports = (env) => {
    console.log('env :', env);
    // check env
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, // check for .js file extension 
                exclude: /node_modules/
            }, {
                test: /\.s?css$/, // check for .css/.scss file extension
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    };
};