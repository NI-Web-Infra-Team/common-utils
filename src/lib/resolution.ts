type Resolution = {
  // 屏幕缩放比例
  devicePixelRatio: number;
  /**
   * 屏幕可用宽度
   */
  availWidth: number;
  /**
   * 屏幕可用高度
   */
  availHeight: number;
  /**
   * 屏幕缩放后的计算宽度
   */
  screenComputedWidth: number;
  /**
   * 屏幕缩放后的计算高度
   */
  screenComputedHeight: number;
  /**
   * 屏幕宽度
   */
  screenWidth: number;
  /**
   * 屏幕高度
   */
  screenHeight: number;
  /**
   * 客户端宽度
   */
  clientWidth: number;
  /**
   * 客户端高度
   */
  clientHeight: number;
};

/**
 * 获取屏幕以及客户端分辨率和缩放比例
 * @function getResolution
 *
 * @returns {Resolution} 屏幕以及客户端分辨率和缩放比例
 *
 */
export function getResolution(): Resolution {
  const { screen, devicePixelRatio } = globalThis;
  const screenComputedWidth = screen.width * devicePixelRatio;
  const screenComputedHeight = screen.height * devicePixelRatio;
  return {
    devicePixelRatio,
    availWidth: screen.availWidth,
    availHeight: screen.availHeight,
    screenComputedWidth,
    screenComputedHeight,
    screenWidth: screen.width,
    screenHeight: screen.height,
    clientWidth: globalThis.document.documentElement.clientWidth,
    clientHeight: globalThis.document.documentElement.clientHeight,
  };
}
