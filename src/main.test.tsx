import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { App } from "./App.tsx";

describe("Main App Component", () => {
  test("Renders App Component", () => {
    // Arrange and Act
    render(<App />);

    // Assert
    expect(
      screen.getByText(/sweet treats crafted from scratch/i),
    ).toBeInTheDocument();
  });
});
