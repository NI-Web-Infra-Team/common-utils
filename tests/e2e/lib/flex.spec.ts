import { getScreenScaleSize } from "../../../src/lib/flex";

describe("getScreenScaleSize", () => {
  const screenSize = getScreenScaleSize(1920, 2);
  it("获取屏幕缩放等级", () => {
    expect(screenSize).to.be.gte(0);
  });
});
