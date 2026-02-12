import React, { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const words = ["Invest.", "Compete.", "Strategize.", "Dominate."];
  const [index, setIndex] = useState(0);
  const [worth, setWorth] = useState(128639);
  const [hovered, setHovered] = useState(false);
  const mockupRef = useRef(null);
  const containerRef = useRef(null);

  /* ===========================
     Rotating Headline Words
  ============================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  // subtle live value pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setWorth((prev) => prev + Math.floor(Math.random() * 25));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // parallax mouse
  useEffect(() => {
    const el = containerRef.current;
    const mock = mockupRef.current;
    if (!el || !mock) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      // rotate and translate a little
      const rotateX = (-y * 6).toFixed(2);
      const rotateY = (x * 10).toFixed(2);
      const translateX = (x * 8).toFixed(2);
      const translateY = (y * 6).toFixed(2);

      mock.style.transform = `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      mock.style.boxShadow = `${-translateX}px ${Math.abs(translateY)}px 40px rgba(4,24,44,0.35)`;
    }

    function onLeave() {
      mock.style.transform = `translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
      mock.style.boxShadow = `0 20px 40px rgba(4,24,44,0.25)`;
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#eef7ff] via-white to-[#dff3ff] py-24 px-6">
      {/* Ambient Glow Background */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-[#03bafc]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full bg-[#03bafc]/10 text-[#03bafc]">
            🎮 Season 1 • Finance Simulator for Students
          </span>

          <h1 className="mt-10 text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
            Play.{" "}
            <span className="bg-linear-to-r from-[#03bafc] to-[#0b64ff] bg-clip-text text-transparent transition-all duration-500">
              {words[index]}
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            A gamified finance simulator for students. Unlock community access
            at higher levels. Chat. Compete. Strategize with top financial
            players.
          </p>

          {/* Progress Hook */}
          <div className="mt-8">
            <div className="flex justify-between text-sm font-medium text-slate-700">
              <span>Level 1</span>
              <span>72% to Level 2</span>
            </div>

            <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-linear-to-r from-[#03bafc] to-[#0b64ff] w-[72%] animate-pulse rounded-full"></div>
            </div>
          </div>

          {/* Single Strong CTA */}
          <div className="mt-10">
            <a
              href="/start"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-[#03bafc] to-[#0b64ff] text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              🚀 Enter Level 1
              <span className="text-sm opacity-80">— Free to Play</span>
            </a>
          </div>
        </div>

        {/* Right: Mockup card with floating coins */}
        <div className="relative w-full max-w-md md:max-w-xl mx-auto">
          <div
            ref={mockupRef}
            className="relative rounded-2xl overflow-hidden bg-white shadow-xl transition-transform duration-300"
            style={{
              transform: "translate(0px,0px) rotateX(0deg) rotateY(0deg)",
              boxShadow: "0 20px 40px rgba(4,24,44,0.25)",
            }}
          >

            {/* Mockup image */}
            <img
              src="/Dashboard.png"
              alt="Dashboard preview"
              className="w-full h-80 object-cover"
              onDragStart={(e) => e.preventDefault()}
            />

            {/* Play overlay */}
            <button
              aria-label="Play preview"
              className="absolute left-1/2 -translate-x-1/2 bottom-5 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#03bafc] text-white font-semibold shadow-md"
            >
              ▶ Watch Preview
            </button>

            {/* Floating coins inside card */}
            <div className="pointer-events-none">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-lg animate-float">
                💰
              </div>

              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-md animate-float-slow">
                💎
              </div>

              <div className="absolute bottom-8 left-6 w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-md animate-float">
                🪙
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
