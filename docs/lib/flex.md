# 布局适配相关

## getScreenScaleSize
- **说明：**
  - 获取屏幕缩放比例
    ::: tip
    可用于echarts参数中的fontSize和lineHeight、el-table-column中的width、minemap中的offset等等
    :::
- **参数：**
  - `defautSize?: number`：屏幕宽度，默认为1920
  - `fractionDigits?: number | undefined`：小数点后位数，默认为3
- **返回：**
  - `value: number`：计算后的屏幕缩放比例
- **示例：**

```js
import {getScreenScaleSize} from '@ni-web-infra/common-utils';

const subtextFontSize = 14 * getScreenScaleSize()
```
