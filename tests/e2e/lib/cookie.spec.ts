import { setCookie, getCookie, getAllCookies, removeCookie } from "../../../src/lib/cookie";

describe("cookie", () => {
  const [key, value] = ["userName", "admin"];

  it("设置 cookie", () => {
    const cookie = setCookie(key, value);
    expect(cookie).to.equal(`${key}=${value}; path=/`);
  });

  it("通过 key 获取 cookie 的值", () => {
    setCookie(key, value);
    expect(getCookie(key)).to.equal(value);
  });

  it("获取所有 cookie", () => {
    setCookie(key, value);
    expect(getAllCookies()[key]).to.equal(value);
  });

  it("通过 key 删除指定 cookie", () => {
    setCookie(key, value);
    removeCookie(key);
    expect(getCookie(key)).to.undefined;
  });
});
