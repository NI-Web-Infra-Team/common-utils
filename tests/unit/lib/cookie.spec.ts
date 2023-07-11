/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

const cookie = utils.setCookie("userName", "admin");

describe("setCookie", () => {
  test("正常", () => {
    expect(cookie).toBe("userName=admin; path=/");
  });
});

describe("getCookie", () => {
  test("正常", () => {
    const value = utils.getCookie("userName");
    expect(value).toBe("admin");
  });
});

describe("getAllCookies", () => {
  test("正常", () => {
    utils.setCookie("userName", "admin");
    const value = utils.getAllCookies();
    expect(value.userName).toBe("admin");
  });
});

describe("removeCookie", () => {
  test("正常", () => {
    utils.removeCookie("userName");
    const value = utils.getCookie("userName");
    expect(value).toBe(undefined);
  });
});
