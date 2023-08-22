# 唯一标识相关

## getUuid

- **说明：**
  - 获取自定义位数的由数字和字符串组成的随机ID，默认32位
- **参数：**
  - `len?: number`：随机ID位数，默认32
  - `options?: object`：自定义属性
  - `options.num?: number | undefined`：分割位数，默认为0
  - `options.letter?: string | undefined`：分割后的链接符，默认为''
- **返回：**
  - `value: string`：生成的uuid字符串
- **示例：**

```js
import {getUuid} from '@ni-web-infra/common-utils';

getUuid(); // => '7809874835217f3ef5e6794bd68729bf'
getUuid(6); // => '9eceb9'

// 增加分割符号
getUuid(32, {num: 8, letter: '-'})
// => '3dd8e6a0-43eeb8ec-0eb78b7e-a54216f0'
```

## getUuid8

- **说明：**
  - 获取8位数的由数字和字符串组成的随机ID
- **参数：**
  - `options?: object`：自定义属性，同[getUuid中的options参数](#getuuid)
- **返回：**
  - `value: string`：生成的uuid字符串
- **示例：**

```js
import {getUuid8} from '@ni-web-infra/common-utils';

getUuid8(); // => '77b650d1'
```

## getUuid16

- **说明：**
  - 获取16位数的由数字和字符串组成的随机ID
- **参数：**
  - `options?: object`：自定义属性，同[getUuid中的options参数](#getuuid)
- **返回：**
  - `value: string`：生成的uuid字符串
- **示例：**

```js
import {getUuid16} from '@ni-web-infra/common-utils';

getUuid16(); // => '581a32df6035e8f5'
```

## getUuidDigit

- **说明：**
  - 获取自定义位数的由数字组成的随机ID，默认4位
- **参数：**
  - `len?: number`：随机ID位数，默认4
  - `options?: object`：自定义属性，同[getUuid中的options参数](#getuuid)
- **返回：**
  - `value: string`：生成的uuid字符串
- **示例：**

```js
import {getUuidDigit} from '@ni-web-infra/common-utils';

getUuidDigit(); // => '7441'
getUuidDigit(6); // => '779278'
```
