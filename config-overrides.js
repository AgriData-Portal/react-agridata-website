const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    _components: "src/components",
    _images: "src/images",
    _styles: "src/styles",
    _pages: "src/pages",
    _elements: "src/components/elements",
  })(config);

  return config;
};
