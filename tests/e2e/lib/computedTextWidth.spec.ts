import { computedTextWidth } from "../../../src/lib/computedTextWidth";
import { getStylePropertyValue } from "../../../src/lib/getStylePropertyValue";

describe("computedTextWidth", () => {
  it("计算文本宽度", () => {
    cy.window().then((win) => {
      const text = "测试文字";
      const font = getStylePropertyValue(win.document.body, "font");

      const textWidth = computedTextWidth(text, font);
      console.log("计算后的文字宽度", textWidth);
      expect(textWidth).to.be.above(0);
    });
  });
});
