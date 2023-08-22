# 动画控制相关

## requestAnimationFrame
- **说明：**
  - 执行浏览器帧动画
- **参数：**
  - `value: Function`：要开启帧动画的函数
- **返回：**
  - `value: number`：返回请求ID，一个 long 整数，是回调列表中唯一的标识

- **示例：**

```js
import { requestAnimationFrame } from '@ni-web-infra/common-utils';

let _reqId = null
const animate = () => {
  // 相关逻辑代码
  // 执行浏览器帧动画
  _reqId = requestAnimationFrame(animate)
}
animate()
```

## cancelAnimationFrame
- **说明：**
  - 取消一个先前通过调用requestAnimationFrame()方法添加到计划中的动画帧请求
- **参数：**
  - `value: number | undefined | null`：动画帧请求ID
- **返回：**
  - `void`

- **示例：**

```js
import { requestAnimationFrame, cancelAnimationFrame } from '@ni-web-infra/common-utils';

let _reqId = null
const animate = () => {
  // 相关逻辑代码
  // 执行浏览器帧动画
  _reqId = requestAnimationFrame(animate)
}
animate()

// 取消浏览器帧动画
cancelAnimationFrame(_reqId)
_reqId = null
```

## sleep
- **说明：**
  - 执行休眠
- **参数：**
  - `ms: number`：要休眠的时间，单位为毫秒
- **返回：**
  - `Promise<void>`

- **示例：**

```js
import { sleep } from '@ni-web-infra/common-utils';

// 休眠1s
sleep(1000).then(() => {
    // 业务逻辑代码
})
```
