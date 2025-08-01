import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";

describe("Card component", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Card title="Test Title">Test Children</Card>);
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Card title="Test Title">Test Children</Card>);
    expect(getByText("Test Children")).toBeInTheDocument();
  });
});
