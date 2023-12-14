const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Jelajah Jogjakarta",
      short_name: "JejakApps",
      description:
        "Aplikasi rekomendasi wisata terdekat menggunakan fitur tracking dan terdapat penginapan terdekat dari wisata.",
      start_url: "./index.html",
      background_color: "#FFFFFF",
      theme_color: "#ededed",
      display: "standalone",
      orientation: "any",
      publicPath: "./",
      filename: "manifest",
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, "src/public/icons/logo.png"),
          size: 128,
          destination: "/icons",
          ios: true
        },
        {
          src: path.resolve(__dirname, "src/public/icons/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: "/icons",
          purpose: "any maskable"
        }
      ]
    })
  ]
});
