/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getScreenScaleSize", () => {
  const screenSize = utils.getScreenScaleSize(1920, 2);
  test("默认浏览器信息", () => {
    expect(screenSize).toBe(0);
  });
});
