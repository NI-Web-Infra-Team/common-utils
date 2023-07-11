/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";

import * as utils from "../../../src";
import dayjs from "dayjs";

describe("animation", () => {
  let progress = 0;
  function render() {
    progress += 1; // 修改图像的位置
    if (progress < 100) {
      // 在动画没有结束前，递归渲染
      utils.requestAnimationFrame(render);
    }
  }
  const handlerId = utils.requestAnimationFrame(render);
  test("执行动画", () => {
    expect(handlerId).toBe(1);
  });

  test("休眠", async () => {
    const date = dayjs(new Date()).unix();
    await utils.sleep(1000);
    const newDate = dayjs(new Date()).unix();
    expect(newDate - date).toBe(1);
  });

  test("取消动画", () => {
    utils.cancelAnimationFrame(handlerId);
    expect(handlerId).toBe(1);
  });
});
