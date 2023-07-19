import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("humpToLine", () => {
  test("aBc", () => {
    const value = utils.humpToLine("aBc");
    expect(value).toBe("a-bc");
  });

  test("aBC", () => {
    const value = utils.humpToLine("aBC");
    expect(value).toBe("a-b-c");
  });

  test("ABC", () => {
    const value = utils.humpToLine("ABC");
    expect(value).toBe("a-b-c");
  });
});

describe("lineToHump", () => {
  test("a-bc", () => {
    const value = utils.lineToHump("a-bc");
    expect(value).toBe("aBc");
  });

  test("a-b-c", () => {
    const value = utils.lineToHump("a-b-c");
    expect(value).toBe("aBC");
  });

  test("-b-c", () => {
    const value = utils.lineToHump("-b-c");
    expect(value).toBe("BC");
  });
});

describe("filterXSS", () => {
  test("<>", () => {
    const value = utils.filterXSS("<div></div>");
    expect(value).toBe("&lt;div&gt;&lt;/div&gt;");
  });

  test(`'"`, () => {
    const value = utils.filterXSS(`'div'"span"`);
    expect(value).toBe("&apos;div&apos;&quot;span&quot;");
  });
});

describe("isNotEmpty", () => {
  test("null", () => {
    const value = utils.isNotEmpty(null);
    expect(value).toBe(false);
  });

  test("", () => {
    const value = utils.isNotEmpty("");
    expect(value).toBe(false);
  });

  test("有值", () => {
    const value = utils.isNotEmpty("111");
    expect(value).toBe(true);
  });
});
