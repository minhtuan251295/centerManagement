module.exports = {
        entry: ["./app/controllers/ts/main.ts"], //File build webpack [có thể build nhiều file]
        output: {
            path: __dirname, //đường dẫn sau khi build webpack file sẽ chưa ở đó
            filename: "main.js"
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                { test: /\.css$/, loader: "style-loader!css-loader" }, // Set thuộc tính để build file css
                { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
                { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]' },
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        },
        devtool: "source-map"
    };
    