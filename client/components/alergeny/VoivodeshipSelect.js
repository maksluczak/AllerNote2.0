"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { apiFetch } from "@/lib/api";

export default function VoivodeshipSelect() {
  const { user } = useAuth();
  const userId = user?.id;
  const [defaultLocation, setDefaultLocation] = useState("");

  const VOIVODESHIPS = [
    { name: "Dolnośląskie", value: 0 },
    { name: "Kujawsko-pomorskie", value: 1 },
    { name: "Lubelskie", value: 2 },
    { name: "Lubuskie", value: 3 },
    { name: "Łódzkie", value: 4 },
    { name: "Małopolskie", value: 5 },
    { name: "Mazowieckie", value: 6 },
    { name: "Opolskie", value: 7 },
    { name: "Podkarpackie", value: 8 },
    { name: "Podlaskie", value: 9 },
    { name: "Pomorskie", value: 10 },
    { name: "Śląskie", value: 11 },
    { name: "Świętokrzyskie", value: 12 },
    { name: "Warmińsko-mazurskie", value: 13 },
    { name: "Wielkopolskie", value: 14 },
    { name: "Zachodniopomorskie", value: 15 },
  ];

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const res = await apiFetch(`/user/me/location/${userId}`);

        if (!res || !res.defaultLocation) {
          setDefaultLocation(4);
          return;
        }

        const userLocation = res.defaultLocation;
        const voivodeshipName = VOIVODESHIPS.find(
          (v) => v.name === userLocation
        );
        setDefaultLocation(voivodeshipName ? voivodeshipName.value : 4);
      } catch (err) {
        console.error("Błąd przy pobieraniu lokalizacji:", err);
        setDefaultLocation(4);
      }
    };
    if (user) {
      fetchUserLocation();
    } else {
      setDefaultLocation(4);
    }
  }, [user]);

  return (
    <div>
      <select
        value={defaultLocation}
        onChange={(e) => setDefaultLocation(Number(e.target.value))}
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
