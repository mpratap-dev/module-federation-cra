const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
const deps = packageJson.dependencies;

module.exports = function override(config) {
  config.output = {
    publicPath: "http://localhost:3001/",
  }
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: packageJson.name,
      library: { type: "var", name: packageJson.name },
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header",
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