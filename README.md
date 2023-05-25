# @ni-web-infra/common-util
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-util.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-util?ref=badge_shield)


公共工具类库

## 如何使用

```shell
$ yarn install @ni-web-infra/common-util
```

```js
// 全量引入
import commonUtils from "@ni-web-infra/common-util";
commonUtils.getBrowserInfo();

// 按需引入
import { getBrowserInfo } from "@ni-web-infra/common-util";
getBrowserInfo();

import getBrowserInfo from "@ni-web-infra/common-util/dist/browser";
getBrowserInfo();
```

```html
<script>
  src="https://unpkg.com/@ni-web-infra/common-util/dist/index.js">
</script>

<script>
  commonUtils.getBrowserInfo();
</script>
```

## API

[API 文档](https://unpkg.com/@ni-web-infra/common-util/docs/index.html)

## 如何开发

请遵循[贡献指南](https://github.com/NI-Web-Infra-Team/common-util/blob/main/.github/CONTRIBUTING.zh-CN.md)

```shell
# 安装依赖
$ npm install

# 打包依赖
$ npm run build
```

在 debug 文件夹下添加调试 html，引入 dist 目录下的 js 文件，即可调试。

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

```js
// 在vue.config.js文件中 transpileDependencies 参数增加需要显示转换的模块名称

// Babel 显式转译列表
transpileDependencies: ['/@ni-web-infra/common-util/'],
```

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-util.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FNI-Web-Infra-Team%2Fcommon-util?ref=badge_large)