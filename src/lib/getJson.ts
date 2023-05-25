import { ajax, ResponseCallback } from "./ajax";

/**
 * 获取json文件
 * @function getJson
 *
 * @param {String} json json文件地址
 * @param {Function} cb 回调函数
 * @returns {Object} { cancel: () => controller.abort() }
 *
 * @example
 * getJson('data.json',(res) => {
 *    console.log(res)
 * })
 */
export function getJson(json: string, cb: ResponseCallback<any>) {
  return ajax(
    {
      url: json,
      type: "json",
      method: "GET",
    },
    cb
  );
}
