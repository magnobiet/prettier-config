/**
 * @type {import("prettier").Config}
 */
const config = {
  ...require('./index.js'),
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
