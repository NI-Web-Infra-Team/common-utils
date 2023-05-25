import AJAXError from "./AJAXError";

export type Cancelable = { cancel: () => void };

export type Callback<T> = (error: Error | null | undefined, result: T | null | undefined) => void;

interface Headers {
  [key: string]: string;
}

export type RequestParameters = {
  url: string;
  headers?: Headers;
  method?: "GET" | "POST" | "PUT";
  body?: string;
  type?: "string" | "json" | "arrayBuffer";
  credentials?: "same-origin" | "include";
  collectResourceTiming?: boolean;
  referrerPolicy?: ReferrerPolicy;
};

export type ResponseCallback<T> = (
  error?: Error | null | undefined,
  data?: T | null | undefined,
  cacheControl?: string | null | undefined,
  expires?: string | null | undefined
) => void;

/**
 * XMLHttpRequest
 * @ignore
 *
 * @param {RequestParameters} requestParameters 请求参数
 * @param {ResponseCallback<any>} callback 回调函数
 * @returns {Cancelable} { cancel: () => xhr.abort() }
 */
function makeXMLHttpRequest(requestParameters: RequestParameters, callback: ResponseCallback<any>): Cancelable {
  const xhr = new window.XMLHttpRequest();

  xhr.open(requestParameters.method || "GET", requestParameters.url, true);
  if (requestParameters.type === "arrayBuffer") {
    xhr.responseType = "arraybuffer";
  }
  for (const k in requestParameters.headers) {
    xhr.setRequestHeader(k, requestParameters.headers[k]);
  }
  if (requestParameters.type === "json") {
    xhr.responseType = "text";
    xhr.setRequestHeader("Accept", "application/json");
  }
  xhr.withCredentials = requestParameters.credentials === "include";
  xhr.onerror = () => {
    callback(new Error(xhr.statusText));
  };
  xhr.onload = () => {
    if (((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) && xhr.response !== null) {
      let data = xhr.response;
      if (requestParameters.type === "json") {
        // 我们在这里手动解析JSON以获得更好的错误消息。
        try {
          data = JSON.parse(xhr.response);
        } catch (err: any) {
          return callback(err);
        }
      }
      callback(data, xhr.getResponseHeader("Cache-Control"), xhr.getResponseHeader("Expires"));
    } else {
      callback(new AJAXError(xhr.statusText, xhr.status, requestParameters.url));
    }
  };
  xhr.send(requestParameters.body);
  return { cancel: () => xhr.abort() };
}

/**
 * fetch request
 * @ignore
 *
 * @param {RequestParameters} requestParameters 请求参数
 * @param {ResponseCallback<any>} callback 回调函数
 * @returns {Cancelable} { cancel: () => controller.abort() }
 */
function makeFetchRequest(requestParameters: RequestParameters, callback: ResponseCallback<any>): Cancelable {
  const controller = new window.AbortController();
  const request = new window.Request(requestParameters.url, {
    method: requestParameters.method || "GET",
    body: requestParameters.body,
    credentials: requestParameters.credentials,
    headers: requestParameters.headers,
    referrerPolicy: requestParameters.referrerPolicy,
    signal: controller.signal,
  });
  let complete = false;
  let aborted = false;

  if (requestParameters.type === "json") {
    request.headers.set("Accept", "application/json");
  }

  const validateOrFetch = (
    err: { message: string } | null,
    cachedResponse: Response | null,
    responseIsFresh?: undefined
  ) => {
    if (aborted) return;

    if (err) {
      // 如果发生缓存错误，请执行提取操作。
      // Edge中的HTTP页面会触发一个可以忽略的安全错误。
      if (err.message !== "SecurityError") {
        console.warn(err.message);
      }
    }

    if (cachedResponse && responseIsFresh) {
      return finishRequest(cachedResponse);
    }

    window
      .fetch(request)
      .then((response) => {
        return finishRequest(response);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // 需要静默中止错误
          return;
        }
        callback(new Error(`${error.message} ${requestParameters.url}`));
      });
  };

  const finishRequest = (response: Response) => {
    if (response.statusText) {
      return callback(new AJAXError(response.statusText, response.status, requestParameters.url));
    }
    (requestParameters.type === "arrayBuffer"
      ? response.arrayBuffer()
      : requestParameters.type === "json"
      ? response.json()
      : response.text()
    )
      .then((result) => {
        if (aborted) return;
        complete = true;
        callback(result, response.headers.get("Cache-Control"), response.headers.get("Expires"));
      })
      .catch((err: { message: string | undefined }) => {
        if (!aborted) callback(new Error(err.message));
      });
  };

  validateOrFetch(null, null);

  return {
    cancel: () => {
      aborted = true;
      if (!complete) controller.abort();
    },
  };
}

/**
 * 请求函数
 * @function ajax
 *
 * @param {RequestParameters} requestParameters 请求参数
 * @param {string} requestParameters.url 要请求的URL。
 * @param {Object} requestParameters.headers 要与请求一起发送的标头。
 * @param {string} requestParameters.method 请求方法“GET”|“POST”|“PUT”。
 * @param {string} requestParameters.body 请求正文。
 * @param {string} requestParameters.type 要返回的响应主体类型为“string”、“json”、“arrayBuffer”。
 * @param {string} requestParameters.credentials `'same-origin'|'include'` 使用”include“发送带有跨源请求的 cookie。
 * @param {boolean} requestParameters.collectResourceTiming 如果为true，将为这些转换后的请求收集 Resource Timing API 信息，并在相关数据事件的resourceTiming属性中返回。
 * @param {string} requestParameters.referrerPolicy 表示请求的referrerPolicy的字符串。有关更多信息和可能的值，请参阅[Referrer Policy HTTP头页](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).
 * @param {Callback} callback 回调函数
 * @returns {Cancelable} { cancel: () => { ... } }
 *
 * @example
 * ajax({url: 'data.json', type: "json", method: "GET"}, (res) => {})
 */
export function ajax(requestParameters: RequestParameters, callback: Callback<any>): Cancelable {
  if (window.Request && window.AbortController) {
    return makeFetchRequest(requestParameters, callback);
  }

  return makeXMLHttpRequest(requestParameters, callback);
}
