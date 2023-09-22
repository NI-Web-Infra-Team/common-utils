import { getBrowserInfo } from "../../../src/lib/browser";

describe("browser", () => {
  it("浏览器名称", () => {
    const browserInfo = getBrowserInfo();
    const isChrome = browserInfo.Actual_Name.includes("Chrome");
    expect(isChrome).to.be.true;
  });
});
