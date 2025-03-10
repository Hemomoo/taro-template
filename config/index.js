/* eslint-disable import/no-commonjs */
/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';

const pkg = require("../package.json");
const miniChain = require("./webpack/mini-chain");

process.env.TARO_ENV = process.env.TARO_ENV ?? "weapp";
process.env.NODE_ENV = process.env.NODE_ENV ?? "production";

const config = {
  projectName: pkg.name,
  date: "2024-11-11",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    375: 2,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  compiler: 'webpack5',
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  defineConstants: {},
  // 将本地文件copy到输出目录下，不进行编译和打包
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: "webpack5",
  hmr: true,
  cache: {
    enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain(chain) {
      miniChain(chain);
    },
    lessLoaderOption: {
      lessOptions: {
        modifyVars: {
          hack: `true; @import "${path.join(
            process.cwd(),
            "src/styles/index.less"
          )}";`,
        },
      },
      // 适用于全局引入样式
      additionalData: "@import '/src/styles/index.less';",
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限， 图片转 base64
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
    optimizeMainPackage: {
      enable: true,
    },
  },
  h5:{
    esnextModules: [/@antmjs[\/]vantui/],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  plugins: [["@tarojs/plugin-framework-react", { reactMode: "concurrent" }]],
};

module.exports = function (merge) {
  return merge({}, config, require(`./${process.env.NODE_ENV}`));
};
