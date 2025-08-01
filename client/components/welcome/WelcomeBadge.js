"use client";
import Link from "next/link";

export default function WelcomeBadge() {
  return (
    <section 
      className="mx-auto relative flex flex-col items-center gap-7 bg-eden-700 text-white rounded-2xl 
      lg:px-40 lg:py-16 md:px-20 md:py-10 px-12 py-5 max-w-[50rem]">
      <h1 className="text-2xl lg:text-4xl font-bold">
        Dołącz do nas już dziś!
      </h1>
      <hr className=" bg-white w-1/2 border-40"></hr>
      <p className="text-gray-200 max-w-[30rem] text-center">
        Zobacz co pyli w konkretnym województwie lub stwórz darmowe konto i ciesz się pełnią możliwości AllerNote.
      </p>
      <div className="flex flex-row justify-around gap-10">
        <Link
        href="/alergeny"
        className="text-white underline pt-2"
        >
            Lista pyłków
        </Link>
        <Link
        href="/rejestracja"
          className="px-6 py-2 rounded-xl bg-white text-eden-500 hover:scale-105 transition-transform"
        >
          Zarejestruj się
        </Link>
      </div>
    </section>
  );
}
