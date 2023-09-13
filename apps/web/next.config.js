const { i18n } = require("./next-i18next.config");
const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  i18n,
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = [
        "react",
        "next-i18next",
        "react-dom",
        ...config.externals,
      ];
    }

    config.resolve.alias["react"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react"
    );

    config.resolve.alias["next-i18next"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "next-i18next"
    );

    config.resolve.alias["react-dom"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react-dom"
    );

    return config;
  },
};
