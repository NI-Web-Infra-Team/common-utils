/**
 * 获取元素样式的值
 * @param element - 元素
 * @param property - 样式名
 * @returns string - 样式的值，样式不存在时返回空字符串
 */
export function getStylePropertyValue(element: HTMLElement, property: string) {
  return globalThis.getComputedStyle?.(element, null).getPropertyValue(property) ?? "";
}
