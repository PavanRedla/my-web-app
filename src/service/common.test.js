import { describe } from "node:test";
import { add } from "./common";
import { expect } from "@playwright/test";

describe("common function ", () => {
  it("add without params", () => {
    const res = add();
    expect(res).toBe(NaN);
  });
  it("add with one params", () => {
    const res = add(10);
    expect(res).toBe(NaN);
  });
  it("add with one params", () => {
    const res = add(10, 20);
    expect(res).toBe(30);
  });
});
