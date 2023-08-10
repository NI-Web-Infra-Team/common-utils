import { requestAnimationFrame, cancelAnimationFrame, sleep } from "../../../src/lib/animation";

describe("animation", () => {
  let progress = 0;
  function render() {
    progress += 1; // 修改图像的位置
    if (progress < 100) {
      // 在动画没有结束前，递归渲染
      requestAnimationFrame(render);
    }
  }
  const handlerId = requestAnimationFrame(render);
  console.log("handlerId", handlerId);
  it("执行动画", () => {
    console.log("执行动画", handlerId);
    expect(handlerId).to.be.equal(1);
  });

  it("休眠", async () => {
    const ms = 1000;
    const date = Date.now();
    await sleep(ms);
    const newDate = Date.now();
    expect(newDate - date).to.be.gte(ms);
  });

  it("取消动画", () => {
    cancelAnimationFrame(handlerId);
    expect(handlerId).to.be.equal(1);
  });
});
