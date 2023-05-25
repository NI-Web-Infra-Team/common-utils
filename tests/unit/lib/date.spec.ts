import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("formatDatetime", () => {
  const date = new Date("2021-07-17T15:37:00");
  const dateValue = "2021-07-17 15:37:00";

  test("v是Date对象", () => {
    expect(utils.formatDatetime(date)).toBe(dateValue);
  });

  test("v是字符串", () => {
    expect(utils.formatDatetime("2021-07-17T15:37:00")).toBe(dateValue);
  });

  test("v是日期字符串", () => {
    expect(utils.formatDatetime(date.toISOString())).toMatch(dateValue);
  });

  test("v是UTC字符串", () => {
    expect(utils.formatDatetime(date.toUTCString())).toMatch(dateValue);
  });
});

describe("formatTimestamp", () => {
  const date = new Date("2021-07-17T15:37:00");
  const dateValue = date.getTime();

  test("v是Date对象", () => {
    expect(utils.formatTimestamp(date)).toBe(dateValue);
  });

  test("v是字符串", () => {
    expect(utils.formatTimestamp("2021-07-17T15:37:00")).toBe(dateValue);
  });
});
