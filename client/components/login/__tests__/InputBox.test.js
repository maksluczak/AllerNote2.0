import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputBox from "../InputBox";

describe("InputBox component", () => {
  test("renders InputBox with label", () => {
    render(<InputBox type="text" id="username" label="Username" />);
    const labelElement = screen.getByLabelText(/username/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("renders InputBox with placeholder", () => {
    render(
      <InputBox
        type="text"
        id="username"
        label="Username"
        placeholder="Enter your username"
      />
    );
    const inputElement = screen.getByPlaceholderText(/enter your username/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders InputBox with correct type", () => {
    render(<InputBox type="password" id="password" label="Password" />);
    const inputElement = screen.getByLabelText(/password/i);
    expect(inputElement).toHaveAttribute("type", "password");
  });

  test("renders InputBox with required attribute", () => {
    render(<InputBox type="text" id="username" label="Username" />);
    const inputElement = screen.getByLabelText(/username/i);
    expect(inputElement).toBeRequired();
  });
});
