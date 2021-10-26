module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/scanner-web/'
  //   : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/core/variables.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeDimensions: true }, { removeViewBox: false }],
        },
      });
  },
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
