import React from "react";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

export default function Hamburger({ onClickHandler, isClicked }) {
  return (
    <button
      onClick={onClickHandler}
      className="relative overflow-hidden md:hidden"
    >
      <div
        className={`w-6 h-6 transform ${
          isClicked ? "translate-y-full" : "translate-y-0"
        } transition-transform`}
      >
        <MenuIcon />
      </div>
      <div
        className={`w-6 h-6 absolute left-0 top-0 transform ${
          isClicked ? "translate-y-0" : "-translate-y-full"
        } transition-transform`}
      >
        <CloseIcon />
      </div>
    </button>
  );
}
