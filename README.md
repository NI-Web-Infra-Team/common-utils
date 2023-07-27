# @ni-web-infra/common-utils

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-utils.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-utils?ref=badge_shield)
公共工具类库

## 如何使用

```shell
# 使用 npm
$ npm add @ni-web-infra/common-utils
# 使用 yarn
$ yarn add @ni-web-infra/common-utils
# 使用 pnpm
$ pnpm add @ni-web-infra/common-utils
```

```javascript
// 全量引入
import commonUtils from "@ni-web-infra/common-utils";
commonUtils.getBrowserInfo();

// 按需引入
import { getBrowserInfo } from "@ni-web-infra/common-utils";
getBrowserInfo();

import getBrowserInfo from "@ni-web-infra/common-utils/dist/browser";
getBrowserInfo();
```

```html
<script>
  src="https://unpkg.com/@ni-web-infra/common-utils/dist/index.js">
</script>

<script>
  niUtils.getBrowserInfo();
</script>
```

## 文档

[在线文档](<[common-utils.js.org](https://common-utils.js.org/)>)

## 如何开发

请遵循[贡献指南](https://github.com/NI-Web-Infra-Team/common-utils/blob/main/.github/CONTRIBUTING.zh-CN.md)

```shell
# 推荐启动 corepack
$ corepack enable

# 安装依赖
$ pnpm install

# 测试
$ pnpm test:all

# 打包
$ pnpm build
```

在 debug 文件夹下添加调试 html，引入 dist 目录下的 js 文件，即可调试。

> 如果在安装依赖时遇到网络问题，推荐在配置文件中加入 npmmirror 镜像站配置

1. 打开配置文件：

```shell
# 使用 vscode 打开 npm 用户配置文件
code ~/.npmrc
```

2. 加入以下内容：

> 参考 cnpm 配置 - [binary-mirror-config/package.json](https://github.com/cnpm/binary-mirror-config/blob/692b69014a900943166e0a039638729f6ff644d3/package.json#L47)

```env
COREPACK_NPM_REGISTRY=https://registry.npmmirror.com,
NODEJS_ORG_MIRROR=https://cdn.npmmirror.com/binaries/node,
NVM_NODEJS_ORG_MIRROR=https://cdn.npmmirror.com/binaries/node,
PHANTOMJS_CDNURL=https://cdn.npmmirror.com/binaries/phantomjs,
CHROMEDRIVER_CDNURL=https://cdn.npmmirror.com/binaries/chromedriver,
OPERADRIVER_CDNURL=https://cdn.npmmirror.com/binaries/operadriver,
CYPRESS_DOWNLOAD_PATH_TEMPLATE=https://cdn.npmmirror.com/binaries/cypress/${version}/${platform}-${arch}/cypress.zip,
ELECTRON_MIRROR=https://cdn.npmmirror.com/binaries/electron/,
ELECTRON_BUILDER_BINARIES_MIRROR=https://cdn.npmmirror.com/binaries/electron-builder-binaries/,
SASS_BINARY_SITE=https://cdn.npmmirror.com/binaries/node-sass,
SWC_BINARY_SITE=https://cdn.npmmirror.com/binaries/node-swc,
NWJS_URLBASE=https://cdn.npmmirror.com/binaries/nwjs/v,
PUPPETEER_DOWNLOAD_HOST=https://cdn.npmmirror.com/binaries/chrome-for-testing,
PUPPETEER_DOWNLOAD_BASE_URL=https://cdn.npmmirror.com/binaries/chrome-for-testing,
PLAYWRIGHT_DOWNLOAD_HOST=https://cdn.npmmirror.com/binaries/playwright,
SENTRYCLI_CDNURL=https://cdn.npmmirror.com/binaries/sentry-cli,
SAUCECTL_INSTALL_BINARY_MIRROR=https://cdn.npmmirror.com/binaries/saucectl,
RE2_DOWNLOAD_MIRROR=https://cdn.npmmirror.com/binaries/node-re2,
RE2_DOWNLOAD_SKIP_PATH=true,
PRISMA_ENGINES_MIRROR=https://cdn.npmmirror.com/binaries/prisma,
npm_config_better_sqlite3_binary_host=https://cdn.npmmirror.com/binaries/better-sqlite3,
npm_config_keytar_binary_host=https://cdn.npmmirror.com/binaries/keytar
npm_config_sharp_binary_host=https://cdn.npmmirror.com/binaries/sharp,
npm_config_sharp_libvips_binary_host=https://cdn.npmmirror.com/binaries/sharp-libvips,
npm_config_robotjs_binary_host=https://cdn.npmmirror.com/binaries/robotjs
```

## 如何发布

```shell
# 准备好发布内容
$ npm run publishOnly

# 修改版本号
$ npm version patch/minor/major

# 发布
$ npm publish
```

## 注意

如果是 html 文件引用 `index.es.js` 文件或者通过 npm 的方式引用时，vue2.6 相关工程环境中，如果出现下面类似问题 `Module parse failed: Unexpected token` ，解决方式如下

```javascript
// 在vue.config.js文件中 transpileDependencies 参数增加需要显示转换的模块名称

// Babel 显式转译列表
{
  // ...
  transpileDependencies: ["/@ni-web-infra/common-utils/"];
}
```

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-utils.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-utils?ref=badge_large)
