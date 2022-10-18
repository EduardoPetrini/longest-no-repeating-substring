import { run } from "../../../lib/longest-no-repeating-substring";

describe("test longest no repeating substring", () => {
  it("should return 0 due to undefined parameter", () => {
    const result = run();

    expect(result).toBe(0);
  });

  it("should return 0 due to empty string", () => {
    const result = run("");

    expect(result).toBe(0);
  });

  it("should return 3 due to the string abcabcbcbb", () => {
    const result = run("abcabcbcbb");

    expect(result).toBe(3);
  });

  it("should return 5 due to the string zzzabcdzzz", () => {
    const result = run("zzzabcdzzz");

    expect(result).toBe(5);
  });
});
