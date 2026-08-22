import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, test } from "vitest";
import { AppRoutes } from "./AppRoutes";

describe("AppRoutes component", () => {
  test("renders homepage route", () => {
    // Arrange and Act
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByText(/home/i)).toBeDefined();
  });

  test("renders customer orders route", () => {
    // Arrange and Act
    render(
      <MemoryRouter initialEntries={["/orders"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByText(/customerorders/i)).toBeDefined();
  });
});
