const concurPromise = require("../dist/cjs/index.js").default;

let count = 0;

const mock = () => new Promise((resolve) => setTimeout(() => resolve(++count)));

const concurMock = concurPromise(mock);

describe("concurrent", () => {
  test("no cache", () => {
    expect(mock()).resolves.toBe(1);
    expect(mock()).resolves.toBe(2);
  });

  test("cache", () => {
    expect(concurMock()).resolves.toBe(3);
    expect(concurMock()).resolves.toBe(3);
  });
});
