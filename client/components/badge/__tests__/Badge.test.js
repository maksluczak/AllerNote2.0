import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge component", () => {
  test("renders Badge component", () => {
    render(<Badge />);
    expect(screen.getByText("Trawa kosi ludzi na potęgę")).toBeInTheDocument();
    expect(screen.getByText(/Trawa zbiera swoje żniowo/i)).toBeInTheDocument();
    expect(screen.getByText("Inne pyłki dzisiaj")).toBeInTheDocument();
  });

  test("closes Badge component when close button is clicked", () => {
    render(<Badge />);
    const badgeSection = screen.getAllByRole("generic")[1];
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(badgeSection).toHaveClass("hidden");
  });

  test("link has correct href", () => {
    render(<Badge />);
    const link = screen.getByRole("link", { name: "Inne pyłki dzisiaj" });
    expect(link).toHaveAttribute("href", "/alergeny");
  });
});
