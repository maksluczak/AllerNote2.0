"use client";

import ServicePattern from "./ServicePattern";

export default function Services() {
  const ServicesPatterns = [
    {
        header: "Ocenę objawów",
        description: `AllerNote umożliwia użytkownikowi prowadzenie\n 
                    codziennych notatek dotyczących samopoczucia,\n 
                    objawów alergii oraz zażywanych leków.`,
        icon: ""
    },
    {
        header: "Mapę pylenia", 
        description: `Dzięki AllerNote możesz sprawdzić, które alergeny są\n
                    najbardziej aktywne w danym czasie i zrozumieć,\n
                    co może wpływać na nasilenie objawów.`,
        icon: ""
    },
    {
        header: "Kalendarz alergika",
        description: `W AllerNote możesz zapisywać i przeglądać swoje notatki w formie kalendarza.\n
                    Ułatwia to analizę stanu zdrowia w kontekście wcześniejszych objawów,\n
                    oferując szybki dostęp do danych z przeszłości.`,
        icon: ""
    }
  ]
  return (
    <section className="flex flex-col self-start">
        <h1 className="text-lg font-bold text-eden-700 left-0 mb-4">Funkcjonalności</h1>
        <h2 className="text-2xl text-black">AllerNote oferuje</h2>
        <div className="flex flex-col gap-4">
          {ServicesPatterns.map((service, index) => (
            <div key={index}>
              {ServicePattern(
                service.header,
                service.description, 
                service.icon
              )}
            </div>
          ))}
        </div>
    </section>
  );
}