import React from "react";

export default function VoivodeshipSelect() {
  const VOIVODESHIPS = [
    { name: "Dolnośląskim", value: "dolnoslaskim" },
    { name: "Kujawsko-pomorskim", value: "kujawsko-pomorskim" },
    { name: "Lubelskim", value: "lubelskim" },
    { name: "Lubuskim", value: "lubuskim" },
    { name: "Małopolskim", value: "malopolskim" },
    { name: "Mazowieckim", value: "mazowieckim" },
    { name: "Opolskim", value: "opolskim" },
    { name: "Podkarpackim", value: "podkarpackim" },
    { name: "Podlaskim", value: "podlaskim" },
    { name: "Pomorskim", value: "pomorskim" },
    { name: "Śląskim", value: "slaskim" },
    { name: "Świętokrzyskim", value: "swietokrzyskim" },
    { name: "Warmińsko-mazurskim", value: "warminsko-mazurskim" },
    { name: "Wielkopolskim", value: "wielkopolskim" },
    { name: "Zachodniopomorskim", value: "zachodniopomorskim" },
  ];
  return (
    <div>
      <select
        defaultValue={VOIVODESHIPS[4].value}
        name="voivodeship"
        className="block rounded-lg px-3 py-2 border-2 border-turquoise-500 bg-transparent"
      >
        {VOIVODESHIPS.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
