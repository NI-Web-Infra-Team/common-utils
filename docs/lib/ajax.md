# ajax请求相关

## ajax() ⇒ `Object`
- **说明：**
  - 请求函数
  - **参数：**
  - `{Object} requestParameters`: 请求参数
  - `{string} requestParameters.url`: 要请求的URL。
  - `{Object} requestParameters.headers`: 要与请求一起发送的标头。
  - `{string} requestParameters.method`: 请求方法“GET”|“POST”|“PUT”。
  - `{string} requestParameters.body`: 请求正文。
  - `{string} requestParameters.type`: 要返回的响应主体类型为“string”、“json”、“arrayBuffer”。
  - `{string} requestParameters.credentials`: `'same-origin'|'include'` 使用”include“发送带有跨源请求的 cookie。
  - `{boolean} requestParameters.collectResourceTiming`: 如果为true，将为这些转换后的请求收集 Resource Timing API 信息，并在相关数据事件的resourceTiming属性中返回
  - `{string} requestParameters.referrerPolicy`: 表示请求的referrerPolicy的字符串。有关更多信息和可能的值，请参阅[Referrer Policy HTTP头页](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).
  - `{Object} Callback`: 回调函数
  - `{Cancelable} Cancelable`: `{ cancel: () => { ... } }`
- **返回：** 
  - `Object` 

- **示例：**

```js
import AJAXError from "./AJAXError";
import { ajax } from '@ni-web-infra/common-utils';

ajax({url: 'data.json', type: "json", method: "GET"}, (res) => {})

```