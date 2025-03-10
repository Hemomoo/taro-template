/* eslint-disable import/no-commonjs */
/* eslint-disable @typescript-eslint/no-var-requires */
const MiniFixPlugin = require("@antmjs/plugin-mini-fix");
const { UnifiedWebpackPluginV5 } = require("weapp-tailwindcss/webpack");
// const WeappTailwindcssDisabled = ["h5", "rn"].includes(process.env.TARO_ENV);
const GlobalFixPlugin = require('@antmjs/plugin-global-fix')
const path = require("path");

module.exports = function (chain) {
  chain.resolve.alias
    .set('@', path.resolve(__dirname, '../../src'))
    .set('src', path.resolve(__dirname, '../../src'));
  chain.merge({
    plugin: {
      install: {
        plugin: UnifiedWebpackPluginV5,
        args: [{
          appType: "taro",
          // disabled: WeappTailwindcssDisabled
        }],
      },
    },
  });

  // add @antmjs/plugin-mini-fix and @antmjs/mini-fix
  // 解决微信小程序和抖音小程序的path上的params没有自动decode的问题，支付宝和钉钉是有decode过的
  // 这个问题是因为微信抖音和支付宝钉钉原生小程序的返回结果就是不一致的，Taro目前是没有去处理的
  chain.plugin("MiniFixPlugin").use(new MiniFixPlugin());

  //解决支付宝小程序、钉钉小程序、百度小程序没有暴露全局变量global的问题
  chain.plugin('GlobalFixPlugin').use(new GlobalFixPlugin())

  // taro内部的配置：scriptRule.exclude = [filename => /css-loader/.test(filename) || (/node_modules/.test(filename) && !(/taro/.test(filename)))];
  // 下面重写exclude的配置，部分三方包需要babel，包括taro、@antmjs等
  // 根据exclude可以看出，千万不要在项目名称上面带上taro字样，否则所有引用到node_modules的包都会重新被编译一次
  // 以下配置将不再使用usage配置，因为根据小程序官方描述，ios9开始基本都已支持了，浏览器可以使用polyfill.io 国内可以用阿里云版的，index.html有引用

  /*
   * 如果babel.config.js设置useBuiltIns:usage
   * /tarojs[\\/](runtime|shared|plugin-platform|components)/.test(filename) 应该被exculde
   * /tarojs[\\/](runtime|shared|plugin-platform)/.test(filename) 应该单独babel 且设置useBuiltIns:false
   */
  chain.module
    .rule("script")
    .exclude.clear()
    .add(
      (filename) =>
        /css-loader/.test(filename) ||
        (/node_modules/.test(filename) &&
          !/(taro)|(inversify)|(@antmjs)|(react-spring)|(recoil)|(buffer)|(qrcode)/.test(
            filename
          ))
    );
};
