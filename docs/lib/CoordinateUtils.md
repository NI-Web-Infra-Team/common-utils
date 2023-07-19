## Classes

CoordinateUtils
提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和 WGS84 坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代 1 次，可以达到 0.1 米的精度
Coordinate
Coordinate class
CoordinateUtils
提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和 WGS84 坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代 1 次，可以达到 0.1 米的精度

## Constants

DATE_FORMATTER
日期时间格式模板
asyncLoadJs
异步加载 js 文件
asyncLoadCss
异步加载 css 文件

## Functions

ajax(requestParameters, callback) ⇒ `Cancelable`
请求函数
ajax(requestParameters, callback) ⇒ `Cancelable`
请求函数
requestAnimationFrame(fn) ⇒ `number`
执行帧动画
cancelAnimationFrame(id)
取消帧动画
sleep(ms)
休眠
getBrowserInfo() ⇒ `Object`
获取浏览器信息
getBrowserInfo() ⇒ `Object`
获取浏览器信息
isNotEmpty(value) ⇒ `boolean`
判断值是否为空
humpToLine(str) ⇒ `string`
驼峰转横线
lineToHump(str) ⇒ `string`
横线转驼峰
computedTextWidth(text, font) ⇒ `number`
计算文本宽度
getCookie(name) ⇒ `string` | `undefined`
读取 cookie 值
getAllCookies() ⇒ `object`
读取所有 cookie
setCookie(name, value, options) ⇒ `string` | `undefined`
设置 cookie 值
removeCookie(name, options)
删除 cookie
formatDatetime(v, format) ⇒ `string`
日期时间格式化为字符串
formatTimestamp(v) ⇒ `number`
日期时间格式化为 13 位 timestamp
getDocument() ⇒ `Document`
获取当前 document 对象
createDom(tagName, className, cssText) ⇒ `HTMLElement`
生成 DOM 元素对象
removeDom(el)
删除 DOM 元素对象
addClassName(el, className)
增加 DOM 对象的 class
removeClassName(el, className)
删除 DOM 对象的 class
removeClassNameByClassName(className, doc) ⇒ `HTMLElement` | `null`
根据 class 名称删除多个 DOM 对象的 class
injectStyle(style, doc) ⇒ `HTMLStyleElement`
增加 document 对象的内联样式
filterXSS(str) ⇒ `string`
生成过滤 XSS 的转义字符
getScreenScaleSize(defaultSize, fractionDigits) ⇒ `number`
获取屏幕缩放比例
getJson(json, cb) ⇒ `Object`
获取 json 文件
getJson(json, cb) ⇒ `Object`
获取 json 文件
getUrlParam(key, url) ⇒ `string`
获取 url 请求中的参数值
getUrlParam(targetUrl) ⇒ `string` | `undefined`
获取 url 请求的主机名
isSameDomain(targetUrl, source) ⇒ `boolean`
判断两个 url 顶级域名是否相等
getUuid8(options) ⇒ `string`
获取 8 位由数字和字符串组成的随机 ID
getUuid16(options) ⇒ `string`
获取 16 位由数字和字符串组成的随机 ID
getUuid(len, options) ⇒ `string`
获取自定义位数的由数字和字符串组成的随机 ID，默认 32 位
getUuidDigit(len, options) ⇒ `string`
获取自定义位数的由数字组成的随机 ID，默认 4 位

## CoordinateUtils

提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和 WGS84 坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代 1 次，可以达到 0.1 米的精度

**Kind**: global class

