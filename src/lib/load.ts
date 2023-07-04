/**
 * 异步加载js文件
 */
export const asyncLoadJs = (() => {
  // 正在加载或加载成功的存入此Map中
  const documentMap = new Map();

  return (url: string, crossOrigin?: string, document = globalThis.document) => {
    let loaded = documentMap.get(document);
    if (!loaded) {
      loaded = new Map();
      documentMap.set(document, loaded);
    }

    // 正在加载或已经加载成功的，直接返回
    if (loaded.get(url)) return loaded.get(url);

    const load = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      if (crossOrigin) {
        script.crossOrigin = crossOrigin;
      }
      script.src = url;
      document.body.appendChild(script);
      script.onload = () => {
        resolve({ msg: "加载成功", url });
      };
      script.onerror = () => {
        reject(new Error("加载失败"));
      };
      setTimeout(() => {
        reject(new Error("timeout"));
      }, 60 * 1000);
    }).catch((err) => {
      // 加载失败的，从map中移除，第二次加载时，可以再次执行加载
      loaded.delete(url);
      throw err;
    });

    loaded.set(url, load);
    return loaded.get(url);
  };
})();

/**
 * 异步加载css文件
 */
export const asyncLoadCss = (() => {
  // 正在加载或加载成功的存入此Map中
  const documentMap = new Map();

  return (url: string, document = globalThis.document) => {
    let loaded = documentMap.get(document);
    if (!loaded) {
      loaded = new Map();
      documentMap.set(document, loaded);
    }

    // 正在加载或已经加载成功的，直接返回
    if (loaded.get(url)) return loaded.get(url);

    const load = new Promise((resolve, reject) => {
      const node = document.createElement("link");
      node.rel = "stylesheet";
      node.href = url;
      document.head.appendChild(node);
      node.onload = () => {
        resolve({ msg: "加载成功", url });
      };
      node.onerror = () => {
        reject(new Error("加载失败"));
      };
      setTimeout(() => {
        reject(new Error("timeout"));
      }, 60 * 1000);
    }).catch((err) => {
      // 加载失败的，从map中移除，第二次加载时，可以再次执行加载
      loaded.delete(url);
      throw err;
    });

    loaded.set(url, load);
    return loaded.get(url);
  };
})();
