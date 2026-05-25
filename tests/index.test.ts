import { describe, expect, it } from "bun:test";
import { createGreeting } from "../src";

describe("createGreeting", () => {
  it("creates a default greeting", () => {
    expect(createGreeting("OpenHoo")).toBe("Hello, OpenHoo!");
  });

  it("trims names and accepts custom punctuation", () => {
    expect(createGreeting("  OpenHoo  ", { punctuation: "." })).toBe("Hello, OpenHoo.");
  });

  it("rejects empty names", () => {
    expect(() => createGreeting(" ")).toThrow("A non-empty name is required.");
  });
});
