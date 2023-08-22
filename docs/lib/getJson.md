# Json文件相关

## getJson() ⇒ `Object`
- **说明：**
  - 获取json文件
- **参数：**
  - `String:json`: json文件地址
  - `Function:cb`: 回调函数
- **返回：** 
  - `Object` -`{ cancel: () => controller.abort() } `

- **示例：**

```js
import { getJson } from '@ni-web-infra/common-utils';
getJson('data.json',(res) => {
    console.log(res)
})
```