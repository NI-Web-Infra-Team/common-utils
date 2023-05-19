import { filterXSS } from "./dom";

/**
 * 获取url请求中的参数值
 * @function getUrlParam
 *
 * @param {string} key 参数名称
 * @param {string} url 请求url
 * @returns {string} 参数值
 *
 * @example
 * const url = 'http://localhost:8080/getList?id=12';
 * const id = getUrlParam('id', url);
 * console.log('参数值', id);
 */
export const getUrlParam = (key: string, url?: string): string => {
  const u = url || location.href;
  const reg = new RegExp(`[?&#]${key}=([^&#]+)`, "gi");

  const matches = u.match(reg);
  let strArr;
  if (matches && matches.length > 0) {
    strArr = matches[matches.length - 1].split("=");
    if (strArr && strArr.length > 1) {
      // 过滤XSS字符
      return filterXSS(strArr[1]);
    }
    return "";
  }
  return "";
};

/**
 * 获取url请求的主机名
 * @function getUrlParam
 *
 * @param {string} targetUrl 请求url
 * @returns {string | undefined} 主机名
 *
 * @example
 * const url = 'http://localhost:8080/getList?id=12';
 * const host = getHost(url);
 * console.log('主机名', host);
 */
export const getHost = (targetUrl: string): string | undefined => targetUrl.match(/\/\/([^/]+)/)?.[1];

/**
 * 判断两个url顶级域名是否相等
 * @function isSameDomain
 *
 * @param {string} targetUrl 请求url，默认为""
 * @param {string} source 请求url，默认为本机名
 * @returns {boolean} 是否相等
 *
 * @example
 * const url = 'http://localhost:8080/getList?id=12';
 * const isSome = isSameDomain(url);
 * console.log('是否相等', isSome);
 */
export const isSameDomain = (targetUrl = "", source = globalThis.location.host): boolean => {
  const isHttpUrl = /^(http[s]?:)?\/\//.test(targetUrl);

  if (!isHttpUrl) return true;

  return getHost(targetUrl) === source;
};
