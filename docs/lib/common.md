# 常见实用方法

::: tip
引入`lodash-es`，并export其中的所有接口
:::

## clone
- **说明：**
  - 创建一个 `value` 的浅拷贝
- **参数：**
  - `value: any`：要拷贝的值
- **返回：**
  - `value: any`：拷贝后的值
- **示例：**
```js
import { clone } from '@ni-web-infra/common-utils';

const objects = [{ 'a': 1 }, { 'b': 2 }];
const shallow = clone(objects);

console.log(shallow[0] === objects[0]); // => true
```

## cloneDeep
- **说明：**
  - 创建一个 `value` 的深拷贝
- **参数：**
  - `value: any`：要拷贝的值
- **返回：**
  - `value: any`：拷贝后的值
- **示例：**
```js
import { cloneDeep } from '@ni-web-infra/common-utils';

const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);

console.log(deep[0] === objects[0]); // => false
```

## debounce
- **说明：**
  - 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
  - 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用
  - 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发
  - func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果
    ::: warning
    - 如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用防抖方法
    - 如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，类似setTimeout为0的超时
      :::
- **参数：**
  - `func: Function`：要防抖动的函数
  - `wait: number = 0`：需要节流的毫秒
  - `options?: Object`：选项对象
  - `options.leading?: boolean`：默认为false，指定在延迟开始前调用
  - `options.trailing?: boolean`：默认为true，指定在延迟结束后调用
  - `options.maxWait?: number`：设置 func 允许被延迟的最大值
- **返回：**
  - `value: Function`：返回新的 debounced（防抖动）函数
- **示例：**
```js
import { debounce } from '@ni-web-infra/common-utils';

// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', debounce(calculateLayout, 150));

// 当点击时 `sendMail` 随后就被调用。
jQuery(element).on('click', debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// 确保 `batchLog` 调用1次之后，1秒内会被触发。
const debounced = debounce(batchLog, 250, { 'maxWait': 1000 });
const source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// 取消一个 trailing 的防抖动调用
jQuery(window).on('popstate', debounced.cancel);
```

## throttle
- **说明：**
  - 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数
  - 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用
  - 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发
  - func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果
    ::: warning
    - 如果 leading 和 trailing 都设定为 true 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用
    - 如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，类似setTimeout为0的超时
      :::
- **参数：**
  - `func: Function`：要节流的函数
  - `wait: number = 0`：需要节流的毫秒
  - `options?: Object`：选项对象
  - `options.leading?: boolean`：默认为true，指定调用在节流开始前
  - `options.trailing?: boolean`：默认为true，指定调用在节流结束后
- **返回：**
  - `value: Function`：返回节流的函数
- **示例：**
```js
import { throttle } from '@ni-web-infra/common-utils';

// 避免在滚动时过分的更新定位
jQuery(window).on('scroll', throttle(updatePosition, 100));

// 点击后就调用 `renewToken`，但5分钟内超过1次。
const throttled = throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

// 取消一个 trailing 的节流调用。
jQuery(window).on('popstate', throttled.cancel);
```

## isArguments
- **说明：**
  - 检查 `value` 是否是一个类 `arguments` 对象
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个arguments对象返回true，否则返回false

- **示例：**

```js
import { isArguments } from '@ni-web-infra/common-utils';

isArguments(function() { return arguments; }()); // => true
isArguments([1, 2, 3]); // => false
```

## isArray
- **说明：**
  - 检查 `value` 是否是 `Array` 类对象
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个数组返回true，否则返回false

- **示例：**

```js
import { isArray } from '@ni-web-infra/common-utils';

isArray([1, 2, 3]); // => true
isArray(document.body.children); // => false
isArray(document.body.children); // => false
isArray('abc'); // => false
```

## isBoolean
- **说明：**
  - 检查 `value` 是否是原始 boolean 类型或者对象
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个布尔值返回true，否则返回false

- **示例：**

```js
import { isBoolean } from '@ni-web-infra/common-utils';

isBoolean(false); // => true
isBoolean(null); // => false
```

## isElement
- **说明：**
  - 检查 `value` 是否是DOM元素
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个DOM元素返回true，否则返回false

- **示例：**

```js
import { isElement } from '@ni-web-infra/common-utils';

isElement(document.body); // => true
isElement('<body>'); // => false
```

## isEmpty
- **说明：**
  - 检查 `value` 是否是是否为一个空对象、集合、映射或者set
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value为空返回true，否则返回false

- **示例：**

```js
import { isEmpty } from '@ni-web-infra/common-utils';

isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(undefined); // => true
isEmpty(0); // => true
isEmpty(1); // => true
isEmpty(''); // => true
isEmpty('a'); // => false
isEmpty([]); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({}); // => true
isEmpty({ 'a': 1 }); // => false
```

## isEqual
- **说明：**
  - 执行深比较来确定两者的值是否相等;
    ::: warning
    - 这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays
    - Object 对象值比较自身的属性，不包括继承的和可枚举的属性
    - 不支持函数和DOM节点比较
    :::
- **参数：**
  - `value: any`：用来比较的值
  - `other: any`：另一个用来比较的值
- **返回：**
  - `value: boolean`：如果两个值完全相同返回true，否则返回false
- **示例：**

```js
import { isEqual } from '@ni-web-infra/common-utils';

const object = { 'a': 1 };
const other = { 'a': 1 };

isEqual(object, other); // => true
object === other; // => false
```

## isFunction
- **说明：**
  - 检查 `value` 是否是 `Function` 对象
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个函数返回true，否则返回false

- **示例：**

