let canvas: HTMLCanvasElement;

/**
 * 计算文本宽度
 * @param {string} text - 文本
 * @param {string} font - 字体
 * @returns {number} - 宽度
 */
export function computedTextWidth(text: string, font: string) {
  canvas = canvas ?? document.createElement("canvas");
  const context = canvas.getContext("2d");
  context!.font = font;
  const metrics = context!.measureText(text);
  return metrics.width;
}