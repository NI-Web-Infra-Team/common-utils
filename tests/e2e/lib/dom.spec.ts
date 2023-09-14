import {
  getDocument,
  createDom,
  removeDom,
  addClassName,
  removeClassName,
  removeClassNameByClassName,
  injectStyle,
} from "../../../src/lib/dom";

describe("dom", () => {
  const cssText = "width: 200px;height: 200px;background-color: red;";
  const className = "test";
  const dom = createDom("DIV", className, cssText);
  getDocument().body.appendChild(dom);

  it("dom 是否为空", () => {
    expect(dom).not.null;
  });

  it("dom 属性正确", () => {
    expect(dom.tagName).to.equal("DIV");
    expect(className).to.equal(className);
    expect(cssText).to.equal(cssText);
  });

  const childDom = createDom("span", "test-span", "font-size: 16px");
  dom.appendChild(childDom);

  it("移除 dom", () => {
    removeDom(childDom);
    expect(dom.getElementsByClassName("test-span")).not.null;
  });

  it("添加 className", () => {
    addClassName(dom, "add");
    expect(dom.className).to.equal("test add");
  });

  it("移除 className", () => {
    removeClassName(dom, "add");
    expect(dom.className).to.equal(className);
  });

  it("通过 className 移除 class", () => {
    removeClassNameByClassName(className, getDocument());
    expect(dom.className).to.equal("");
  });

  it("插入样式", () => {
    const styleEl = injectStyle("width: 100px;", getDocument());
    expect(styleEl.innerHTML).to.equal("width: 100px;");
  });
});
