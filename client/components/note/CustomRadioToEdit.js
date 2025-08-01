"use client";

const CustomRadioToEdit = ({ currentValue, symptom }) => {
  return (
    <div className="flex justify-between items-center gap-12 my-2">
      <div className="flex text-left text-base leading-none">{symptom}:</div>
      <div className="flex gap-1 items-center lg:gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            className={`block rounded-full px-3 py-3 ${
              currentValue >= value
                ? "bg-eden-700"
                : "bg-white shadow-inner"
            }`}
            disabled
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioToEdit;
