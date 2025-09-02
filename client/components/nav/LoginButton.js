import React from "react";
import UserIcon from "./UserIcon";
import Link from "next/link";

export default function LoginButton({ isLoggedIn, username, onClick, ref }) {

  if (isLoggedIn) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-turquoise-500 to-eden-700 text-white rounded-[.8rem] font-semibold md:transform md:hover:scale-105 md:transition-transform"
      >
        <span>{username}</span>
        <span className="block w-6">
          <UserIcon />
        </span>
      </button>
    );
  }

  return (
    <Link
      href="/login"
      ref={ref}
      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-turquoise-500 to-eden-700 text-white rounded-[.8rem] font-semibold md:transform md:hover:scale-105 md:transition-transform"
    >
      <span>Login</span>
    </Link>
  );
}
