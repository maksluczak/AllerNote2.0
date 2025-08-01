import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginButton from "../LoginButton";
import UserIcon from "../UserIcon";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../UserIcon", () => () => <div>UserIcon</div>);

describe("LoginButton", () => {
  it("renders login text when not logged in", () => {
    render(<LoginButton isLoggedIn={false} />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders username and UserIcon when logged in", () => {
    render(<LoginButton isLoggedIn={true} username="JohnDoe" />);
    expect(screen.getByText("JohnDoe")).toBeInTheDocument();
    expect(screen.getByText("UserIcon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<LoginButton isLoggedIn={false} onClick={handleClick} />);
    fireEvent.click(screen.getByText("Login"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("navigates to /login when clicked", () => {
    render(<LoginButton isLoggedIn={false}></LoginButton>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/login");
  });
});
