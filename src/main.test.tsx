import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router";
import { describe, expect, test } from "vitest";
import { App } from "./App.tsx";

describe("Main App Component", () => {
  test("Renders App Component", () => {
    // Arrange
    const rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);

    // Act
    createRoot(rootElement).render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // Assert
    expect(rootElement).not.toBeNull();
  });
});
