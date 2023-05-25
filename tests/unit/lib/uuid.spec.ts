import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getUuid8", () => {
  test("长度正常", () => {
    const value = utils.getUuid8();
    expect(value.length).toBe(8);
  });

  test("值正常", () => {
    const value = utils.getUuid8();
    const reg = new RegExp("^[A-Za-z0-9]+$");
    expect(reg.test(value)).toBe(true);
  });
});

describe("getUuid16", () => {
  test("长度正常", () => {
    const value = utils.getUuid16();
    expect(value.length).toBe(16);
  });

  test("值正常", () => {
    const value = utils.getUuid16();
    const reg = new RegExp("^[A-Za-z0-9]+$");
    expect(reg.test(value)).toBe(true);
  });
});

describe("getUuid", () => {
  test("长度正常", () => {
    const value = utils.getUuid(32);
    expect(value.length).toBe(32);
  });

  test("值正常", () => {
    const value = utils.getUuid(32);
    const reg = new RegExp("^[A-Za-z0-9]+$");
    expect(reg.test(value)).toBe(true);
  });
});

describe("getUuidDigit", () => {
  test("长度正常", () => {
    const value = utils.getUuidDigit(4);
    expect(value.length).toBe(4);
  });

  test("值正常", () => {
    const value = utils.getUuidDigit(4);
    const reg = new RegExp("^[0-9]*$");
    expect(reg.test(value)).toBe(true);
  });
});
