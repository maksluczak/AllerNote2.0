import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  it("renders the footer with correct text", () => {
    const { getByText } = render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(getByText(`${currentYear} © AllerNote.`)).toBeInTheDocument();
  });
});
