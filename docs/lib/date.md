# 日期时间相关

::: tip
基于`dayjs`进行封装，使用其中的`format`方法进行日期时间格式化
:::

## DATE_FORMATTER
- **说明：**
  - 日期时间格式模板
- **参数：**
  - `key: string`：key索引
- **返回：**
  - `value: string`：key对应的模板格式字符串
- **示例：**
```js
import { DATE_FORMATTER } from '@ni-web-infra/common-utils';

console.log(DATE_FORMATTER); 
// => YEAR_FORMAT:"YYYY",
// => MONTH_FORMAT:"YYYY-MM",
// => DATE_FORMAT:"YYYY-MM-DD",
// => HOUR_FORMAT:"YYYY-MM-DD HH",
// => MINUTE_FORMAT:"YYYY-MM-DD HH:mm",
// => SECONDS_FORMAT:"YYYY-MM-DD HH:mm:ss"
```

## formatDatetime
- **说明：**
  - 日期时间格式化为字符串
- **参数：**
  - `v: string | Date`：要格式化的 日期时间字符串 或 Date对象
  - `format?: string`：格式化模板，默认值为'YYYY-MM-DD HH:mm:ss'
- **返回：**
  - `value: string`：格式化后的值
- **示例：**
```js
import { formatDatetime, DATE_FORMATTER } from '@ni-web-infra/common-utils';

formatDatetime(new Date()); // => 2023-03-22 19:29:53
formatDatetime(new Date(), DATE_FORMATTER.DATE_FORMAT); // => 2023-03-22
formatDatetime(new Date(), DATE_FORMATTER.MINUTE_FORMAT); // => 2023-03-22 19:29
formatDatetime(new Date(), 'YYYY.MM.DD HH:mm:ss'); // => 2023.03.22 19:29:53
formatDatetime('2019-01-25T02:00:00.000Z') // => 2019-01-25 10:00:00
formatDatetime('2019-01-25 10:00:00') // => 2019-01-25 10:00:00
```

## formatTimestamp
- **说明：**
  - 日期时间格式化为13位timestamp
- **参数：**
  - `v: string | Date`：要格式化的 日期时间字符串 或 Date对象
- **返回：**
  - `value: number`：13位timestamp
- **示例：**
```js
import { formatTimestamp } from '@ni-web-infra/common-utils';

formatTimestamp('2019-01-25 02:00:00') // => 1548352800000
formatTimestamp(new Date()) // => 1679485068581
```
