const _getUuid = (digitOnly: boolean, len: number, options: any): string => {
  const num = options?.num || 0;
  const letter = options?.letter || "";
  const str = digitOnly ? "0123456789" : "0123456789abcdef";
  const res = [];
  for (let i = 0; i < len; i++) {
    const start = Math.floor(Math.random() * (digitOnly ? 10 : 0x10));
    res.push(str.slice(start, start + 1));
    if (num > 0 && (i + 1) % num === 0 && i !== len - 1) {
      res.push(letter);
    }
  }
  return res.join("");
};
/**
 * 获取8位由数字和字符串组成的随机ID
 * @function getUuid8
 *
 * @param {any} options 规则参数
 * @returns {string} uuid
 */
export const getUuid8 = (options?: any) => _getUuid(false, 8, options);

/**
 * 获取16位由数字和字符串组成的随机ID
 * @function getUuid16
 *
 * @param {any} options 规则参数
 * @returns {string} uuid
 */
export const getUuid16 = (options?: any) => _getUuid(false, 16, options);

/**
 * 获取自定义位数的由数字和字符串组成的随机ID，默认32位
 * @function getUuid
 *
 * @param {number} len 位数
 * @param {any} options 规则参数
 * @returns {string} uuid
 */
export const getUuid = (len?: number, options?: any) => _getUuid(false, len || 32, options);

/**
 * 获取自定义位数的由数字组成的随机ID，默认4位
 * @function getUuidDigit
 *
 * @param {number} len 位数
 * @param {any} options 规则参数
 * @returns {string} uuid
 */
export const getUuidDigit = (len?: number, options?: any) => _getUuid(true, len || 4, options);
