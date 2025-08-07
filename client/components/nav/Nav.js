"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import LoginButton from "./LoginButton";
import { useAuth } from "@/context/AuthContext";

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);
  const submenuRef = useRef(null);
  const [userProfile, setUserProfile] = useState(null);

  const { user } = useAuth();

  const fetchUserById = async () => {
    if (!user.id) return;
    try {
      const res = await fetch(`http://localhost:8080/user/${user.id}`);
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Failed to fetch user details:', errorData);
        throw new Error(`HTTP error! ${res.status}`);
      }
      const data = await res.json();
      setUserProfile({ username: data.username });
      setIsLoggedIn(true);
    } catch (err) {
      console.error(`Error fetching user details: ${err.message}`);
    }
  }

  useEffect(() => {
    if (user?.id) {
      fetchUserById();
    } else {
      setIsLoggedIn(null);
    }
  }, [user?.id]);

  function clickOutsideHandler(e) {
    if (submenuRef.current && !submenuRef.current.contains(e.target)) {
      setSubmenuIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", (e) => clickOutsideHandler(e));
    return () => {
      document.removeEventListener("mousedown", (e) => clickOutsideHandler(e));
    };
  }, []);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-sm z-[9999]">
      <div className="body-spacing flex justify-between items-center  py-3">
        <Link href="/">
          <Image src="/logo.png" width={40} height={30} alt="" />
        </Link>

        <Hamburger
          onClickHandler={() => setNavIsOpen((prev) => !prev)}
          isClicked={navIsOpen}
        />

        <ul
          className={`flex flex-col items-start absolute p-2 bg-white top-[calc(100%+1rem)] right-4 shadow-md rounded-md transform ${
            navIsOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[calc(100%+1.1rem)] opacity-0 md:translate-x-0 md:opacity-100"
          } transition-all md:flex-row md:gap-3 md:p-0 md:items-center md:static md:bg-transparent md:shadow-none md:rounded-none`}
        >
          {isLoggedIn && (
            <>
              <li className="block">
                <Link href="/kalendarz" className="block w-full p-2 text-left">
                  Kalendarz
                </Link>
              </li>
            </>
          )}
          <li className="block">
            <Link href="/alergeny" className="block w-full p-2 text-left">
              Co niesie wiatr?
            </Link>
          </li>
          <li className="block">
            <Link href="/ustawienia" className="block w-full p-2 text-left">
              Ustawienia
            </Link>
          </li>
          <li className="flex flex-col-reverse md:relative">
            <div className="flex justify-center border-t pt-4 mt-2 md:pt-0 md:mt-0 md:ml-4 md:peer">
              <LoginButton
                ref={submenuRef}
                onClick={() => {
                  if (isLoggedIn) setSubmenuIsOpen((prev) => !prev);
                }}
                isLoggedIn={isLoggedIn}
                username={userProfile}
              />
            </div>
            <ul
              className={`md:flex md:flex-col md:items-start md:absolute md:p-2 md:bg-white md:top-[calc(100%+1.5rem)] md:right-0 md:shadow-md md:rounded-md md:transform ${
                submenuIsOpen
                  ? "md:visible md:translate-y-0 md:opacity-100 submenu-transition-in"
                  : "md:invisible md:-translate-y-5 md:opacity-0 submenu-transition-out"
              } `}
            >
              {/* <li className="block border-t pt-2 mt-2 md:pt-0 md:mt-0 md:border-t-0">
                <Link href="/ustawienia" className="block w-full p-2 text-left">
                  Ustawienia
                </Link>
              </li> */}
              {isLoggedIn && (
                <li className="block">
                  <button
                    onClick={() => {
                      console.log("alskdfj");
                      setIsLoggedIn(false);
                    }}
                    className="block w-full p-2 text-left"
                  >
                    Wyloguj
                  </button>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
