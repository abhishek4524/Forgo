import React from "react";
import ctaBg from "../assets/cta-bg.png";
import { PlayIcon } from "@heroicons/react/24/solid";


const GamifiedCTASection = () => {
  return (
    <section className="py-24 flex justify-center">
      <div
        className="relative w-[90%] max-w-5xl 
        bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500
        rounded-3xl p-8 md:p-14 text-center
        shadow-xl overflow-hidden"
      >
        {/* Background Pattern Image */}
        <img
          src={ctaBg}
          alt="finance pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Soft Glow Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-400 opacity-20 blur-3xl rounded-full"></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Ready to start your <br />
            financial adventure?
          </h2>

          {/* Subtext */}
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
            Join Forgo Now! Many students already mastering their future.
            It's free, it's fun, and it pays off.
          </p>

          {/* CTA Button */}
          <button
            className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-3 rounded-full 
            font-semibold text-lg shadow-md 
            hover:scale-105 hover:shadow-lg 
            transition duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <PlayIcon className="w-5 h-5" />
              Start Playing Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamifiedCTASection;
