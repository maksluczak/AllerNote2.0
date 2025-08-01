import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Custom404 from "../not-found";

describe("404 Page", () => {
  it("404 heading is rendered with the correct text", () => {
    render(<Custom404 />);
    const heading = screen.getByRole("heading", { level: 1 });

    // Assertion
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("404");
  });

  it("Go back home btn is rendered with text and has correct url", () => {
    render(<Custom404 />);

    const button = screen.getByRole("link");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Powrót na stronę główną/);
    expect(button).toHaveAttribute("href", "/");
  });
});
