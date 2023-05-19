import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getCookie", () => {
  test("正常", () => {
    const cookie = utils.setCookie("userName", "admin");
    const value = utils.getCookie("userName");
    console.log(cookie);
    expect(value).toBe("admin");
  });
});

describe("getAllCookies", () => {
  test("正常", () => {
    utils.setCookie("userName", "admin");
    const value = utils.getAllCookies();
    console.log(value);
    expect(value).toBe({
      userName: "admin",
    });
  });
});
