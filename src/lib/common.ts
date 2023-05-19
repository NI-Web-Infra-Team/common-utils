import { isEmpty } from "lodash-es";

export * from "lodash-es";

/**
 * 判断值是否为空
 * @function isNotEmpty
 *
 * @param {any} value 值
 * @returns {boolean} 是否为空
 *
 * @example
 * const str = null;
 * const isNull = isNotEmpty(str);
 * console.log('是否不为空', isNull);
 */
export const isNotEmpty = (value: any): boolean => !isEmpty(value);

/**
 * 驼峰转横线
 * @function humpToLine
 *
 * @param {string} str 字符，默认为""
 * @returns {string} 转换后的字符
 *
 * @example
 * const str = "helloWorld";
 * cosnt newStr = humpToLine(str);
 * console.log('转换后', newStr);
 */
export const humpToLine = (str = ""): string => str.replace(/\B([A-Z])/g, "-$1").toLowerCase();

/**
 * 横线转驼峰
 * @function lineToHump
 *
 * @param {string} str 字符，默认为""
 * @returns {string} 转换后的字符
 *
 * @example
 * const str = "hello-world";
 * cosnt newStr = lineToHump(str);
 * console.log('转换后', newStr);
 */
export const lineToHump = (str = ""): string => str.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
