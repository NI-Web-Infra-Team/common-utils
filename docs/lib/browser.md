# 浏览器信息相关

## getBrowserInfo() ⇒ `Object`
- **说明：**
  - 获取浏览器信息
- **返回：** 
  - `Object` -{ Actual_Name, Actual_Version } ：浏览器名称、版本号 

- **示例：**

```js
import { getBrowserInfo } from '@ni-web-infra/common-utils';

const result = getBrowserInfo()
console.log('浏览器' + navigator.userAgent)
console.log('浏览器' + navigator.Actual_Name, '版本号' + navigator.Actual_Version)
console.log(result.Actual_Name, result.Actual_Version)
```
