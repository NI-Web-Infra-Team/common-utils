import { getJson } from "../../../src/lib/getJson";

describe("getJson", () => {
  it("获取 jSON", async () => {
    cy.intercept("GET", "/json-test*", {
      statusCode: 200,
      body: { foo: "bar" },
    });
    const result: Record<string, string> = await new Promise((resolve) => {
      getJson("/json-test", (_, data) => {
        resolve(JSON.parse(data));
      });
    });
    expect(result.foo).to.equal("bar");
  });
});
