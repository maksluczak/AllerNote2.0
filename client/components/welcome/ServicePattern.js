"use client";

export default function ServicePattern(header, description, icon) {
  return (
    <section className="flex flex-col">
        <div className="flex flex-row">
            <div className="flex flex-row bg-eden-700 rounded-xl p-2">
            </div>
            <div className="flex flex-col gap-2 m-4">
                <h1 className="text-2xl font-bold ">{header}</h1>
                <p>{description}</p>
            </div>
        </div>
    </section>
  );
}