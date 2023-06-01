## Classes


Coordinate
Coordinate class
CoordinateUtils
提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代1次，可以达到 0.1  米的精度


## Constants


DATE_FORMATTER
日期时间格式模板
asyncLoadJs
异步加载js文件
asyncLoadCss
异步加载css文件


## Functions


getJson(json, cb) ⇒ `Object`
获取json文件
getJson(json, cb) ⇒ `Object`
获取json文件
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
读取cookie值
getAllCookies() ⇒ `object`
读取所有cookie
setCookie(name, value, options) ⇒ `string` | `undefined`
设置cookie值
removeCookie(name, options)
删除cookie
formatDatetime(v, format) ⇒ `string`
日期时间格式化为字符串
formatTimestamp(v) ⇒ `number`
日期时间格式化为13位timestamp
getDocument() ⇒ `Document`
获取当前document对象
createDom(tagName, className, cssText) ⇒ `HTMLElement`
生成DOM元素对象
removeDom(el)
删除DOM元素对象
addClassName(el, className)
增加DOM对象的class
removeClassName(el, className)
删除DOM对象的class
removeClassNameByClassName(className, doc) ⇒ `HTMLElement` | `null`
根据class名称删除多个DOM对象的class
injectStyle(style, doc) ⇒ `HTMLStyleElement`
增加document对象的内联样式
filterXSS(str) ⇒ `string`
生成过滤XSS的转义字符
getScreenScaleSize(defaultSize, fractionDigits) ⇒ `number`
获取屏幕缩放比例
getJson(json, cb) ⇒ `Object`
获取json文件
getJson(json, cb) ⇒ `Object`
获取json文件
getUrlParam(key, url) ⇒ `string`
获取url请求中的参数值
getUrlParam(targetUrl) ⇒ `string` | `undefined`
获取url请求的主机名
isSameDomain(targetUrl, source) ⇒ `boolean`
判断两个url顶级域名是否相等
getUuid8(options) ⇒ `string`
获取8位由数字和字符串组成的随机ID
getUuid16(options) ⇒ `string`
获取16位由数字和字符串组成的随机ID
getUuid(len, options) ⇒ `string`
获取自定义位数的由数字和字符串组成的随机ID，默认32位
getUuidDigit(len, options) ⇒ `string`
获取自定义位数的由数字组成的随机ID，默认4位




## Coordinate
Coordinate class

**Kind**: global class  


### new Coordinate(lng, lat)
Coordinate class


| Param | Type | Description |
| --- | --- | --- |
| lng | `number` |longitude |
| lat | `number` |latitude |

**Example**  
```javascript
const coordinate = new Coordinate(116.404, 39.915);
```


## CoordinateUtils
提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代1次，可以达到 0.1  米的精度

**Kind**: global class  

