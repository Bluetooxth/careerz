import React from "react";
import { Sparkles, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex justify-center items-center w-full min-h-screen">
      <div className="lg:container mx-auto px-5 py-16 flex justify-center items-center w-full">
        <div className="grid grid-cols-1 gap-8 text-center max-w-2xl">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="px-5 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 backdrop-blur-3xl text-sm flex items-center gap-2">
              <Sparkles size={16} className="text-sky-500" />
              Professional Career Guidance
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium flex flex-col justify-center items-center">
              <span>Own Your Career</span>
              <span className="bg-gradient-to-bl from-slate-50 to-sky-400 text-transparent bg-clip-text font-primary">
                With Confidence
              </span>
            </h1>
            <p className="text-lg max-w-2xl">
              Expert guidance to unlock your potential and achieve success.
            </p>
            <button className="px-5 py-2 rounded-xl bg-gradient-to-b from-sky-500 to-sky-700 text-white text-lg font-normal cursor-pointer flex items-center gap-2">
              Book a Session
              <Calendar size={24} className="" />
            </button>
          </div>
          <div className="flex justify-center items-center rounded-xl overflow-hidden bg-sky-500/15 backdrop-blur-3xl p-0.5">
            <img
              src="/assets/hero.avif"
              alt="Careerz Hero"
              className="w-full md:max-h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
