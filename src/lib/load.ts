/**
 * @description: 异步加载script
 * @param {string} url 脚本地址
 * @return {Promise}
 */
export function loadScript(url: string) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    const headTag = document.getElementsByTagName("head")[0];
    script.type = "text/javascript";
    script.onload = function () {
      resolve({
        msg: "success",
        url: url,
      });
    };

    script.onerror = function (error) {
      reject({
        error,
        msg: "error",
      });
    };

    script.src = url;
    headTag.appendChild(script);
  });
}

/**
 * @description: 异步加载script
 * @param {Array<string>} urlArray 脚本地址数组
 * @return {Promise}
 */
export function loadScripts(urlArray: Array<string>) {
  const scriptArr = [];
  for (let i = 0; i < urlArray.length; i++) {
    scriptArr.push(loadScript(urlArray[i]));
  }
  return Promise.all(scriptArr);
}

/**
 * @description: 异步加载style
 * @param {string} url 样式表地址
 * @return {Promise}
 */
export function loadStyle(url: string) {
  return new Promise(function (resolve, reject) {
    const style = document.createElement("link");
    const headTag = document.getElementsByTagName("head")[0];
    style.rel = "stylesheet";
    style.onload = function () {
      resolve({
        msg: "success",
        url: url,
      });
    };

    style.onerror = function (error) {
      reject({
        error,
        msg: "error",
      });
    };

    style.href = url;
    headTag.appendChild(style);
  });
}

/**
 * @description: 异步加载style
 * @param {Array<string>} urlArray 样式表地址数组
 * @return {Promise}
 */
export function loadStyles(urlArray: Array<string>) {
  const styleArr = [];
  for (let i = 0; i < urlArray.length; i++) {
    styleArr.push(loadStyle(urlArray[i]));
  }
  return Promise.all(styleArr);
}
