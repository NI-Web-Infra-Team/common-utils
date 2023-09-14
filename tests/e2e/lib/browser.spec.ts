import { getBrowserInfo } from "../../../src/lib/browser";

describe("browser", () => {
  it("浏览器名称", () => {
    const browserInfo = getBrowserInfo();
    expect(browserInfo.Actual_Name).equal("Chrome");
  });
});