* [CoordinateUtils](#CoordinateUtils)
    * [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
    * [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
    * [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
    * [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
    * [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
    * [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
    * [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)
    * [.transformBD09ToGCJ02(coordinate)](#CoordinateUtils.transformBD09ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
    * [.transformGCJ02ToBD09(coordinate)](#CoordinateUtils.transformGCJ02ToBD09) ⇒ [`Coordinate`](#Coordinate)
    * [.simpleTransformGCJ02ToWGS84(coordinate)](#CoordinateUtils.simpleTransformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
    * [.transformGCJ02ToWGS84(gcj)](#CoordinateUtils.transformGCJ02ToWGS84) ⇒ [`Coordinate`](#Coordinate)
    * [.transformWGS84ToGCJ02(coordinate)](#CoordinateUtils.transformWGS84ToGCJ02) ⇒ [`Coordinate`](#Coordinate)
    * [.transformBD09ToWGS84(coordinate)](#CoordinateUtils.transformBD09ToWGS84) ⇒ [`Coordinate`](#Coordinate)
    * [.transformWGS84ToBD09(coordinate)](#CoordinateUtils.transformWGS84ToBD09) ⇒ [`Coordinate`](#Coordinate)



### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)
百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |百度经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```


### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)
GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |GCJ02 经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```


### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)
简单的GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |GCJ02经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```


### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)
GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| gcj | [`Coordinate`](#Coordinate) |GCJ02经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```


### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)
WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |WGS84经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```


### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)
百度坐标BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```


### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)
WGS84 转 百度坐标BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```


### CoordinateUtils.transformBD09ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)
百度坐标（BD09）转 火星坐标（GCJ02）

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |百度经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
```


### CoordinateUtils.transformGCJ02ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)
GCJ02 转百度坐标

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -百度坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |GCJ02 经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
```


### CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)
简单的GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |GCJ02经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
```


### CoordinateUtils.transformGCJ02ToWGS84(gcj) ⇒ [`Coordinate`](#Coordinate)
GCJ02 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| gcj | [`Coordinate`](#Coordinate) |GCJ02经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
```


### CoordinateUtils.transformWGS84ToGCJ02(coordinate) ⇒ [`Coordinate`](#Coordinate)
WGS84 坐标 转 GCJ02

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -GCJ02 坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |WGS84经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
```


### CoordinateUtils.transformBD09ToWGS84(coordinate) ⇒ [`Coordinate`](#Coordinate)
百度坐标BD09 转 WGS84

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -WGS84 坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
```


### CoordinateUtils.transformWGS84ToBD09(coordinate) ⇒ [`Coordinate`](#Coordinate)
WGS84 转 百度坐标BD09

**Kind**: static method of [`CoordinateUtils`](#CoordinateUtils)  
**Returns**: [`Coordinate`](#Coordinate) -BD09 坐标：[经度，纬度]  

| Param | Type | Description |
| --- | --- | --- |
| coordinate | [`Coordinate`](#Coordinate) |经纬度 |

**Example**  
```javascript
cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
```


## DATE\_FORMATTER
日期时间格式模板

**Kind**: global constant  


## asyncLoadJs
异步加载js文件

**Kind**: global constant  


## asyncLoadCss
异步加载css文件

**Kind**: global constant  


## getJson(json, cb) ⇒ `Object`
获取json文件

**Kind**: global function  
**Returns**: `Object` -{ cancel: () =&gt; controller.abort() }  

| Param | Type | Description |
| --- | --- | --- |
| json | `String` |json文件地址 |
| cb | `function` |回调函数 |

**Example**  
```javascript
getJson('data.json',(res) => {
   console.log(res)
})
```


## getJson(json, cb) ⇒ `Object`
获取json文件

**Kind**: global function  
**Returns**: `Object` -{ cancel: () =&gt; controller.abort() }  

| Param | Type | Description |
| --- | --- | --- |
| json | `String` |json文件地址 |
| cb | `function` |回调函数 |

**Example**  
```javascript
getJson('data.json',(res) => {
   console.log(res)
})
```


## ajax(requestParameters, callback) ⇒ `Cancelable`
请求函数

**Kind**: global function  
**Returns**: `Cancelable` -{ cancel: () =&gt; { ... } }  

| Param | Type | Description |
| --- | --- | --- |
| requestParameters | `RequestParameters` |请求参数 |
| requestParameters.url | `string` |要请求的URL。 |
| requestParameters.headers | `Object` |要与请求一起发送的标头。 |
| requestParameters.method | `string` |请求方法“GET”|“POST”|“PUT”。 |
| requestParameters.body | `string` |请求正文。 |
| requestParameters.type | `string` |要返回的响应主体类型为“string”、“json”、“arrayBuffer”。 |
| requestParameters.credentials | `string` |`'same-origin'|'include'` 使用”include“发送带有跨源请求的 cookie。 |
| requestParameters.collectResourceTiming | `boolean` |如果为true，将为这些转换后的请求收集 Resource Timing API 信息，并在相关数据事件的resourceTiming属性中返回。 |
| requestParameters.referrerPolicy | `string` |表示请求的referrerPolicy的字符串。有关更多信息和可能的值，请参阅Referrer Policy HTTP头页. |
| callback | `Callback` |回调函数 |

**Example**  
```javascript
ajax({url: 'data.json', type: "json", method: "GET"}, (res) => {})
```


## ajax(requestParameters, callback) ⇒ `Cancelable`
请求函数

**Kind**: global function  
**Returns**: `Cancelable` -{ cancel: () =&gt; { ... } }  

| Param | Type | Description |
| --- | --- | --- |
| requestParameters | `RequestParameters` |请求参数 |
| requestParameters.url | `string` |要请求的URL。 |
| requestParameters.headers | `Object` |要与请求一起发送的标头。 |
| requestParameters.method | `string` |请求方法“GET”|“POST”|“PUT”。 |
| requestParameters.body | `string` |请求正文。 |
| requestParameters.type | `string` |要返回的响应主体类型为“string”、“json”、“arrayBuffer”。 |
| requestParameters.credentials | `string` |`'same-origin'|'include'` 使用”include“发送带有跨源请求的 cookie。 |
| requestParameters.collectResourceTiming | `boolean` |如果为true，将为这些转换后的请求收集 Resource Timing API 信息，并在相关数据事件的resourceTiming属性中返回。 |
| requestParameters.referrerPolicy | `string` |表示请求的referrerPolicy的字符串。有关更多信息和可能的值，请参阅Referrer Policy HTTP头页. |
| callback | `Callback` |回调函数 |

**Example**  
```javascript
ajax({url: 'data.json', type: "json", method: "GET"}, (res) => {})
```


## requestAnimationFrame(fn) ⇒ `number`
执行帧动画

**Kind**: global function  
**Returns**: `number` -动画id  

| Param | Type | Description |
| --- | --- | --- |
| fn | `FrameRequestCallback` |动画函数 |

**Example**  
```javascript
var progress = 0;
function render() {
     progress += 1; // 修改图像的位置
     if (progress < 100) {  // 在动画没有结束前，递归渲染
         requestAnimationFrame(render);
     }
}
const handlerId = requestAnimationFrame(render);
console.log('动画id', handlerId);
```


## cancelAnimationFrame(id)
取消帧动画

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | `number` \| `undefined` \| `null` |动画id |

**Example**  
```javascript
const handlerId = requestAnimationFrame(render);
cancelAnimationFrame(handlerId);
```


## sleep(ms)
休眠

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ms | `number` |休眠时间（单位毫秒） |

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
const result = getBrowserInfo()
console.log('浏览器' + navigator.userAgent)
console.log('浏览器' + navigator.Actual_Name, '版本号' + navigator.Actual_Version)
console.log(result.Actual_Name, result.Actual_Version)
```


## getBrowserInfo() ⇒ `Object`
获取浏览器信息

**Kind**: global function  
**Returns**: `Object` -{ Actual_Name, Actual_Version }  
**Example**  
```javascript
const result = getBrowserInfo()
console.log('浏览器' + navigator.userAgent)
console.log('浏览器' + navigator.Actual_Name, '版本号' + navigator.Actual_Version)
console.log(result.Actual_Name, result.Actual_Version)
```


## isNotEmpty(value) ⇒ `boolean`
判断值是否为空

**Kind**: global function  
**Returns**: `boolean` -是否为空  

| Param | Type | Description |
| --- | --- | --- |
| value | `any` |值 |

**Example**  
```javascript
const str = null;
const isNull = isNotEmpty(str);
console.log('是否不为空', isNull);
```


## humpToLine(str) ⇒ `string`
驼峰转横线

**Kind**: global function  
**Returns**: `string` -转换后的字符  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` |字符，默认为&quot;&quot; |

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

| Param | Type | Description |
| --- | --- | --- |
| str | `string` |字符，默认为&quot;&quot; |

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
  

| Param | Type | Description |
| --- | --- | --- |
| text | `string` |文本 |
| font | `string` |字体 |



## getCookie(name) ⇒ `string` \| `undefined`
读取cookie值

**Kind**: global function  
**Returns**: `string` \| `undefined` -cookie值  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` |cookie名称 |

**Example**  
```javascript
const cookie = getCookie('user');
console.log('cookie值', cookie);
```


## getAllCookies() ⇒ `object`
读取所有cookie

**Kind**: global function  
**Returns**: `object` -cookie信息，例：{userName: 'admin'}  
**Example**  
```javascript
const cookie = getAllCookies();
console.log('所有cookie信息', cookie);
```


## setCookie(name, value, options) ⇒ `string` \| `undefined`
设置cookie值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` |cookie名称 |
| value | `string` |cookie值 |
| options | `CookieAttributes` \| `undefined` |cookie属性 |

**Example**  
```javascript
setCookie('userName', 'admin');
```


## removeCookie(name, options)
删除cookie

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` |cookie名称 |
| options | `CookieAttributes` |cookie属性 |

**Example**  
```javascript
removeCookie('userName');
```


## formatDatetime(v, format) ⇒ `string`
日期时间格式化为字符串

**Kind**: global function  
**Returns**: `string` -日期时间字符串  

| Param | Type | Description |
| --- | --- | --- |
| v | `string` \| `Date` |日期时间 |
| format | `string` |日期时间格式 |

**Example**  
```javascript
const date = new Date();
const strDate = formatDatetime(date, 'YYYY-MM-DD HH:mm:ss');
console.log('日期时间', strDate);
```


## formatTimestamp(v) ⇒ `number`
日期时间格式化为13位timestamp

**Kind**: global function  
**Returns**: `number` -13位timestamp  

| Param | Type | Description |
| --- | --- | --- |
| v | `string` \| `Date` |日期时间 |

**Example**  
```javascript
const date = new Date();
const numDate = formatTimestamp(date);
console.log('日期时间', numDate);
```


## getDocument() ⇒ `Document`
获取当前document对象

**Kind**: global function  
**Returns**: `Document` -DOM对象  


## createDom(tagName, className, cssText) ⇒ `HTMLElement`
生成DOM元素对象

**Kind**: global function  
**Returns**: `HTMLElement` -DOM元素对象  

| Param | Type | Description |
| --- | --- | --- |
| tagName | `string` |标签名称 |
| className | `string` |class名称 |
| cssText | `string` |css样式 |



## removeDom(el)
删除DOM元素对象

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | `Element` |要素 |



## addClassName(el, className)
增加DOM对象的class

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | `Element` |要素 |
| className | `Array.&lt;string&gt;` |class名称 |



## removeClassName(el, className)
删除DOM对象的class

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | `Element` |要素 |
| className | `Array.&lt;string&gt;` |class名称 |



## removeClassNameByClassName(className, doc) ⇒ `HTMLElement` \| `null`
根据class名称删除多个DOM对象的class

**Kind**: global function  
**Returns**: `HTMLElement` \| `null` -DOM元素对象  

| Param | Type | Description |
| --- | --- | --- |
| className | `string` |class名称 |
| doc | `Document` |DOM对象 |



## injectStyle(style, doc) ⇒ `HTMLStyleElement`
增加document对象的内联样式

**Kind**: global function  
**Returns**: `HTMLStyleElement` -DOM对象的内联样式  

| Param | Type | Description |
| --- | --- | --- |
| style | `string` |css样式 |
| doc | `Document` |DOM对象 |



## filterXSS(str) ⇒ `string`
生成过滤XSS的转义字符

**Kind**: global function  
**Returns**: `string` -转义后字符  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` |字符 |



## getScreenScaleSize(defaultSize, fractionDigits) ⇒ `number`
获取屏幕缩放比例

**Kind**: global function  
**Returns**: `number` -屏幕缩放比例  

| Param | Type | Description |
| --- | --- | --- |
| defaultSize | `number` |默认尺寸 |
| fractionDigits | `number` \| `undefined` |小数位数 |

**Example**  
```javascript
const screenScaleSize = getScreenScaleSize(1920, 2);
console.log('屏幕缩放比例', screenScaleSize);
```


## getJson(json, cb) ⇒ `Object`
获取json文件

**Kind**: global function  
**Returns**: `Object` -{ cancel: () =&gt; controller.abort() }  

| Param | Type | Description |
| --- | --- | --- |
| json | `String` |json文件地址 |
| cb | `function` |回调函数 |

**Example**  
```javascript
getJson('data.json',(res) => {
   console.log(res)
})
```


## getJson(json, cb) ⇒ `Object`
获取json文件

**Kind**: global function  
**Returns**: `Object` -{ cancel: () =&gt; controller.abort() }  

| Param | Type | Description |
| --- | --- | --- |
| json | `String` |json文件地址 |
| cb | `function` |回调函数 |

**Example**  
```javascript
getJson('data.json',(res) => {
   console.log(res)
})
```


## getUrlParam(key, url) ⇒ `string`
获取url请求中的参数值

**Kind**: global function  
**Returns**: `string` -参数值  

| Param | Type | Description |
| --- | --- | --- |
| key | `string` |参数名称 |
| url | `string` |请求url |

**Example**  
```javascript
const url = 'http://localhost:8080/getList?id=12';
const id = getUrlParam('id', url);
console.log('参数值', id);
```


## getUrlParam(targetUrl) ⇒ `string` \| `undefined`
获取url请求的主机名

**Kind**: global function  
**Returns**: `string` \| `undefined` -主机名  

| Param | Type | Description |
| --- | --- | --- |
| targetUrl | `string` |请求url |

**Example**  
```javascript
const url = 'http://localhost:8080/getList?id=12';
const host = getHost(url);
console.log('主机名', host);
```


## isSameDomain(targetUrl, source) ⇒ `boolean`
判断两个url顶级域名是否相等

**Kind**: global function  
**Returns**: `boolean` -是否相等  

| Param | Type | Description |
| --- | --- | --- |
| targetUrl | `string` |请求url，默认为&quot;&quot; |
| source | `string` |请求url，默认为本机名 |

**Example**  
```javascript
const url = 'http://localhost:8080/getList?id=12';
const isSome = isSameDomain(url);
console.log('是否相等', isSome);
```


## getUuid8(options) ⇒ `string`
获取8位由数字和字符串组成的随机ID

**Kind**: global function  
**Returns**: `string` -uuid  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |规则参数 |



## getUuid16(options) ⇒ `string`
获取16位由数字和字符串组成的随机ID

**Kind**: global function  
**Returns**: `string` -uuid  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |规则参数 |



## getUuid(len, options) ⇒ `string`
获取自定义位数的由数字和字符串组成的随机ID，默认32位

**Kind**: global function  
**Returns**: `string` -uuid  

| Param | Type | Description |
| --- | --- | --- |
| len | `number` |位数 |
| options | `any` |规则参数 |



## getUuidDigit(len, options) ⇒ `string`
获取自定义位数的由数字组成的随机ID，默认4位

**Kind**: global function  
**Returns**: `string` -uuid  

| Param | Type | Description |
| --- | --- | --- |
| len | `number` |位数 |
| options | `any` |规则参数 |

