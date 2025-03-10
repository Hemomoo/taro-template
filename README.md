## 本地开发

### 版本要求

node >= 18.17.0

- #### 安装依赖

  ```shell
  pnpm install
  ```
- #### 启动本地开发服务

  ```shell
   pnpm run dev:weapp // 启动微信小程序
   pnpm run dev:h5   // 启动H5
   pnpm run dev:tt   // 启动抖音
   pnpm run dev:alipay //   启动阿里
  ```
- #### 启动开发者工具预览及调试

  ```shell
  微信开发者工具打开 dist/weapp 文件夹并运行
  支付宝宝开发者工具打开 dist/alipay 文件夹并运行
  抖音开发者工具打开 dist/tt 文件夹并运行
  H5  dist/weapp  // 直接网页端口运行
  ```

## 生产打包

- **运行生产打包命令**

  ```shell
  pnpm run build:weapp
  ```

## 发布版本

- **发布预览版本**
- **发布生产版本**

## 所用技术

- [Taro](https://taro-docs.jd.com/docs)
- [React](https://github.com/zenghongtu/react-use-chinese/blob/master/README.md)
- [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [weapp-tailwindcss](https://weapp-tw.icebreaker.top/docs/quick-start/frameworks/taro)
- [lodash](https://www.lodashjs.com/)
- [dayjs](https://day.js.org/zh-CN/)

## 所用组件库

- [@antmjs/vantui](https://antmjs.github.io/vantui/#/home)

## VSCode 配置说明

- 推荐安装

  - `eslint`、`tslint`、`stylelint`、`prettier`
- 推荐使用 VScode->Preferences->setting，设置

  ```js
  {
    'eslint.autoFixOnSave': true,
    'tslint.autoFixOnSave': true,
    'eslint.validate': [
      'javascript',
      'javascriptreact',
      'html',
      {
        language: 'typescript',
        autoFix: true,
      },
      {
        language: 'typescriptreact',
        autoFix: true,
      },
    ],
    'prettier.stylelintIntegration': true,
    '[css]': {
      'editor.formatOnSave': true,
    },
    '[scss]': {
      'editor.formatOnSave': true,
    },
  }
  ```

## 目录结构

```text
├── config
├── README.md
├── package.json
├── src
│   ├── constant
│   ├── components
│   ├── hooks
│   ├── store
│   ├── pages
│   ├── styles
│   ├── types
│   ├── utils
|	      ├── index.ts
|	      └── request.ts
│   ├── app.config.ts
│   ├── app.less
│   ├── app.tsx
│   └── index.html
├── types
│   └── global.d.ts
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .npmrc
├── babel.config.js
├── project.config.json
├── project.private.config.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── pnpm-lock.yaml
```

### 开发注意事项

> 1. 当代码更新后，开发者工具不会相应更新时。考虑：关闭`Taro`的`cache`缓存、关闭开发者工具热重载；
> 2. `@antmjs/vantui`的组件使用`tailwindcss`类名有时不会生效；
> 3. 最新版微信开发者工具的真机调试有问题，`真机调试1.0`无法运行，推荐切换至`真机调试2.0`，或者回退开发者工具版本；
> 4. `Taro`的`dev`和`build`命令切换运行后，需要在微信开发者工具中清除缓存后，重新启动编译；
> 5. 每次发布版本推荐将`js`转为`es5`版本，提高兼容性。

# 感谢

模板来源https://github.com/HyaCiovo/taro-miniapp-template/commit/e872494f4a022f61cf622ac65a2871c4b9f10041

感谢大佬的无私
