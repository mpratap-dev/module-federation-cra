// const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
const deps = packageJson.dependencies;

module.exports = function override(config) {
  config.output = {
    publicPath: "http://localhost:3000/",
  }
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: packageJson.name,
      remotes: {
        nav: "nav@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { eager: true, requiredVersion: deps.react }, 
        "react-dom": { eager: true, requiredVersion: deps["react-dom"] }
      }
    }),
  ];

  return config;
}