- [CoordinateUtils](#CoordinateUtils)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

## Coordinate

Coordinate class

**Kind**: global class

### new Coordinate(lng, lat)

Coordinate class

| Param | Type     | Description |
| ----- | -------- | ----------- |
| lng   | `number` | longitude   |
| lat   | `number` | latitude    |

**Example**

```javascript
const coordinate = new Coordinate(116.404, 39.915);
```

## CoordinateUtils

提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和 WGS84 坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代 1 次，可以达到 0.1 米的精度

**Kind**: global class

- [CoordinateUtils](#CoordinateUtils)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
  - [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
  - [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
  - [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 百度经纬度  |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```

### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```

### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

简单的 GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)

GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param | Type                        | Description  |
| ----- | --------------------------- | ------------ |
| gcj   | [`Coordinate`](#Coordinate) | GCJ02 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]

| Param      | Type                        | Description  |
| ---------- | --------------------------- | ------------ |
| coordinate | [`Coordinate`](#Coordinate) | WGS84 经纬度 |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```

### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)

百度坐标 BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```

### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)

WGS84 转 百度坐标 BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]

| Param      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| coordinate | [`Coordinate`](#Coordinate) | 经纬度      |

**Example**

```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```

## DATE_FORMATTER

日期时间格式模板

**Kind**: global constant

## asyncLoadJs

异步加载 js 文件

**Kind**: global constant

## asyncLoadCss

异步加载 css 文件

**Kind**: global constant

## ajax(requestParameters, callback) ⇒ `Cancelable`

请求函数

**Kind**: global function  
**Returns**: `Cancelable` -{ cancel: () =&gt; { ... } }

| Param                                   | Type                | Description                                                                                                    |
| --------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| requestParameters                       | `RequestParameters` | 请求参数                                                                                                       |
| requestParameters.url                   | `string`            | 要请求的 URL。                                                                                                 |
| requestParameters.headers               | `Object`            | 要与请求一起发送的标头。                                                                                       |
| requestParameters.method                | `string`            | 请求方法“GET”                                                                                                  | “POST”                                              | “PUT”。 |
| requestParameters.body                  | `string`            | 请求正文。                                                                                                     |
| requestParameters.type                  | `string`            | 要返回的响应主体类型为“string”、“json”、“arrayBuffer”。                                                        |
| requestParameters.credentials           | `string`            | `'same-origin'                                                                                                 | 'include'` 使用”include“发送带有跨源请求的 cookie。 |
| requestParameters.collectResourceTiming | `boolean`           | 如果为 true，将为这些转换后的请求收集 Resource Timing API 信息，并在相关数据事件的 resourceTiming 属性中返回。 |
| requestParameters.referrerPolicy        | `string`            | 表示请求的 referrerPolicy 的字符串。有关更多信息和可能的值，请参阅 Referrer Policy HTTP 头页.                  |
| callback                                | `Callback`          | 回调函数                                                                                                       |

**Example**

```javascript
ajax({ url: "data.json", type: "json", method: "GET" }, (res) => {});
```

## ajax(requestParameters, callback) ⇒ `Cancelable`

请求函数

**Kind**: global function  
**Returns**: `Cancelable` -{ cancel: () =&gt; { ... } }

| Param                                   | Type                | Description                                                                                                    |
| --------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| requestParameters                       | `RequestParameters` | 请求参数                                                                                                       |
| requestParameters.url                   | `string`            | 要请求的 URL。                                                                                                 |
| requestParameters.headers               | `Object`            | 要与请求一起发送的标头。                                                                                       |
| requestParameters.method                | `string`            | 请求方法“GET”                                                                                                  | “POST”                                              | “PUT”。 |
| requestParameters.body                  | `string`            | 请求正文。                                                                                                     |
| requestParameters.type                  | `string`            | 要返回的响应主体类型为“string”、“json”、“arrayBuffer”。                                                        |
| requestParameters.credentials           | `string`            | `'same-origin'                                                                                                 | 'include'` 使用”include“发送带有跨源请求的 cookie。 |
| requestParameters.collectResourceTiming | `boolean`           | 如果为 true，将为这些转换后的请求收集 Resource Timing API 信息，并在相关数据事件的 resourceTiming 属性中返回。 |
| requestParameters.referrerPolicy        | `string`            | 表示请求的 referrerPolicy 的字符串。有关更多信息和可能的值，请参阅 Referrer Policy HTTP 头页.                  |
| callback                                | `Callback`          | 回调函数                                                                                                       |

**Example**

```javascript
ajax({ url: "data.json", type: "json", method: "GET" }, (res) => {});
```

## requestAnimationFrame(fn) ⇒ `number`

执行帧动画

**Kind**: global function  
**Returns**: `number` -动画 id

| Param | Type                   | Description |
| ----- | ---------------------- | ----------- |
| fn    | `FrameRequestCallback` | 动画函数    |

**Example**

```javascript
var progress = 0;
function render() {
  progress += 1; // 修改图像的位置
  if (progress < 100) {
    // 在动画没有结束前，递归渲染
    requestAnimationFrame(render);
  }
}
const handlerId = requestAnimationFrame(render);
console.log("动画id", handlerId);
```

## cancelAnimationFrame(id)

取消帧动画

**Kind**: global function

| Param | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| id    | `number` \| `undefined` \| `null` | 动画 id     |

**Example**

```javascript
const handlerId = requestAnimationFrame(render);
cancelAnimationFrame(handlerId);
```

## sleep(ms)

休眠

**Kind**: global function

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| ms    | `number` | 休眠时间（单位毫秒） |

**Example**

```javascript
sleep(1000);
```

## getBrowserInfo() ⇒ `Object`

获取浏览器信息

**Kind**: global function  
**Returns**: `Object` -{ Actual_Name, Actual_Version }  
**Example**

```javascript
const result = getBrowserInfo();
console.log("浏览器" + navigator.userAgent);
console.log("浏览器" + navigator.Actual_Name, "版本号" + navigator.Actual_Version);
console.log(result.Actual_Name, result.Actual_Version);
```

## getBrowserInfo() ⇒ `Object`

获取浏览器信息

**Kind**: global function  
**Returns**: `Object` -{ Actual_Name, Actual_Version }  
**Example**

```javascript
const result = getBrowserInfo();
console.log("浏览器" + navigator.userAgent);
console.log("浏览器" + navigator.Actual_Name, "版本号" + navigator.Actual_Version);
console.log(result.Actual_Name, result.Actual_Version);
```

## isNotEmpty(value) ⇒ `boolean`

判断值是否为空

**Kind**: global function  
**Returns**: `boolean` -是否为空

| Param | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` | 值          |

**Example**

```javascript
const str = null;
const isNull = isNotEmpty(str);
console.log("是否不为空", isNull);
```

## humpToLine(str) ⇒ `string`

驼峰转横线

**Kind**: global function  
**Returns**: `string` -转换后的字符

| Param | Type     | Description              |
| ----- | -------- | ------------------------ |
| str   | `string` | 字符，默认为&quot;&quot; |

**Example**

```javascript
const str = "helloWorld";
cosnt newStr = humpToLine(str);
console.log('转换后', newStr);
```

## lineToHump(str) ⇒ `string`

横线转驼峰

**Kind**: global function  
**Returns**: `string` -转换后的字符

| Param | Type     | Description              |
| ----- | -------- | ------------------------ |
| str   | `string` | 字符，默认为&quot;&quot; |

**Example**

```javascript
const str = "hello-world";
cosnt newStr = lineToHump(str);
console.log('转换后', newStr);
```

## computedTextWidth(text, font) ⇒ `number`

计算文本宽度

**Kind**: global function  
**Returns**: `number` -
宽度，单位 px

| Param | Type     | Description |
| ----- | -------- | ----------- |
| text  | `string` | 文本        |
| font  | `string` | 字体        |

## getCookie(name) ⇒ `string` \| `undefined`

读取 cookie 值

**Kind**: global function  
**Returns**: `string` \| `undefined` -cookie 值

| Param | Type     | Description |
| ----- | -------- | ----------- |
| name  | `string` | cookie 名称 |

**Example**

```javascript
const cookie = getCookie("user");
console.log("cookie值", cookie);
```

## getAllCookies() ⇒ `object`

读取所有 cookie

**Kind**: global function  
**Returns**: `object` -cookie 信息，例：{userName: 'admin'}  
**Example**

```javascript
const cookie = getAllCookies();
console.log("所有cookie信息", cookie);
```

## setCookie(name, value, options) ⇒ `string` \| `undefined`

设置 cookie 值

**Kind**: global function

| Param   | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| name    | `string`                          | cookie 名称 |
| value   | `string`                          | cookie 值   |
| options | `CookieAttributes` \| `undefined` | cookie 属性 |

**Example**

```javascript
setCookie("userName", "admin");
```

## removeCookie(name, options)

删除 cookie

**Kind**: global function

| Param   | Type               | Description |
| ------- | ------------------ | ----------- |
| name    | `string`           | cookie 名称 |
| options | `CookieAttributes` | cookie 属性 |

**Example**

```javascript
removeCookie("userName");
```

## formatDatetime(v, format) ⇒ `string`

日期时间格式化为字符串

**Kind**: global function  
**Returns**: `string` -日期时间字符串

| Param  | Type               | Description  |
| ------ | ------------------ | ------------ |
| v      | `string` \| `Date` | 日期时间     |
| format | `string`           | 日期时间格式 |

**Example**

```javascript
const date = new Date();
const strDate = formatDatetime(date, "YYYY-MM-DD HH:mm:ss");
console.log("日期时间", strDate);
```

## formatTimestamp(v) ⇒ `number`

日期时间格式化为 13 位 timestamp

**Kind**: global function  
**Returns**: `number` -13 位 timestamp

| Param | Type               | Description |
| ----- | ------------------ | ----------- |
| v     | `string` \| `Date` | 日期时间    |

**Example**

```javascript
const date = new Date();
const numDate = formatTimestamp(date);
console.log("日期时间", numDate);
```

## getDocument() ⇒ `Document`

获取当前 document 对象

**Kind**: global function  
**Returns**: `Document` -DOM 对象

## createDom(tagName, className, cssText) ⇒ `HTMLElement`

生成 DOM 元素对象

**Kind**: global function  
**Returns**: `HTMLElement` -DOM 元素对象

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| tagName   | `string` | 标签名称    |
| className | `string` | class 名称  |
| cssText   | `string` | css 样式    |

## removeDom(el)

删除 DOM 元素对象

**Kind**: global function

| Param | Type      | Description |
| ----- | --------- | ----------- |
| el    | `Element` | 要素        |

## addClassName(el, className)

增加 DOM 对象的 class

**Kind**: global function

| Param     | Type                   | Description |
| --------- | ---------------------- | ----------- |
| el        | `Element`              | 要素        |
| className | `Array.&lt;string&gt;` | class 名称  |

## removeClassName(el, className)

删除 DOM 对象的 class

**Kind**: global function

| Param     | Type                   | Description |
| --------- | ---------------------- | ----------- |
| el        | `Element`              | 要素        |
| className | `Array.&lt;string&gt;` | class 名称  |

## removeClassNameByClassName(className, doc) ⇒ `HTMLElement` \| `null`

根据 class 名称删除多个 DOM 对象的 class

**Kind**: global function  
**Returns**: `HTMLElement` \| `null` -DOM 元素对象

| Param     | Type       | Description |
| --------- | ---------- | ----------- |
| className | `string`   | class 名称  |
| doc       | `Document` | DOM 对象    |

## injectStyle(style, doc) ⇒ `HTMLStyleElement`

增加 document 对象的内联样式

**Kind**: global function  
**Returns**: `HTMLStyleElement` -DOM 对象的内联样式

| Param | Type       | Description |
| ----- | ---------- | ----------- |
| style | `string`   | css 样式    |
| doc   | `Document` | DOM 对象    |

## filterXSS(str) ⇒ `string`

生成过滤 XSS 的转义字符

**Kind**: global function  
**Returns**: `string` -转义后字符

| Param | Type     | Description |
| ----- | -------- | ----------- |
| str   | `string` | 字符        |

## getScreenScaleSize(defaultSize, fractionDigits) ⇒ `number`

获取屏幕缩放比例

**Kind**: global function  
**Returns**: `number` -屏幕缩放比例

| Param          | Type                    | Description |
| -------------- | ----------------------- | ----------- |
| defaultSize    | `number`                | 默认尺寸    |
| fractionDigits | `number` \| `undefined` | 小数位数    |

**Example**

```javascript
const screenScaleSize = getScreenScaleSize(1920, 2);
console.log("屏幕缩放比例", screenScaleSize);
```

## getJson(json, cb) ⇒ `Object`

获取 json 文件

**Kind**: global function  
**Returns**: `Object` -{ cancel: () =&gt; controller.abort() }

| Param | Type       | Description   |
| ----- | ---------- | ------------- |
| json  | `String`   | json 文件地址 |
| cb    | `function` | 回调函数      |

**Example**

```javascript
getJson("data.json", (res) => {
  console.log(res);
});
```

## getJson(json, cb) ⇒ `Object`

获取 json 文件

**Kind**: global function  
**Returns**: `Object` -{ cancel: () =&gt; controller.abort() }

| Param | Type       | Description   |
| ----- | ---------- | ------------- |
| json  | `String`   | json 文件地址 |
| cb    | `function` | 回调函数      |

**Example**

```javascript
getJson("data.json", (res) => {
  console.log(res);
});
```

## getUrlParam(key, url) ⇒ `string`

获取 url 请求中的参数值

**Kind**: global function  
**Returns**: `string` -参数值

| Param | Type     | Description |
| ----- | -------- | ----------- |
| key   | `string` | 参数名称    |
| url   | `string` | 请求 url    |

**Example**

```javascript
const url = "http://localhost:8080/getList?id=12";
const id = getUrlParam("id", url);
console.log("参数值", id);
```

## getUrlParam(targetUrl) ⇒ `string` \| `undefined`

获取 url 请求的主机名

**Kind**: global function  
**Returns**: `string` \| `undefined` -主机名

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| targetUrl | `string` | 请求 url    |

**Example**

```javascript
const url = "http://localhost:8080/getList?id=12";
const host = getHost(url);
console.log("主机名", host);
```

## isSameDomain(targetUrl, source) ⇒ `boolean`

判断两个 url 顶级域名是否相等

**Kind**: global function  
**Returns**: `boolean` -是否相等

| Param     | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| targetUrl | `string` | 请求 url，默认为&quot;&quot; |
| source    | `string` | 请求 url，默认为本机名       |

**Example**

```javascript
const url = "http://localhost:8080/getList?id=12";
const isSome = isSameDomain(url);
console.log("是否相等", isSome);
```

## getUuid8(options) ⇒ `string`

获取 8 位由数字和字符串组成的随机 ID

**Kind**: global function  
**Returns**: `string` -uuid

| Param   | Type  | Description |
| ------- | ----- | ----------- |
| options | `any` | 规则参数    |

## getUuid16(options) ⇒ `string`

获取 16 位由数字和字符串组成的随机 ID

**Kind**: global function  
**Returns**: `string` -uuid

| Param   | Type  | Description |
| ------- | ----- | ----------- |
| options | `any` | 规则参数    |

## getUuid(len, options) ⇒ `string`

获取自定义位数的由数字和字符串组成的随机 ID，默认 32 位

**Kind**: global function  
**Returns**: `string` -uuid

| Param   | Type     | Description |
| ------- | -------- | ----------- |
| len     | `number` | 位数        |
| options | `any`    | 规则参数    |

## getUuidDigit(len, options) ⇒ `string`

获取自定义位数的由数字组成的随机 ID，默认 4 位

**Kind**: global function  
**Returns**: `string` -uuid

| Param   | Type     | Description |
| ------- | -------- | ----------- |
| len     | `number` | 位数        |
| options | `any`    | 规则参数    |
