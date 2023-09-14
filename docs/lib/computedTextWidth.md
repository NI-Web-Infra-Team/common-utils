# 文本宽度相关

## computedTextWidth

- **说明：**
  - 计算文本宽度
- **参数：**
  - `string: text`：文本  
  - `number: font`：字体 
- **返回：** 
  - `number` -宽度，单位 px 

- **示例：**

```js
import computedTextWidth from '@ni-web-infra/common-utils';

computedTextWidth('HELLO WROLD','Microsoft YaHei')
```