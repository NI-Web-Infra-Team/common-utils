# URL解析相关

## getUrlParam

- **说明：**
  - 获取url请求中的参数值
- **参数：**
  - `key: string`：url请求中的参数key
  - `url?: string`：url请求，默认为location.href
- **返回：**
  - `value: string`：具体的参数值
- **示例：**

```js
import {getUrlParam} from '@ni-web-infra/common-utils';

getUrlParam('a', 'http://xxx.com?a=b'); // => 'b'
getUrlParam('a', 'http://xxx.com?a='); // => ''
getUrlParam('a', 'http://xxx.com'); // => ''
```

## getHost

- **说明：**
  - 获取url请求的主机名
- **参数：**
  - `targetUrl: string`：目标url
- **返回：**
  - `string | undefined`
- **示例：**

```js
import {getHost} from '@ni-web-infra/common-utils';

getHost('https://xx.com/index.html'); // => 'xx.com'
```

## isSameDomain

- **说明：**
  - 判断两个url顶级域名是否相等
- **参数：**
  - `targetUrl: string`：目标url
  - `source: string`：来源url，默认为location.host
- **返回：**
  - `value: boolean`：如果两个url顶级域名相等返回true，否则返回false

- **示例：**

```js
import {isSameDomain} from '@ni-web-infra/common-utils';

isSameDomain('https://xxx.com/index.html', 'xxx.com'); // => true
isSameDomain('https://xxx.com/index.html', 'a.xxx.com'); // => false
isSameDomain('https://a.xxx.com/index.html', 'b.xxx.com'); // => false

// targetUrl如果不是以http或https开头，则返回true
isSameDomain('ftp://b.xxx.com/index.html', 'a.xxx.com'); // => true
```
