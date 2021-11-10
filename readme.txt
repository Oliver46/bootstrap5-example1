- npm init -y
- create .gitignore in the root folder. 
- Add node_modules to .gitignore
- Install webpack
- npm install --save-dev webpack webpack-cli
- Entry point of project ./src/index.js
- create webpack.config.js

Add:
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
}

- install bootstrap locally:
npm install --save-dev bootstrap

- install html-webpack-plugin | it generates an html file from a template
npm install --save-dev html-webpack-plugin

- Add const HtmlWebpackPlugin = require('html-webpack-plugin') to webpack.config.js

- install 
npm install --save-dev style-loader css-loader

-install
npm install --save-dev sass-loader node-sass

Add: 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', //3. inject styles into DOM
                'css-loader', //2. Turn css into commonjs
                'sass-loader'], //1. Turn sass into css
            },
        ],
    },
}

install bootstrap 
- npm install bootstrap

install popper.js | Popper.js is a dependency of Bootstrap 4 which is used for showing popups.
- npm install popper.js --save

Add import 'bootstrap' into the index.js
add @import "~bootstrap/scss/bootstrap" into styles.scss

- npm install -save-dev webpack-merge

- npm install --save-dev webpack-dev-server

- rm -rf dist | delete dist
- npm run build | Create a dist folder

- npm install --save-dev html-loader
- npm install file-loader --save-dev

- npm install --save-dev clean-webpack-plugin

