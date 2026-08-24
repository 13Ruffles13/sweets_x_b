import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { isFeatureEnabled } from "../../Config/featureFlags";
import { SweetOptions } from "./SweetOptions";

vi.mock("../../Config/featureFlags", () => ({
  isFeatureEnabled: vi.fn(),
}));

describe("SweetOptions component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("renders title", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const titleElement = screen.getByRole("heading", {
      name: "What you'll love",
    });

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  test("renders available sweet", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const almondCake = screen.getByRole("img", {
      name: "Almond Cream Cheese Pound Cake",
    });

    // Assert
    expect(almondCake).toBeInTheDocument();
  });

  test("renders Beignets as coming soon", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const beignets = screen.getByRole("heading", {
      name: "Beignets",
    });

    const beignetsCard = beignets.closest(".sweetImageContainer");

    // Assert
    expect(beignets).toBeInTheDocument();
    expect(beignetsCard).not.toBeNull();

    expect(
      within(beignetsCard as HTMLElement).getByText("Coming Soon"),
    ).toBeInTheDocument();
  });

  test("renders Blueberry Muffins as coming soon", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const blueberryMuffins = screen.getByRole("heading", {
      name: "Blueberry Muffins",
    });

    const blueberryMuffinsCard = blueberryMuffins.closest(
      ".sweetImageContainer",
    );

    // Assert
    expect(blueberryMuffins).toBeInTheDocument();
    expect(blueberryMuffinsCard).not.toBeNull();

    expect(
      within(blueberryMuffinsCard as HTMLElement).getByText("Coming Soon"),
    ).toBeInTheDocument();
  });

  test("uses Google Forms link when orders page is disabled", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

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

  test("uses orders route when orders page is enabled", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(true);

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
    expect(almondCakeLink).toHaveAttribute("href", "/orders");
  });

  test("coming soon sweets are not links", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Act
    const beignets = screen.getByRole("heading", {
      name: "Beignets",
    });

    const blueberryMuffins = screen.getByRole("heading", {
      name: "Blueberry Muffins",
    });

    // Assert
    expect(beignets.closest("a")).toBeNull();
    expect(blueberryMuffins.closest("a")).toBeNull();
  });
});
