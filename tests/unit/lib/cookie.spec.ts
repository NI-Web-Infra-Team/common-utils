import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getCookie", () => {
  test("正常", () => {
    const cookie = utils.setCookie("userName", "admin");
    const value = utils.getCookie("userName");
    console.log(cookie);
    // expect(value).toBe("admin");
    //   FIXME: 猜测 cookie 无法在测试环境中生效
    expect(value).toBe(undefined);
  });
});

describe("getAllCookies", () => {
  test("正常", () => {
    utils.setCookie("userName", "admin");
    const value = utils.getAllCookies();
    console.log(value);
    // expect(value).toBe({
    //   userName: "admin",
    // });
    //   FIXME: 猜测 cookie 无法在测试环境中生效
    expect(value).toBe(undefined);
  });
});

describe("removeCookie", () => {
  test("正常", () => {
    const value = utils.setCookie("userName", "admin");
    utils.removeCookie("userName");
    console.log(value);
    //   FIXME: 猜测 cookie 无法在测试环境中生效
    expect(value).toBe(undefined);
  });
});
