import Cookies, { CookieAttributes } from "js-cookie";

/**
 * 读取cookie值
 * @function getCookie
 *
 * @param {string} name cookie名称
 * @returns {string | undefined} cookie值
 *
 * @example
 * const cookie = getCookie('user');
 * console.log('cookie值', cookie);
 */
export const getCookie = (name: string): string | undefined => Cookies.get(name);

/**
 * 读取所有cookie
 * @function getAllCookies
 *
 * @returns {object} cookie信息，例：{userName: 'admin'}
 *
 * @example
 * const cookie = getAllCookies();
 * console.log('所有cookie信息', cookie);
 */
export const getAllCookies = (): { [key: string]: string } => Cookies.get();

/**
 * 设置cookie值
 * @function setCookie
 *
 * @param {string} name cookie名称
 * @param {string} value cookie值
 * @param {CookieAttributes | undefined} options cookie属性
 *
 * @returns {string | undefined}
 *
 * @example
 * setCookie('userName', 'admin');
 */
export const setCookie = (name: string, value: string, options?: CookieAttributes | undefined): string | undefined =>
  Cookies.set(name, value, options);

/**
 * 删除cookie
 * @function removeCookie
 *
 * @param {string} name cookie名称
 * @param {CookieAttributes} options cookie属性
 *
 * @example
 * removeCookie('userName');
 */
export const removeCookie = (name: string, options?: CookieAttributes): void => Cookies.remove(name, options);
