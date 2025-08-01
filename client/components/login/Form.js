"use client";
import React, { useEffect } from "react";

import InputBox from "./InputBox";
import ButtonPrimary from "../buttons/ButtonPrimary";
import LinkUnderline from "../buttons/LinkUnderline";
import { useRouter } from "next/navigation";

export default function Form({
  password,
  nickname,
  email,
  voivodship,
  btnText,
  registration = false,
}) {
  const router = useRouter();
  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputRepeatedPassword, setInputRepeatedPassword] = React.useState("");

  // console.error(registration);

  useEffect(() => {
    console.table({
      inputName,
      inputEmail,
      inputPassword,
      inputRepeatedPassword,
    });
  }, [inputName, inputEmail, inputPassword, inputRepeatedPassword]);

  async function submitHandler(e) {
    e.preventDefault();

    if (
      registration &&
      (!inputName || !inputEmail || !inputPassword || !inputRepeatedPassword)
    ) {
      console.log("Fill all fields");
      return;
    } else if (!registration && (!inputEmail || !inputPassword)) {
      console.log("Fill all fields");
      return;
    }

    if (registration && inputPassword != inputRepeatedPassword) {
      console.log("Passwords don't match");
      return;
    }
    console.log("submit");
    // senda data to server
    console.log("Data sent to server");
    registration
      ? console.table({
          inputName,
          inputEmail,
          inputPassword,
          inputRepeatedPassword,
        })
      : console.table({
          inputEmail,
          inputPassword,
        });

    try {
      const path = `${registration ? "/register" : "/auth"}`;
      const body = registration
        ? { username: inputName, email: inputEmail, password: inputPassword }
        : { email: inputEmail, password: inputPassword };

      const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON format
        },
        body: JSON.stringify(body), // Convert the body to JSON
      });

      if (!res.ok) {
        console.error(`Error: ${res.status} ${res.statusText}`);
        return;
      }

      const data = await res.json();
      console.log(data);
      // clearInputs();
      clearInputs();
      registration && router.push("/login");
      !registration && router.push("/kalendarz");
    } catch (err) {
      console.error(err);
    }
  }
  function clearInputs() {
    setInputName("");
    setInputEmail("");
    setInputPassword("");
    setInputRepeatedPassword("");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-8">
      {nickname && registration && (
        <InputBox
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          id="nicname"
          label="nazwa użytkownika"
          placeholder="Gustaw"
        />
      )}
      {email && (
        <InputBox
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          type="email"
          id="email"
          label="email"
          placeholder="example@gmail.com"
        />
      )}
      {password && (
        <InputBox
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          type="password"
          id="password"
          label="haslo"
          placeholder="**********"
        />
      )}
      {password && registration && (
        <InputBox
          value={inputRepeatedPassword}
          onChange={(e) => setInputRepeatedPassword(e.target.value)}
          type="password"
          id="repeatedPassword"
          label="powtórz hasło"
          placeholder="**********"
        />
      )}

      <div className="flex mt-8 flex-col gap-2 items-center">
        <ButtonPrimary type="submit">{btnText}</ButtonPrimary>
        {!registration && (
          <p className="text-center">
            <span className="text-white/85">Nie masz konta?</span>{" "}
            <LinkUnderline href="/rejestracja" text="Zarejestruj się" />
          </p>
        )}
      </div>
    </form>
  );
}
