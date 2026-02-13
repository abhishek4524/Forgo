import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const [netWorth, setNetWorth] = useState(128754);
  const [xp, setXp] = useState(8530);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(72);
  const [showAchievement, setShowAchievement] = useState(false);

  /* =====================================
     Fake Live Updates
  ===================================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setNetWorth((prev) => prev + Math.floor(Math.random() * 120));
      setXp((prev) => prev + Math.floor(Math.random() * 8));

      setProgress((p) => {
        if (p >= 98) {
          setLevel((l) => l + 1);
          setShowAchievement(true);
          setTimeout(() => setShowAchievement(false), 2000);
          return 10;
        }
        return p + Math.random() * 2;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* =====================================
     Chart Data
  ===================================== */
  const chartData = [
    { month: "Jan", value: 90000 },
    { month: "Feb", value: 102000 },
    { month: "Mar", value: 110000 },
    { month: "Apr", value: 118000 },
    { month: "May", value: 128000 },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#111827] to-[#0f172a] text-white p-8 relative overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-160 h-160 bg-cyan-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-160 h-160 bg-purple-500/20 blur-[180px] rounded-full"></div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          👑 Future Mogul
        </h1>

        <div className="px-6 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-md">
          Level {level}
        </div>
      </div>

      {/* NET WORTH PANEL */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl mb-12">

        <p className="text-cyan-300 text-sm uppercase tracking-widest">
          Virtual Net Worth
        </p>

        <h2 className="text-6xl font-extrabold mt-5 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ₹ {netWorth.toLocaleString()}
        </h2>

        <p className="text-green-400 mt-2 font-semibold">
          +12.4% this week 🚀
        </p>

        {/* Level Progress */}
        <div className="mt-10">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Progress</span>
            <span>{Math.floor(progress)}% to Next Level</span>
          </div>

          <div className="mt-2 h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-cyan-400 to-indigo-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* PORTFOLIO CHART */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-6">
            📊 Portfolio Growth
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ fill: "#22d3ee" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MISSIONS PANEL */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl space-y-6">

          <h3 className="text-lg font-bold text-purple-300">
            🎯 Missions
          </h3>

          <Mission title="Invest ₹5000 in Stocks" progress={80} />
          <Mission title="Beat 3 Players" progress={60} />
          <Mission title="Maintain 5 Day Streak" progress={40} />

        </div>
      </div>

      {/* LEADERBOARD + AI */}
      <div className="grid lg:grid-cols-2 gap-8 mt-16">

        {/* AI INSIGHT */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-cyan-300">
            🤖 AI Risk Insight
          </h3>
          <p className="text-slate-300">
            Your risk exposure is 12% higher than average players.
            Rebalancing into stable assets can improve sustainability.
          </p>
        </div>

        {/* LEADERBOARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-purple-300">
            🏆 Leaderboard
          </h3>

          <LeaderboardRow rank="1" name="Aarav" worth="₹ 2,43,210" />
          <LeaderboardRow rank="2" name="Zoya" worth="₹ 2,21,110" />
          <LeaderboardRow rank="3" name="Kabir" worth="₹ 1,98,420" />
          <LeaderboardRow rank="You" name="You" worth="₹ 1,28,754" highlight />
        </div>
      </div>

      {/* LIVE ACTIVITY FEED */}
      <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
        <h3 className="text-lg font-bold mb-6 text-yellow-300">
          🔔 Live Activity
        </h3>

        <LiveItem text="Zoya just crossed ₹2.2L net worth" />
        <LiveItem text="Aryan unlocked 'Market Wolf' badge" />
        <LiveItem text="Aditi gained 320 XP from Portfolio Challenge" />
        <LiveItem text="Kabir reached Level 4" />
      </div>

      {/* Achievement Popup */}
      {showAchievement && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-linear-to-r from-cyan-500 to-indigo-600 px-10 py-6 rounded-2xl text-2xl font-bold animate-bounce shadow-2xl">
            🎉 Level Up!
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function Mission({ title, progress }) {
  return (
    <div>
      <p className="text-sm text-slate-300">{title}</p>
      <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-purple-400 to-pink-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

function LeaderboardRow({ rank, name, worth, highlight }) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-xl mb-3 transition ${
        highlight
          ? "bg-cyan-500/20 border border-cyan-400/40"
          : "bg-white/5"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-bold text-sm text-cyan-300">#{rank}</span>
        <span>{name}</span>
      </div>
      <span className="font-semibold text-green-400">{worth}</span>
    </div>
  );
}

/* ========= YOUR REQUESTED LIVE ITEM COMPONENT ========= */

function LiveItem({ text }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <span className="text-slate-300">{text}</span>
    </div>
  );
}
