"use client";

import React, { useState } from "react";
import VoivodeshipSelect2 from "@/components/alergeny/VoivodeshipSelect2";

export default function Home() {
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  return (
    <section className="flex flex-col gap-5 pt-24 pb-10 lg:min-h-[calc(100vh-40px)]">
      <header className="grid gap-3 py-5 px-4 grid-cols-2 lg:grid-cols-[1fr_.7fr] border-b border-gray-200 text-4xl font-bold">
        Ustawienia
      </header>
      
      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Nazwa użytkownika
        </label>
        <div className="relative flex items-center">
        { isEditingUsername ? (
          <input
            name="username"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="galsonhm"
          /> ) : (
            <input
            disabled
            name="username"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="galsonhm"
          /> )}
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-black"
            onClick={() => setIsEditingUsername(true)}>a</button>
            
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-black"
            onClick={() => setIsEditingUsername(false)}>b</button>
        </div>
      </div>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Email
        </label>
        <div className="relative flex items-center">
        { isEditingEmail ? (
          <input
            name="email"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="galson@gmail.com"
          /> ) : (
            <input
            disabled
            name="email"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="galson@gmail.com"
          /> )}
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-black"
            onClick={() => setIsEditingEmail(true)}>a</button>
            
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-black"
            onClick={() => setIsEditingEmail(false)}>b</button>
        </div>
      </div>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Hasło
        </label>
        <div className="relative flex items-center">
        { isEditingPassword ? (
          <input
            name="password"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="Wprowadź stare hasło"
          /> ) : (
            <input
            disabled
            name="password"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="Wprowadź stare hasło"
          /> )}
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-transparent text-transparent"
            style={{ pointerEvents: 'none' }}>a</button> 
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-transparent text-transparent"
            style={{ pointerEvents: 'none' }}>b</button> 
        </div>
        <div className="relative flex items-center mt-4">
        { isEditingPassword ? (
          <input
            name="new-password"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="Wprowadź nowe hasło"
          /> ) : (
            <input
            disabled
            name="new-password"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="Wprowadź nowe hasło"
          /> )}
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-black"
            onClick={() => setIsEditingPassword(true)}>a</button>
            
          <button 
            type="button"
            className="mx-4 px-4 py-2 rounded-full border border-black"
            onClick={() => setIsEditingPassword(false)}>b</button>
        </div>
      </div>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Województwo
        </label>
        <div className="flex items-center gap-2 md:gap-4">
          <VoivodeshipSelect2 />
        </div>
      </div>
    </section>
  );
}
