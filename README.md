# @ni-web-infra/common-utils

![Publish Docs Deploy](https://github.com/NI-Web-Infra-Team/common-utils/actions/workflows/publish-docs-deploy.yml/badge.svg) ![Publish to NPM registry](https://github.com/NI-Web-Infra-Team/common-utils/actions/workflows/publish-npm.yml/badge.svg) ![Test Coverage](https://github.com/NI-Web-Infra-Team/common-utils/actions/workflows/test-coverage.yml/badge.svg) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-utils.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-utils?ref=badge_shield) 

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
$ pnpm test-all

# 打包
$ pnpm build
```

在 debug 文件夹下添加调试 html，引入 dist 目录下的 js 文件，即可调试。

### 网络问题

项目中默认配置了 [npmmirror 镜像站](https://npmmirror.com/)，如果遇到网络问题请根据需求修改项目中的 `.npmrc`。

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
