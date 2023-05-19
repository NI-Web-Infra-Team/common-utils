/**
 * 获取当前document对象
 * @function getDocument
 *
 * @returns { Document } DOM对象
 */
export const getDocument = (): Document => globalThis.document;

/**
 * 生成DOM元素对象
 * @function createDom
 *
 * @param {string} tagName 标签名称
 * @param {string} className class名称
 * @param {string} cssText css样式
 * @returns { HTMLElement } DOM元素对象
 */
export const createDom = (tagName: string, className?: string, cssText?: string): HTMLElement => {
  const el = globalThis.document.createElement(tagName);
  el.className = className || "";
  el.style.cssText = cssText || "";
  return el;
};

/**
 * 删除DOM元素对象
 * @function removeDom
 *
 * @param {Element} el 要素
 */
export const removeDom = (el: Element): void => {
  const parent = el.parentNode;
  if (parent) {
    parent.removeChild(el);
  }
};

/**
 * 增加DOM对象的class
 * @function addClassName
 *
 * @param {Element} el 要素
 * @param {string} className class名称
 */
export const addClassName = (el: Element, className: string): void => {
  if (!el.classList.contains(className)) el.classList.add(className);
};

/**
 * 删除DOM对象的class
 * @function removeClassName
 *
 * @param {Element} el 要素
 * @param {string} className class名称
 */
export const removeClassName = (el: Element, className: string): void => {
  el.classList.remove(className);
};

/**
 * 根据class名称删除多个DOM对象的class
 * @function removeClassNameByClassName
 *
 * @param {string} className class名称
 * @param {Document} doc DOM对象
 * @returns { HTMLElement | null } DOM元素对象
 */
export const removeClassNameByClassName = (
  className: string,
  doc: Document = globalThis.document
): HTMLElement | null => {
  const el: HTMLElement | null = doc.querySelector(`.${className}`);
  el?.classList.remove(className);
  return el;
};

/**
 * 增加document对象的内联样式
 * @function injectStyle
 *
 * @param {string} style css样式
 * @param {Document} doc DOM对象
 * @returns { HTMLStyleElement } DOM对象的内联样式
 */
export const injectStyle = (style: string, doc: Document = globalThis.document): HTMLStyleElement => {
  const styleEl = doc.createElement("style");
  styleEl.innerHTML = style;
  doc.head.appendChild(styleEl);
  return styleEl;
};

/**
 * 生成过滤XSS的转义字符
 * @function filterXSS
 *
 * @param {string} str 字符
 * @returns { string } 转义后字符
 */
export const filterXSS = (str: string): string =>
  str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
