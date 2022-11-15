import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

const config: webpack.Configuration = {
   entry: "./src/index.tsx",
   mode: "development",
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
         },
         {
            test: /\.(png|jpg|gif|svg)$/i,
            use: [
               {
                  loader: "url-loader",
                  options: {
                     limit: 8192, // 10000
                     name: "[name].[hash:7].[ext]",
                  },
               },
               { loader: "image-webpack-loader" },
            ],
         },
      ],
   },
   resolve: {
      extensions: [".tsx", ".ts", ".js"],
   },
   plugins: [
      new WebpackManifestPlugin({}),
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") }),
      new MiniCssExtractPlugin({ filename: "[name].[hash:7].bundle.css" }),
   ],
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash:7].bundle.js",
   },
   // optimization: {
   //    splitChunks: { chunks: "all" },
   // },
};

export default config;
