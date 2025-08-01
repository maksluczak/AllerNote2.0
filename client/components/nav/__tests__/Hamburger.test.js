import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hamburger from "../Hamburger";

jest.mock("../MenuIcon", () => () => <div>MenuIcon</div>);
jest.mock("../CloseIcon", () => () => <div>CloseIcon</div>);

describe("Hamburger component", () => {
  it("renders MenuIcon when isClicked is false", () => {
    const { getByText } = render(
      <Hamburger onClickHandler={() => {}} isClicked={false} />
    );
    expect(getByText("MenuIcon")).toBeInTheDocument();
  });

  it("renders CloseIcon when isClicked is true", () => {
    const { getByText } = render(
      <Hamburger onClickHandler={() => {}} isClicked={true} />
    );
    expect(getByText("CloseIcon")).toBeInTheDocument();
  });

  it("calls onClickHandler when button is clicked", () => {
    const onClickHandler = jest.fn();
    const { getByRole } = render(
      <Hamburger onClickHandler={onClickHandler} isClicked={false} />
    );
    fireEvent.click(getByRole("button"));
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  it("applies correct classes based on isClicked prop", () => {
    const { container, rerender } = render(
      <Hamburger onClickHandler={() => {}} isClicked={false} />
    );
    expect(container.querySelector("div").className).toContain("translate-y-0");

    rerender(<Hamburger onClickHandler={() => {}} isClicked={true} />);
    expect(container.querySelector("div").className).toContain(
      "translate-y-full"
    );
  });
});
