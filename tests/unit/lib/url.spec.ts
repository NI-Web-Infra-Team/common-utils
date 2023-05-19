import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getUrlParam", () => {
  test("正常", () => {
    const url = "http://abc.cn?a=b";
    const value = utils.getUrlParam("a", url);
    expect(value).toBe("b");
  });

  test("null", () => {
    const url = "http://abc.cn";
    const value = utils.getUrlParam("a", url);
    expect(value).toBe("");
  });

  test("empty", () => {
    const url = "http://abc.cn?a=";
    const value = utils.getUrlParam("a", url);
    expect(value).toBe("");
  });
});

describe("getHost", () => {
  test("正常", () => {
    const url = "http://abc.cn";
    const value = utils.getHost(url);
    expect(value).toBe("abc.cn");
  });
  test("带参正常", () => {
    const url = "http://abc.cn?a=b";
    const value = utils.getHost(url);
    expect(value).toBe("abc.cn?a=b");
  });
});

describe("isSameDomain", () => {
  test("相等", () => {
    const url = "http://abc.cn";
    const value = utils.isSameDomain(url, "abc.cn");
    expect(value).toBe(true);
  });

  test("不相等", () => {
    const url = "http://abc.cn";
    const value = utils.isSameDomain(url, "abc");
    expect(value).toBe(false);
  });
});
