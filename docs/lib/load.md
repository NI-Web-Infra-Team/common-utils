# 加载文件相关

## asyncLoadJs() ⇒ `Object`
- **说明：**
  - 异步加载js文件
- **参数：**
  - `String:url`: url
  - `String:crossOrigin`: 跨域源
- **返回：** 
  - `String` -URL

- **示例：**

```js
import { asyncLoadJs } from '@ni-web-infra/common-utils';
asyncLoadJs('xxx.js')
```

## asyncLoadCss() ⇒ `Object`
- **说明：**
  - 异步加载css文件
- **参数：**
  - `String:url`: url
- **返回：** 
  - `String` -URL

- **示例：**

```js
import { asyncLoadJs } from '@ni-web-infra/common-utils';
asyncLoadCss('xxx.css')
```