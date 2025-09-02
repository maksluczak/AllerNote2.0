"use client";

import React, { useState, useEffect } from "react";
import { formatDate } from "@/utils/date";
import CustomRadio from "./CustomRadio";
import CustomRadioToEdit from "./CustomRadioToEdit";
import ButtonSecondary from "../buttons/ButtonSecondary";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function SymptomsNote({ selectedDate }) {
  const today = new Date();
  const selectedDateToString = formatDate(selectedDate);

  const { user } = useAuth();

  const [samopoczucie, setSamopoczucie] = useState(null);
  const [bolGlowy, setBolGlowy] = useState(null);
  const [katar, setKatar] = useState(null);
  const [nos, setNos] = useState(null);
  const [oko, setOko] = useState(null);
  const [kaszel, setKaszel] = useState(null);
  const [note, setNote] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [noteExists, setNoteExists] = useState(false);

  const SYMPTOMS = [
    {
      symptom: "samopoczucie",
      currentValue: samopoczucie,
      stateSetter: setSamopoczucie,
    },
    {
      stateSetter: setBolGlowy,
      currentValue: bolGlowy,
      symptom: "ból głowy",
    },
    {
      stateSetter: setKatar,
      currentValue: katar,
      symptom: "katar",
    },
    {
      stateSetter: setNos,
      currentValue: nos,
      symptom: "swędzenie oczu",
    },
    {
      stateSetter: setOko,
      currentValue: oko,
      symptom: "swędzenie nosa",
    },
    {
      stateSetter: setKaszel,
      currentValue: kaszel,
      symptom: "kaszel",
    },
  ];

  useEffect(() => {
    if (!user) return;

    const fetchNote = async () => {
      try {
        const data = await apiFetch(`/note/${selectedDateToString}`);

        if (data && data.note) {
          const n = data.note;
          setSamopoczucie(n.wellBeing);
          setBolGlowy(n.headache);
          setKatar(n.runnyNose);
          setNos(n.itchyNose);
          setOko(n.itchyEyes);
          setKaszel(n.cough);
          setNote(n.freeNote || "");
          setNoteExists(true); 
        } else {
          resetForm();
        }
      } catch (err) {
        if (err.message === "API error 404") {
          setNoteExists(false);
          resetForm();
        } else {
          console.error("Brak notatki lub błąd pobierania:", err.message);
          resetForm();
        }
      }
    };

    fetchNote();
  }, [selectedDateToString, user]);

  const resetForm = () => {
    setSamopoczucie(null);
    setBolGlowy(null);
    setKatar(null);
    setNos(null);
    setOko(null);
    setKaszel(null);
    setNote("");
    setNoteExists(false);
    setIsEditing(false);
  };

  async function submitHandler(e) {
    e.preventDefault();
    setIsEditing(false);

    const body = {
      well_being: samopoczucie,
      headache: bolGlowy,
      runny_nose: katar,
      itchy_nose: nos,
      itchy_eyes: oko,
      cough: kaszel,
      free_note: note,
      note_date: selectedDateToString
    };

    try {
      if (noteExists) {
        await apiFetch(`/note/${selectedDateToString}`, {
          method: "PUT",
          body: JSON.stringify(body),
        });
        console.log("Zaktualizowano notatkę");
      } else {
        await apiFetch(`/note/${selectedDateToString}`, {
          method: "POST",
          body: JSON.stringify(body),
        });
        setNoteExists(true);
        console.log("Utworzono nową notatkę");
      }
    } catch (err) {
      console.error("Błąd zapisu notatki:", err.message);
    }
  }

  function isToday(date) {
    const selected = new Date(date);
    return (
      today.getFullYear() === selected.getFullYear() &&
      today.getMonth() === selected.getMonth() &&
      today.getDate() === selected.getDate()
    );
  }

  if (!user) return <p>Musisz być zalogowany, aby dodać notatkę.</p>;

  return (
    <section className="flex flex-col">
      <header className="mb-9">
        <h1 className="flex justify-between items-center text-3xl font-bold">
          {selectedDateToString}
          {selectedDate < today && !isToday(selectedDate) && (
            <ButtonSecondary>
              Co niósł wiatr?{" "}
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
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </ButtonSecondary>
          )}
          {isToday(selectedDate) && (
            <ButtonSecondary>
              Co niesie wiatr?{" "}
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
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </ButtonSecondary>
          )}
        </h1>
      </header>
      <form className="flex flex-col gap-8 ">
        <div>
          <header className="mb-2">
            <h2 className="text-xl first-line:italic">MOJE OBIAWY:</h2>
          </header>
          <div className="lg:pr-16">
            {SYMPTOMS.map(({ stateSetter, currentValue, symptom }) =>
              isEditing ? (
                <CustomRadio
                  key={symptom}
                  stateSetter={stateSetter}
                  currentValue={currentValue}
                  symptom={symptom}
                />
              ) : (
                <CustomRadioToEdit
                  key={symptom}
                  symptom={symptom}
                  currentValue={currentValue}
                />
              )
            )}
          </div>
        </div>

        <div>
          <header className="mb-2 mt-5">
            <h2 className="text-xl italic">NOTATKA:</h2>
          </header>

          {isEditing ? (
            <textarea
              id="userNote"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="5"
              className="block mt-0.5 p-1.5 w-full h-44 text-sm border bg-white rounded-lg resize-none shadow-md"
              placeholder="Dzisiaj czuję się..."
            ></textarea>
          ) : (
            <textarea
              disabled
              id="userNote"
              value={note}
              rows="5"
              className="block mt-0.5 p-1.5 w-full h-44 text-sm border bg-white rounded-lg resize-none shadow-md"
              placeholder="Dzisiaj czuję się..."
            ></textarea>
          )}
        </div>
        <div className="ml-auto flex gap-5">
          {!isEditing ? (
            <ButtonPrimary style="green" onClick={() => setIsEditing(true)}>
              Edytuj
            </ButtonPrimary>
          ) : (
            <>
              <ButtonPrimary
                type="reset"
                style="red"
                onClick={() => setIsEditing(false)}
              >
                Anuluj
              </ButtonPrimary>
              <ButtonPrimary
                type="submit"
                style="green"
                onClick={submitHandler}
              >
                Zapisz
              </ButtonPrimary>
            </>
          )}
        </div>
      </form>
    </section>
  );
}