```js
import { isFunction } from '@ni-web-infra/common-utils';

isFunction(isFunction); // => true
isFunction('a'); // => false
```

## isInteger
- **说明：**
  - 检查 `value` 是否为一个整数
    ::: warning
    这个方法基于`Number.isInteger`
    :::
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个整数返回true，否则返回false

- **示例：**

```js
import { isInteger } from '@ni-web-infra/common-utils';

isInteger(3); // => true
isInteger('3'); // => false
isInteger(Number.MIN_VALUE); // => false
isInteger(Infinity); // => false
```

## isNaN
- **说明：**
  - 检查 `value` 是否是 `NaN`
    ::: warning
    这个方法基于`Number.isNaN`，和全局的`isNaN`不同之处在于，全局的`isNaN`对于`undefined`和其他非数字的值返回`true`
    :::
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个`NaN`返回true，否则返回false

- **示例：**

```js
import * as mtutil from '@ni-web-infra/common-utils';

mtutil.isNaN(NaN); // => true
mtutil.isNaN(new Number(NaN)); // => true
mtutil.isNaN(undefined); // => false
isNaN(undefined); // => true  全局的`isNaN`为true
```

## isNull
- **说明：**
  - 检查 `value` 是否是 `null`
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value为`null`返回true，否则返回false

- **示例：**

```js
import { isNull } from '@ni-web-infra/common-utils';

isNull(null); // => true
isNull(void 0); // => false
```

## isNumber
- **说明：**
  - 检查 `value` 是否是原始`Number`数值型或者对象
    ::: warning
    要排除 `Infinity`, `-Infinity`, 以及 `NaN` 数值类型
    :::
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个数值返回true，否则返回false

- **示例：**

```js
import { isNumber } from '@ni-web-infra/common-utils';

isNumber(3); // => true
isNumber(Number.MIN_VALUE); // => true
isNumber(Infinity); // => true
isNumber('3'); // => false
```

## isObject
- **说明：**
  - 检查 `value` 是否是`Object`的language type，(例如：arrays, functions, objects, regexes, new Number(0), 以及 new String(''))
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个对象返回true，否则返回false

- **示例：**

```js
import { isObject } from '@ni-web-infra/common-utils';

isObject({}); // => true
isObject([1, 2, 3]); // => true
isObject(null); // => false
```

## isString
- **说明：**
  - 检查 `value` 是否是原始字符串`String`或者对象
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个字符串返回true，否则返回false

- **示例：**

```js
import { isString } from '@ni-web-infra/common-utils';

isString('abc'); // => true
isString(1); // => false
```

## isSymbol
- **说明：**
  - 检查 `value` 是否是原始`Symbol`或者对象
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value是一个symbol返回true，否则返回false

- **示例：**

```js
import { isSymbol } from '@ni-web-infra/common-utils';

isSymbol(Symbol.iterator); // => true
isSymbol('abc'); // => false
```

## isNotEmpty
- **说明：**
  - 检查 `value` 是否是是否为一个非空对象、集合、映射或者set
  - 是[isEmpty](#isEmpty)的
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: boolean`：如果value非空返回true，否则返回false

- **示例：**

```js
import { isNotEmpty } from '@ni-web-infra/common-utils';

isNotEmpty(null); // => false
isNotEmpty(true); // => false
isNotEmpty(undefined); // => false
isNotEmpty(0); // => false
isNotEmpty(1); // => false
isNotEmpty(''); // => false
isNotEmpty('a'); // => true
isNotEmpty([]); // => false
isNotEmpty([1, 2, 3]); // => true
isNotEmpty({}); // => false
isNotEmpty({ 'a': 1 }); // => true
```

## toString
- **说明：**
  - 转换 `value` 为字符串。
  - 提示：`null` 和 `undefined` 将返回空字符串， `-0` 将被转换为字符串`"-0"`
- **参数：**
  - `value: any`：要检查的值
- **返回：**
  - `value: string`：返回字符串

- **示例：**

```js
import { toString } from '@ni-web-infra/common-utils';

toString(null); // => ''
toString(-0); // => '-0'
toString([1, 2, 3]); // => '1,2,3'
toString(1); // => '1'
```


## trim
- **说明：**
  - 从`string`字符串中移除前面和后面的 空格 或 指定的字符
- **参数：**
  - `str: string = ''`: 要处理的字符串
  - `chars?: string = whitespace`: 要移除的字符
- **返回：**
  - `value: string`：返回处理后的字符串

- **示例：**

```js
import { trim } from '@ni-web-infra/common-utils';

trim('  abc  '); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
trim([1, 2, 3]); // => '1,2,3'
trim(1); // => '1'
```


## humpToLine
- **说明：**
  - 字符串驼峰转横线
- **参数：**
  - `str: string = ''`: 要处理的字符串
- **返回：**
  - `value: string`：返回处理后的字符串

- **示例：**

```js
import { humpToLine } from '@ni-web-infra/common-utils';

humpToLine('aBc'); // => 'a-bc'
humpToLine('aBC'); // => 'a-b-c'
humpToLine('ABC'); // => 'a-b-c'
```

## lineToHump
- **说明：**
  - 字符串横线转驼峰
- **参数：**
  - `str: string = ''`: 要处理的字符串
- **返回：**
  - `value: string`：返回处理后的字符串

- **示例：**

```js
import { lineToHump } from '@ni-web-infra/common-utils';

lineToHump('a-bc'); // => 'aBc'
lineToHump('a-b-c'); // => 'aBC'
lineToHump('-a-b-c'); // => 'ABC'
```
