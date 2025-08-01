import React from "react";
import IntensityLabel from "./IntensityLabel";

export default function AllergensTable() {
  const DUMMY_DATA = [
    { name: "Trawy", intensity: 2 },
    { name: "Bylica", intensity: 0 },
    { name: "Brzoza", intensity: 1 },
    { name: "Alternaria", intensity: 2 },
    { name: "Babka", intensity: 0 },
    { name: "Dąb", intensity: 1 },
    { name: "Leszczyna", intensity: 2 },
    { name: "Olsza", intensity: 1 },
    { name: "Pokrzywa", intensity: 0 },
    { name: "Szczaw", intensity: 2 },
    { name: "Topola", intensity: 1 },
    { name: "Wierzba", intensity: 0 },
  ];

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-32">
      <header className="grid gap-3 py-5 px-4 grid-cols-2 lg:grid-cols-[1fr_.7fr] border-b border-gray-200 font-light uppercase">
        <span>Nazwa</span>
        <span>Nasilenie</span>
      </header>
      <header className="hidden py-5 px-4 lg:grid gap-3 grid-cols-2 lg:grid-cols-[1fr_.7fr] border-b border-gray-200 font-light uppercase">
        <span>Nazwa</span>
        <span>Nasilenie</span>
      </header>
      {DUMMY_DATA.map(({ name, intensity }) => (
        <li
          key={name}
          className="grid gap-3 py-5 px-4 grid-cols-2 lg:grid-cols-[1fr_.7fr] items-center border-b border-gray-200"
        >
          <span>{name}</span>
          <div>
            <IntensityLabel intensity={intensity} />
          </div>
        </li>
      ))}
    </ul>
  );
}
