"use client";
import React, { useEffect } from "react";
import InputBox from "./InputBox";
import ButtonPrimary from "../buttons/ButtonPrimary";
import LinkUnderline from "../buttons/LinkUnderline";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

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

  const { login } = useAuth();

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
      alert("Uzupełnij wszystkie pola.");
      return;
    } else if (!registration && (!inputEmail || !inputPassword)) {
      alert("Uzupełnij wszystkie pola.");
      return;
    }

    if (registration && inputPassword !== inputRepeatedPassword) {
      alert("Hasła się nie zgadzają.");
      return;
    }

    try {
      const path = `${registration ? "/auth/register" : "/auth/login"}`;
      const body = registration
        ? { username: inputName, email: inputEmail, password: inputPassword }
        : { email: inputEmail, password: inputPassword };

      const res = await fetch(`http://localhost:8080${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Błąd:", err.message || res.statusText);
        alert(err.message || "Błąd logowania/rejestracji");
        return;
      }

      const data = await res.json();

      if (registration) {
        alert("Zarejestrowano pomyślnie. Zaloguj się.");
        clearInputs();
        router.push("/login");
      } else {
        login(data.token);
        clearInputs();
        router.push("/kalendarz");
      }
    } catch (err) {
      console.error("Błąd:", err);
      alert("Błąd serwera.");
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
          id="nickname"
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
          label="hasło"
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
