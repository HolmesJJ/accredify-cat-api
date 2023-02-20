module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  globals: {
    'vue-jest': {
      experimentalCSSCompile: true,
    }
  }
}
