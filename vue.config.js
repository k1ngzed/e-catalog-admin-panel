module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/utils.sass"`
      }
    }
  },
  devServer: {
    publicPath:
      process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
    port: "8080"
  }
}
