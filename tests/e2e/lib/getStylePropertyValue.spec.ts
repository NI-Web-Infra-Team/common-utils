import { getStylePropertyValue } from "../../../src/lib/getStylePropertyValue";

describe("getStylePropertyValue", () => {
  it("获取元素样式的值", () => {
    const targetSize = "16px";
    cy.get("body")
      .invoke("css", "font-size", targetSize)
      .then((el) => {
        const body = el[0] as unknown as HTMLBodyElement;
        expect(body.style.fontSize).to.equal(getStylePropertyValue(body, "font-size"));
      });
  });
});
