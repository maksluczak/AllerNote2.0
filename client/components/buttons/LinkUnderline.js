import React from "react";
import Link from "next/link";

export default function LinkUnderline({ text, href }) {
  return (
    <Link
      href={href}
      className="text-white opacity-85 underline hover:opacity-100 transition-opacity"
    >
      {text}
    </Link>
  );
}
