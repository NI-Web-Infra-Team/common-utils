const raf =
  globalThis.requestAnimationFrame ||
  (globalThis as any).mozRequestAnimationFrame ||
  (globalThis as any).webkitRequestAnimationFrame ||
  (globalThis as any).msRequestAnimationFrame;
const caf =
  globalThis.cancelAnimationFrame ||
  (globalThis as any).mozCancelAnimationFrame ||
  (globalThis as any).webkitCancelAnimationFrame ||
  (globalThis as any).msCancelAnimationFrame;

/**
 * 执行帧动画
 * @function requestAnimationFrame
 *
 * @param {FrameRequestCallback} fn 动画函数
 * @returns {number} 动画id
 *
 * @example
 * var progress = 0;
 * function render() {
 *      progress += 1; // 修改图像的位置
 *      if (progress < 100) {  // 在动画没有结束前，递归渲染
 *          requestAnimationFrame(render);
 *      }
 * }
 * const handlerId = requestAnimationFrame(render);
 * console.log('动画id', handlerId);
 */
export const requestAnimationFrame = (fn: FrameRequestCallback): number => raf(fn);

/**
 * 取消帧动画
 * @function cancelAnimationFrame
 *
 * @param {number | undefined | null} id 动画id
 *
 * @example
 * const handlerId = requestAnimationFrame(render);
 * cancelAnimationFrame(handlerId);
 */
export const cancelAnimationFrame = (id: number | undefined | null): void => {
  if (id) caf(id);
};

/**
 * 休眠
 * @function sleep
 *
 * @param {number} ms 休眠时间（单位毫秒）
 *
 * @example
 * sleep(1000);
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, ms);
  });
