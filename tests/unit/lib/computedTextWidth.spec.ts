/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("computedTextWidth", () => {
  const width = utils.computedTextWidth("测试", "宋体");
  test("dom 是否为空", () => {
    expect(width).toBe(20);
  });
});
