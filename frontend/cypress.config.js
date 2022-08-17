module.exports = {
  viewportWidth: 1280,
  viewportHeight: 720,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
  },
};
