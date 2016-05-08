var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    context: __dirname + "/app",
    devtool: 'source-map',
    entry: {
        javascript: "./app.js",
        html: ["./index.html", "./placeholder.html"],
    },

    output: {
        filename: "app.js",
        path: __dirname + "/",
    },

    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                include: /\.(js|jsx)$/,
                loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"],
                exclude: /node_modules/
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            },
            {
                test: /\.(html|png|jpg)$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },

    postcss: function () {
        return [autoprefixer, precss];
    },

    resolve: {
		modulesDirectories: [
			"src",
			"node_modules",
			"web_modules"
		],
		extensions: ["", ".json", ".js", ".jsx"]
	},
}
