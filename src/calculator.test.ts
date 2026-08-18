import { describe, it, expect } from "vitest";
import { add, subtract } from "./calculator";

describe("calculator", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("adds positive and negative numbers", () => {
      expect(add(5, -3)).toBe(2);
      expect(add(-5, 3)).toBe(-2);
    });

    it("adds zero correctly", () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it("handles floating point numbers", () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("subtract", () => {
    it("subtracts two positive numbers", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it("subtracts with negative numbers", () => {
      expect(subtract(5, -3)).toBe(8);
      expect(subtract(-5, 3)).toBe(-8);
      expect(subtract(-5, -3)).toBe(-2);
    });

    it("subtracts zero correctly", () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it("handles floating point numbers", () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });
  });
});
