import React from "react";

/**
 *
 * @param {intensity} 0 | 1 | 2 intensity of the allergen in the selected area
 * @returns
 */
export default function IntensityLabel({ intensity = 0 }) {
  const textLabel = ["Niskie", "Umiarkowane", "Wysokie"];
  const bgColor = ["bg-[#C3FFD6]", "bg-[#BAEBFF]", "bg-[#FFCFCF]"];
  const textColor = ["text-[#37503F]", "text-[#364950]", "text-[#513737]"];
  return (
    <div
      className={`${bgColor[intensity]} ${textColor[intensity]} px-4 py-1 font-bold rounded-full w-fit`}
    >
      {textLabel[intensity]}
    </div>
  );
}
