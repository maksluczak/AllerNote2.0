import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../Form";

describe("Form Component", () => {
  test("renders email input when email prop is true", () => {
    render(<Form email={true} />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });

  test("renders password input when password prop is true", () => {
    render(<Form password={true} />);
    const passwordInput = screen.getByLabelText(/haslo/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders nickname input when nickname and registration props are true", () => {
    render(<Form nickname={true} registration={true} />);
    const nicknameInput = screen.getByLabelText(/nazwa użytkownika/i);
    expect(nicknameInput).toBeInTheDocument();
  });

  test("renders repeated password input when password and registration props are true", () => {
    render(<Form password={true} registration={true} />);
    const repeatedPasswordInput = screen.getByLabelText(/powtórz hasło/i);
    expect(repeatedPasswordInput).toBeInTheDocument();
  });

  test("renders submit button with provided text", () => {
    const btnText = "Submit";
    render(<Form btnText={btnText} />);
    const submitButton = screen.getByRole("button", { name: btnText });
    expect(submitButton).toBeInTheDocument();
  });

  test("renders registration link when registration prop is false", () => {
    render(<Form registration={false} />);
    const registrationLink = screen.getByText(/Zarejestruj się/i);
    expect(registrationLink).toBeInTheDocument();
    expect(registrationLink).toHaveAttribute("href", "/rejestracja");
  });

  test("does not render registration link when registration prop is true", () => {
    render(<Form registration={true} />);
    const registrationLink = screen.queryByText(/Zarejestruj się/i);
    expect(registrationLink).not.toBeInTheDocument();
  });
});
