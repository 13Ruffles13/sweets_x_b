import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App.tsx";

describe("App Component", () => {
  test("renders main container", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    // Assert
    const mainContainer = document.querySelector(".min-h-screen");
    expect(mainContainer).not.toBeNull();
  });

  test("renders RoutePaths component", () => {
    // Arrange

    // Act
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    // Assert
    const routePaths = screen.getByText(/sweet treats crafted from scratch/i);
    expect(routePaths).toBeInTheDocument();
  });
});
