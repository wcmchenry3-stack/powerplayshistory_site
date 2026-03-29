import "./test/i18nTestInstance.js";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container.firstChild).not.toBeNull();
  });

  it("has a main landmark", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("displays the site title as an h1", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Power Plays History",
    );
  });

  it("displays coming soon text", () => {
    render(<App />);
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("displays tagline text", () => {
    render(<App />);
    expect(
      screen.getByText("Something exciting is on its way."),
    ).toBeInTheDocument();
  });
});
