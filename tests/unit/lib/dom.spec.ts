/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";

describe("dom", () => {
  const dom = utils.createDom("DIV", "test", "height: 20px");
  utils.getDocument().body.appendChild(dom);
  test("dom 是否为空", () => {
    expect(dom).not.toBeNull();
  });

  test("dom正常", () => {
    const isSuccess = dom.tagName === "DIV" && dom.className === "test" && dom.style.cssText === "height: 20px;";
    expect(isSuccess).toBeTruthy();
  });

  const childDom = utils.createDom("span", "test-span", "font-size: 16px");
  dom.appendChild(childDom);
  test("removeDom", () => {
    utils.removeDom(childDom);
    expect(dom.getElementsByClassName("test-span")).not.toBeNull();
  });

  test("addClassName", () => {
    utils.addClassName(dom, "add");
    expect(dom.className).toBe("test add");
  });

  test("removeClassName", () => {
    utils.removeClassName(dom, "add");
    expect(dom.className).toBe("test");
  });

  test("removeClassNameByClassName", () => {
    utils.removeClassNameByClassName("test", utils.getDocument());
    expect(dom.className).toBe("");
  });

  test("injectStyle", () => {
    const styleEl = utils.injectStyle("width: 100px;", utils.getDocument());
    expect(styleEl.innerHTML).toBe("width: 100px;");
  });
});
