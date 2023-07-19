/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("getBrowserInfo", () => {
  const browserInfo = utils.getBrowserInfo();
  test("默认浏览器信息", () => {
    expect(browserInfo.Actual_Name).toBe("Netscape");
  });
});
