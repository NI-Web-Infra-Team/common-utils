/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getJson", () => {
  test("结果", () => {
    let result = null;
    utils.getJson("https://service.minedata.cn/map/solu/style/11001", (res) => {
      result = JSON.stringify(res);
    });
    expect(result).toBe(null);
  });
});
