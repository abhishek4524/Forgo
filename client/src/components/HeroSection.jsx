import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const words = ["Invest.", "Compete.", "Strategize.", "Dominate."];
  const [index, setIndex] = useState(0);
  const [worth, setWorth] = useState(128639);
  const [hovered, setHovered] = useState(false);

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
            A gamified finance simulator for students. Unlock community access at
            higher levels. Chat. Compete. Strategize with top financial players.
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

        {/* RIGHT SIDE – Dashboard Preview */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`bg-white p-6 rounded-3xl shadow-2xl transition-all duration-500 ${
              hovered ? "scale-105 rotate-1" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">
                👑 Future Mogul
              </h3>
              <span className="text-xs bg-[#03bafc]/10 text-[#03bafc] px-3 py-1 rounded-full">
                Level 7
              </span>
            </div>

            {/* Virtual Net Worth */}
            <div className="mt-6">
              <p className="text-sm text-slate-500">Virtual Net Worth</p>
              <p className="text-4xl font-extrabold text-slate-900">
                ₹ {worth.toLocaleString()}
              </p>
            </div>

            {/* Micro Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#f4faff] p-3 rounded-xl">
                <p className="text-xs text-slate-500">XP</p>
                <p className="font-bold">8,530</p>
              </div>

              <div className="bg-[#f4faff] p-3 rounded-xl">
                <p className="text-xs text-slate-500">Rank</p>
                <p className="font-bold">#245</p>
              </div>

              <div className="bg-[#f4faff] p-3 rounded-xl">
                <p className="text-xs text-slate-500">Badges</p>
                <p className="font-bold">12</p>
              </div>
            </div>

            {/* Realistic Animated Chart */}
            <div className="mt-6 p-4 bg-[#f4faff] rounded-xl relative overflow-hidden">
              {/* Title */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold text-slate-600">
                  Portfolio Growth
                </span>
                <span className="text-xs text-green-600 font-bold">+12.4%</span>
              </div>

              {/* SVG Chart */}
              <svg viewBox="0 0 300 100" className="w-full h-28">
                {/* Grid Lines */}
                {[0, 25, 50, 75].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                ))}

                {/* Glow Line */}
                <path
                  d="M0 80 Q50 60 100 65 T200 40 T300 30"
                  fill="none"
                  stroke="#03bafc"
                  strokeWidth="3"
                  className="drop-shadow-[0_0_6px_rgba(3,186,252,0.6)]"
                  strokeDasharray="500"
                  strokeDashoffset="500"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="500"
                    to="0"
                    dur="1.8s"
                    fill="freeze"
                  />
                </path>

                {/* Filled Area */}
                <path
                  d="M0 80 Q50 60 100 65 T200 40 T300 30 L300 100 L0 100 Z"
                  fill="url(#grad)"
                  opacity="0.3"
                />

                {/* Gradient Def */}
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#03bafc" />
                    <stop offset="100%" stopColor="#0b64ff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Profit Tag */}
              <div className="absolute top-10 right-6 bg-white shadow-md px-3 py-1 rounded-full text-xs font-semibold text-[#03bafc]">
                ₹ +4,320
              </div>
            </div>
          </div>

          {/* Decorative Floating Coin */}
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
            💰
          </div>
        </div>
      </div>
    </section>
  );
}
