import { describe, it, expect } from "vitest";
import { getSweetOptions } from "./getSweetOptions";

describe("getSweetOptions", () => {
  it("should return an array of elements", () => {
    // --- Arrange ---
    document.body.innerHTML = `
      <div class="sweetImageContainer">Beignets</div>
      <div class="sweetImageContainer">Blueberry Muffins</div>
      <div class="sweetImageContainer">Yellow Cake</div>
    `;

    // --- Act ---
    const result = getSweetOptions();

    // --- Assert ---
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(3);
    expect(result[0].textContent).toBe("Beignets");
  });
});
