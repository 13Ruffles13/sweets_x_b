import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, test, vi } from "vitest";
import { isFeatureEnabled } from "../../Config/featureFlags";
import { SweetOptions, sweetOptions } from "./SweetOptions";

vi.mock("../../Config/featureFlags", () => ({
  isFeatureEnabled: vi.fn(),
}));

describe("SweetOptions", () => {
  test("should display available sweet options and identify coming soon items", () => {
    // Arrange
    vi.mocked(isFeatureEnabled).mockReturnValue(false);

    // Act
    render(
      <MemoryRouter>
        <SweetOptions />
      </MemoryRouter>,
    );

    // Assert
    expect(
      screen.getByRole("heading", { name: "What you'll love" }),
    ).toBeInTheDocument();

    const availableSweets = sweetOptions.filter((sweet) => !sweet.disabledItem);

    const expectedComingSoonCount = availableSweets.filter(
      (sweet) => sweet.comingSoon,
    ).length;

    for (const sweet of availableSweets) {
      expect(screen.getByRole("img", { name: sweet.alt })).toBeInTheDocument();
    }

    expect(screen.queryAllByText("Coming Soon")).toHaveLength(
      expectedComingSoonCount,
    );
  });
});
