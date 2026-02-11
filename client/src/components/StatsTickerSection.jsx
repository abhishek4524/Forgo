import React, { useEffect, useRef, useState } from "react";

export default function StatsTickerSection() {
  const containerRef = useRef(null);

  const [players, setPlayers] = useState(12540);
  const [earnings, setEarnings] = useState(24000000);
  const [rating] = useState(4.8);
  const [highlightIndex, setHighlightIndex] = useState(null);

  /* ===========================
     Live Data Simulation
  ============================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers((p) => p + Math.floor(Math.random() * 5));
      setEarnings((e) => e + Math.floor(Math.random() * 10000));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ===========================
     Random Highlight Pulse
  ============================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(Math.floor(Math.random() * 6));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ===========================
     Scroll Reveal
  ============================ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Active Players",
      value: `👥 ${players.toLocaleString()}`,
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      label: "Virtual Earnings",
      value: `💰 ₹ ${(earnings / 10000000).toFixed(2)}Cr`,
      gradient: "from-green-400 to-emerald-400",
    },
    {
      label: "Colleges",
      value: "🏫 85+",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      label: "Rating",
      value: `⭐ ${rating}`,
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      label: "Retention",
      value: "🔥 92%",
      gradient: "from-red-400 to-pink-400",
    },
    {
      label: "Daily Matches",
      value: "⚔️ 3,420",
      gradient: "from-indigo-400 to-blue-500",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-linear-to-br from-[#eef7ff] via-white to-[#dff3ff] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-20 left-0 w-120 h-120 bg-[#03bafc]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-400/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Trusted. Competitive. Growing.
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Thousands of students are building their financial identity daily.
        </p>
      </div>

      {/* Stats Grid */}
      <div
        ref={containerRef}
        className="relative opacity-0 translate-y-6 transition-all duration-1000 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative group transition-all duration-500 ${
              highlightIndex === index ? "scale-105" : ""
            }`}
          >
            <div className="relative p-0.5 rounded-3xl bg-linear-to-r from-transparent via-white/30 to-transparent">
              {/* Animated Gradient Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-linear-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition duration-500 blur-xl`}
              ></div>

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-xl px-10 py-8 rounded-3xl shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Shine Sweep */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute -left-32 top-0 w-40 h-full bg-white/40 rotate-12 opacity-0 group-hover:opacity-60 transition-all duration-700 animate-shine"></div>
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Shine Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(12deg);
          }
          100% {
            transform: translateX(300%) rotate(12deg);
          }
        }
        .animate-shine {
          animation: shine 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
