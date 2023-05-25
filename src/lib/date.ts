import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/**
 * 日期时间格式模板
 */
export const DATE_FORMATTER = {
  YEAR_FORMAT: "YYYY",
  MONTH_FORMAT: "YYYY-MM",
  DATE_FORMAT: "YYYY-MM-DD",
  HOUR_FORMAT: "YYYY-MM-DD HH",
  MINUTE_FORMAT: "YYYY-MM-DD HH:mm",
  SECONDS_FORMAT: "YYYY-MM-DD HH:mm:ss",
};

const _customDateFormatter = (v: string | Date, format = DATE_FORMATTER.SECONDS_FORMAT): string => {
  if (v) {
    const time = dayjs(v).format(format);
    // FIXME: 修复时区问题
    // if ((typeof v === "string" && v.includes("Z")) || v.constructor === Date) {
    //   // UTC字符串时间或Date对象格式化为北京时间
    //   time = dayjs(v).utcOffset(8).format(format);
    // } else {
    //   time = dayjs(v).format(format);
    // }
    if (time !== "Invalid Date") {
      return time;
    }
  }
  return "";
};

/**
 * 日期时间格式化为字符串
 * @function formatDatetime
 *
 * @param {string | Date} v 日期时间
 * @param {string} format 日期时间格式
 * @returns {string} 日期时间字符串
 *
 * @example
 * const date = new Date();
 * const strDate = formatDatetime(date, 'YYYY-MM-DD HH:mm:ss');
 * console.log('日期时间', strDate);
 */
export const formatDatetime = (v: string | Date, format?: string): string => _customDateFormatter(v, format);

/**
 * 日期时间格式化为13位timestamp
 * @function formatTimestamp
 *
 * @param {string | Date} v 日期时间
 * @returns {number} 13位timestamp
 *
 * @example
 * const date = new Date();
 * const numDate = formatTimestamp(date);
 * console.log('日期时间', numDate);
 */
export const formatTimestamp = (v: string | Date): number => dayjs(v).valueOf();
