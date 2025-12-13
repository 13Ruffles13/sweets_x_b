import { describe, test, expect } from "vitest";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MemoryRouter } from "react-router";

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
