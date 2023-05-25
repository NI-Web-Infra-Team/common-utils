/**
 * 获取屏幕缩放比例
 * @function getScreenScaleSize
 *
 * @param {number} defaultSize 默认尺寸
 * @param {number | undefined} fractionDigits 小数位数
 * @returns {number} 屏幕缩放比例
 *
 * @example
 * const screenScaleSize = getScreenScaleSize(1920, 2);
 * console.log('屏幕缩放比例', screenScaleSize);
 */
export const getScreenScaleSize = (defaultSize?: number, fractionDigits?: number | undefined): number =>
  Number((globalThis.document.documentElement.clientWidth / (defaultSize || 1920)).toFixed(fractionDigits ?? 3));
