# DOM操作相关

## getDocument
- **说明：**
  - 获取当前document对象
- **参数：**
  - 无
- **返回：**
  - `value: Document`：当前document对象
- **示例：**
```js
import { getDocument } from '@ni-web-infra/common-utils';

console.log(getDocument()); // => #document
```

## createDom
- **说明：**
  - 生成DOM元素对象
- **参数：**
  - `tagName: string`：DOM元素标签名称，大小写均支持
  - `className?: string`：class名称
  - `cssText?: string`：css样式文本
- **返回：**
  - `value: HTMLElement`：DOM元素对象
- **示例：**
```js
import { createDom } from '@ni-web-infra/common-utils';

console.log(createDom('div','mt')); 
// => <div class="mt" style></div>
console.log(createDom('div','mt','position: absolute; top: 0; left: 0;')) 
// => <div class="mt" style="position: absolute; top: 0px; left: 0px;"></div>
```

## removeDom
- **说明：**
  - 删除DOM元素对象
- **参数：**
  - `el: Element`：要删除的DOM元素对象
- **返回：**
  - `void`
- **示例：**
```js
import { removeDom } from '@ni-web-infra/common-utils';

removeDom(el);
```

## addClassName
- **说明：**
  - 增加DOM对象的class
- **参数：**
  - `el: Element`：DOM元素对象
  - `className: string`：class名称
- **返回：**
  - `void`
- **示例：**
```js
import { addClassName } from '@ni-web-infra/common-utils';

console.log(el);
// => <div class="a" style></div>
addClassName(el, 'b');
console.log(el);
// => <div class="a b" style></div>
```

## removeClassName
- **说明：**
  - 删除DOM对象的class
- **参数：**
  - `el: Element`：DOM元素对象
  - `className: string`：class名称
- **返回：**
  - `void`
- **示例：**
```js
import { removeClassName } from '@ni-web-infra/common-utils';

console.log(el);
// => <div class="a b" style></div>
removeClassName(el, 'b');
console.log(el);
// => <div class="a" style></div>
```

## removeClassNameByClassName
- **说明：**
  - 根据class名称删除多个DOM对象的class
- **参数：**
  - `className: string`：class名称
  - `doc?: Document`：默认为当前document对象
- **返回：**
  - `className: HTMLElement | null`：document文档中所有删除className后的DOM对象
- **示例：**
```js
import { removeClassNameByClassName } from '@ni-web-infra/common-utils';

console.log(document.body);
// => <body><div class="a b" style></div></body>
removeClassNameByClassName('b');
console.log(document.body);
// => <body><div class="a" style></div></body>
```

## injectStyle
- **说明：**
  - 增加document对象的内联样式
- **参数：**
  - `style: string`：内联样式
  - `doc?: Document`：默认为当前document对象
- **返回：**
  - `value: HTMLStyleElement`：增加的style元素
- **示例：**
```js
import { injectStyle } from '@ni-web-infra/common-utils';

const el = injectStyle(`#map {width:100%; height:100%;}`);
console.log(el);
// => <style>#map{width:100%; height:100%;}</style>
```

## filterXSS
- **说明：**
  - 过滤XSS字符
- **参数：**
  - `str: string`：需要过滤XSS的字符串
- **返回：**
  - `value: string`：过滤XSS后的转义字符串
- **示例：**
```js
import { filterXSS } from '@ni-web-infra/common-utils';

console.log(filterXSS('<div></div>'));
// => '&lt;div&gt;&lt;/div&gt;'

console.log(filterXSS(`'div'"span"`));
// => '&apos;div&apos;&quot;span&quot;'
```
