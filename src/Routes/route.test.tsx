import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, test } from "vitest";
import { RoutePaths } from "./routes";

describe("RoutePaths component", () => {
  test("renders homepage route", () => {
    // Arrange and Act
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RoutePaths />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByText(/home/i)).toBeDefined();
  });

  test("renders customer orders route", () => {
    // Arrange and Act
    render(
      <MemoryRouter initialEntries={["/orders"]}>
        <RoutePaths />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByText(/customerorders/i)).toBeDefined();
  });
});
