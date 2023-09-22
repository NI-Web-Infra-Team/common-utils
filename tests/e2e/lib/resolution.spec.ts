import { getResolution } from "../../../src/lib/resolution";

describe("getResolution", () => {
  it("获取屏幕以及客户端分辨率和缩放比例", () => {
    for (const val of Object.values(getResolution())) {
      expect(typeof val).to.equal("number");
    }
  });
});
