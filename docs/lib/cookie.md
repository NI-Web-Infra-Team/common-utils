# 缓存数据相关

::: tip
基于`js-cookie`进行封装，接口参数和`js-cookie`保持一致
:::

## getCookie

- **说明：**
  - 读取cookie值
- **参数：**
  - `name: string`：cookie的key
- **返回：**
  - `value: string | undefined`：对应的cookie值
- **示例：**

```js
import {getCookie} from '@ni-web-infra/common-utils';

getCookie('name'); // => 'value'
getCookie('nothing'); // => undefined
```

## getAllCookies

- **说明：**
  - 读取所有cookie
- **参数：**
  - 无
- **返回：**
  - `value: { [key: string]: string }`： 返回所有的cookie信息对象
- **示例：**

```js
import {getAllCookies} from '@ni-web-infra/common-utils';

getAllCookies(); // => { name: 'value' }
```

## setCookie

- **说明：**
  - 设置cookie值
- **参数：**
  - `name: string`：cookie的key
  - `value: string`：cookie的value
  - `options?: object`：cookie属性
  - `options.expires?: number | Date | undefined`：cookie的过期时间
  - `options.path?: string | undefined`：cookie的可获取路径，默认为'/'
  - `options.domain?: string | undefined`：cookie的可获取domain，默认为cookie创建时对应的域名
  - `options.secure?: boolean | undefined`：cookie传输是否必须为https方式，默认为false
- **返回：**
  - `value: string | undefined`：返回cookie字符串

- **示例：**

```js
import {setCookie} from '@ni-web-infra/common-utils';

setCookie('a', 'abcd');
// => a=abcd; path=/

// 有效期为7天
setCookie('a', 'abcd', {expires: 7});
// => 'a=abcd; path=/; expires=Thu, 30 Mar 2023 01:58:12 GMT'

// 有效期为6小时
setCookie('a', 'abcd', {expires: 6 / 24});
// => 'a=abcd; path=/; expires=Thu, 23 Mar 2023 08:11:02 GMT'

// 使用Date对象方式 有效期为1天
setCookie('a', 'abcd', {expires: new Date(Date.now() + 24 * 60 * 60 * 1000)});
// => 'a=abcd; path=/; expires=Fri, 24 Mar 2023 02:15:33 GMT'

setCookie('a', 'abcd', {expires: 7, path: ''});
// => 'a=abcd; expires=Thu, 30 Mar 2023 01:58:12 GMT'
```

## removeCookie

- **说明：**
  - 删除cookie
- **参数：**
  - `name: string`：需要删除的cookie的key
  - `options?: object`：cookie属性 同[setCookie的options参数](#setcookie)
- **返回：**
  - `void`
- **示例：**

```js
import {removeCookie} from '@ni-web-infra/common-utils';

removeCookie('name');
```
