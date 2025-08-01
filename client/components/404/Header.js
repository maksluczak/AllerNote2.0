import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[1] flex flex-col gap-10 items-center ">
      <h1 className="flex  text-eden-700 text-[20rem] leading-none font-bold ">
        <span className="block animate-[404-jump_9s_ease-in-out_infinite_1s]">
          4
        </span>
        <span className="block animate-[404-jump_9s_ease-in-out_infinite_1.1s]">
          0
        </span>
        <span className="block animate-[404-jump_9s_ease-in-out_infinite_1.2s]">
          4
        </span>
      </h1>
      <div>
        <Link
          href="/"
          className="block px-[2.1rem] py-[.7rem]  rounded-[1.13rem] transform hover:scale-105 transition-transform bg-eden-700 text-white
          "
        >
          Powrót na stronę główną
        </Link>
      </div>
    </header>
  );
}
