"use client";
import React, { useState } from "react";
import Link from "next/link";
import Grass from "./Grass";

export default function Badge() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section
      className={`mx-auto relative flex flex-col items-start gap-7 bg-eden-700 text-white rounded-2xl p-5 pt-12 md:pl-8 md:pr-72 md:py-7 max-w-[50rem] ${
        !isOpen ? "hidden" : "flex"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="block absolute right-3 top-3 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <header>
        <h3 className="text-3xl  font-bold relative  z-[1]">
          Trawa kosi ludzi na potęgę
        </h3>
      </header>
      <p className="text-gray-200 max-w-[30rem] relative z-[1]">
        Trawa zbiera swoje żniowo, jeżeli jesteś na nią uczulony, chowaj
        się gdzie możesz!
      </p>
      <Link
        href="/alergeny"
        className="relative block px-[.94rem] py-[.38rem]  rounded-[.75rem] transform hover:scale-105 transition-transform text-eden-500 bg-white z-[1]"
      >
        Inne pyłki dzisiaj
      </Link>
      <div className="absolute left-0 bottom-0 w-full opacity-10">
        <Grass />
      </div>
    </section>
  );
}
