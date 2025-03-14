import React from "react";
import { Calendar } from "lucide-react";

export default function Banner() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="lg:container mx-auto px-5 py-16 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full rounded-xl border border-sky-500/25 bg-sky-500/10 backdrop-blur-3xl py-14 gap-3">
          <h2 className="text-4xl font-medium text-white text-center">
            Unlock Your True Potential with Careerz
          </h2>
          <p className="text-lg font-normal text-center">
            Guiding professionals at every stage to achieve career success
          </p>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-b from-sky-500 to-sky-700 text-white text-lg font-normal cursor-pointer flex items-center gap-2">
            Book a Session
            <Calendar size={24} className="" />
          </button>
        </div>
      </div>
    </section>
  );
}
