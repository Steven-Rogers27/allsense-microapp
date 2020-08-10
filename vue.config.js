const cdnConfig = require('../cdn.config');
const CDN_VER = cdnConfig.CDN_1905;

module.exports = {
  publicPath: './',
  devServer: {
    port: 8085,
    proxy: {
      '/api/*': {
        target: 'http://test.allsmart.abc',
        // target: 'http://dev.allsmart.abc',
        changeOrigin: true
      },
      '/cdn/*': {
        target: 'http://dev.allsmart.abc',
        changeOrigin: true,
      },
    },
  },
  productionSourceMap: false,
  runtimeCompiler: false,
  configureWebpack: config => {
    const c = Object.create(null);
    if (process.env.NODE_ENV !== 'production') {
      c.devtool = 'inline-source-map';
    }
    c.externals = cdnConfig.LIB_EXTERNALS;
    c.resolve = {
      extensions: [
        '.js', '.ts', '.vue', '.tsx',
      ],
    };
    return c;
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].cdn = CDN_VER;
      args[0].title = '微应用模板';
      return args;
    });
  },
};