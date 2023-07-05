import { computedTextWidth } from "../../../src/lib/computedTextWidth";

describe("computedTextWidth", () => {
  it("计算文本宽度", () => {
    cy.window().then((win) => {
      const isZhCN = win.navigator.language === "zh-CN";

      const text = isZhCN ? "测试" : "test";
      const font = isZhCN ? "宋体" : "Arial";

      const zhCNTextWidth = 20;
      const enUSTextWidth = 18;

      // 大致宽度
      const probablyWidth = Math.round(computedTextWidth(text, font));

      expect(probablyWidth).to.be.equal(isZhCN ? zhCNTextWidth : enUSTextWidth);
    });
  });
});
