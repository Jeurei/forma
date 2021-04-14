const tailwindcss = require("tailwindcss");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: ["postcss-preset-env", postcssImport, tailwindcss, autoprefixer],
};
