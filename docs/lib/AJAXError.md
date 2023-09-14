# ajax请求错误信息相关

## AJAXError
- **说明：**
  - 错误信息
- **参数：**
  - `string: message`：提示文字  
  - `number: status`：状态码 
  - `string: url`：请求的URL
- **返回：** 
  - `String` -`${this.name}: ${this.message} (${this.status}): ${this.url}`; 

- **示例：**

```js
import AJAXError from '@ni-web-infra/common-utils';

new AJAXError(xhr.statusText, xhr.status, requestParameters.url)
```