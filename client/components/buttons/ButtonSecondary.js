import React from "react";

export default function ButtonSecondary({
  children,
  type = "button",
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 text-base font-light px-[.9rem] py-[.31rem] text-eden-500 bg-transparent rounded-[.75rem] hover:bg-eden-700 hover:text-white transition border border-eden-700"
    >
      {children}
    </button>
  );
}
