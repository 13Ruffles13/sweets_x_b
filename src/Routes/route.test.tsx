import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { RoutePaths } from "./routes";

describe("RoutePaths component", () => {
  test("renders homepage route", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/sweets_x_b"]}>
        <RoutePaths />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByText(/home/i)).toBeDefined();
  });

  test("renders customer orders route", () => {
    // Arrange
    window.location.hash = "#/orders";
    // Act
    render(<RoutePaths />);

    // Assert
    expect(screen.getByText(/customerorders/i)).toBeDefined();
  });
});
