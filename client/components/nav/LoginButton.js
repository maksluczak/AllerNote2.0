import React from "react";
import UserIcon from "./UserIcon";
import Link from "next/link";

export default function LoginButton({ isLoggedIn, username, onClick, ref }) {
  return (
    <Link
      href="/login"
      ref={ref}
      onClick={onClick}
      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-turquoise-500 to-eden-700 text-white rounded-[.8rem] font-semibold md:transform md:hover:scale-105 md:transition-transform"
    >
      {isLoggedIn ? (
        <>
          <span>{username}</span>
          <span className="block w-6">
            <UserIcon />
          </span>
        </>
      ) : (
        <span>Login</span>
      )}
    </Link>
  );
}
