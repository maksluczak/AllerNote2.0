"use client";

import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NoteAnimatedSVG({ timeline }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.set(".N", { strokeDasharray: 2372 });
      gsap.set(".O", { strokeDasharray: 1000 });
      gsap.set(".T", { strokeDasharray: 1212 });
      gsap.set(".E", { strokeDasharray: 1360 });
      gsap.set(container.current, { autoAlpha: 1 });

      timeline &&
        timeline
          .fromTo(
            ".N",
            {
              strokeDashoffset: 2380,
            },
            {
              strokeDashoffset: 0,
              duration: 2.5,
            },
            "start"
          )
          .fromTo(
            ".O",
            { strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 2 },
            "start"
          )
          .fromTo(
            ".T",
            { strokeDashoffset: 1212 },
            { strokeDashoffset: 0, duration: 2 },
            "start"
          )
          .fromTo(
            ".E",
            { strokeDashoffset: 1360 },
            { strokeDashoffset: 0, duration: 2 },
            "start"
          );
    },
    { scope: container, dependencies: [timeline] }
  );
  return (
    <div ref={container} className="flex gap-2 items-end invisible ">
      {/* N */}
      <svg
        className="N block w-[20vw] h-fit"
        width="329"
        height="412"
        viewBox="0 0 329 412"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5V411.5H81V132.5L250.5 411.5H328V0.5H250.5V273L81 0.5H1Z"
          stroke="black"
        />
      </svg>
      {/* O */}
      <svg
        className="O block w-[17vw] h-fit"
        width="310"
        height="305"
        viewBox="0 0 310 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 159.5C1 249.9 80 304.5 153 304.5C247.5 304.5 309.5 238 309.5 153.5C309.5 69 244 0.5 160 0.5C76 0.5 1 46.5 1 159.5Z"
          stroke="black"
        />
        <path
          d="M74.5 156.165C74.5 203.489 115.857 232.072 154.072 232.072C203.543 232.072 236 197.259 236 153.024C236 108.788 201.711 72.928 157.737 72.928C113.763 72.928 74.5 97.009 74.5 156.165Z"
          stroke="black"
          strokeWidth="0.523501"
        />
      </svg>
      {/* T */}
      <svg
        className="T block w-[12vw] h-fit"
        width="178"
        height="413"
        viewBox="0 0 178 413"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37 48L117 1L116.5 106.5H170V169.5H116.5C117.167 203.667 118.1 281.4 116.5 319C114.9 356.6 151.5 348 170 339L177 400C53 439.5 37 374 37 339.5V169.5H1V106.5H37V48Z"
          stroke="black"
        />
      </svg>
      {/* E */}
      <svg
        className="E block w-[17vw] h-fit"
        width="281"
        height="312"
        viewBox="0 0 281 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M134 0.5C263.2 0.5 284.833 118.167 279.5 177H79.4999C91.0999 275.8 181 260.5 197 212L275.5 225.5C213.024 361 16.5 328.5 1.49975 177C-3.35177 128 10.9998 0.5 134 0.5Z"
          stroke="black"
        />
        <path
          d="M200.5 130C207.5 56.5001 93.5 17 80 130H200.5Z"
          stroke="black"
        />
      </svg>
    </div>
  );
}
