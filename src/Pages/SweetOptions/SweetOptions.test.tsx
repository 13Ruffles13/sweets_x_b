import { beforeEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router";
import { SweetOptions } from "./SweetOptions";
import { render, screen } from "@testing-library/react";
import { isFeatureEnabled } from "../../Config/featureFlags";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual =
    await vi.importActual<typeof import("react-router")>("react-router");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../Config/featureFlags", () => ({
  isFeatureEnabled: vi.fn(),
}));

describe("SweetOptions component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  test("renders title", () => {
    // Arrange
    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const titleElement = screen.getByText("What you'll love");

    // Assert
    expect(titleElement).toBeDefined();
  });

  test("almond cake link has correct href", () => {
    // Arrange
    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const almondCakeLink = screen.getByRole("link", {
      name: /Almond Cream Cheese Pound Cake/i,
    });

    // Assert
    expect(almondCakeLink).toHaveAttribute(
      "href",
      "https://forms.gle/H6PMGL8RNCrVG9y79",
    );
  });

  test("navigates to /orders when feature flag is enabled", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(true);
    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const almondCakeImage = screen.getByAltText(
      "Almond Cream Cheese Pound Cake",
    );
    almondCakeImage.click();

    // Assert
    expect(mockNavigate).toHaveBeenCalledWith("/orders");
  });

  test("does not navigate when feature flag is disabled", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);
    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const almondCakeImage = screen.getByAltText(
      "Almond Cream Cheese Pound Cake",
    );
    almondCakeImage.click();

    // Assert
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
