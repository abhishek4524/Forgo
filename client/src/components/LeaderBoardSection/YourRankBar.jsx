import { TrendingUp } from "lucide-react";

const YourRankBar = ({ rank, points, userName, avatar, campus }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-gradient-to-r from-[#1e90ff] to-[#2563eb] shadow-[0_12px_40px_rgba(37,99,235,0.4)] rounded-2xl md:rounded-3xlpx-5 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-white z-50">
      {/* Left Content */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-12 text-sm md:text-base text-center md:text-left">

        {/* Rank */}
        <div className="flex items-center gap-2">
          <span className="text-white/70 font-medium tracking-wide">
            YOUR RANK:
          </span>
          <span className="text-lg md:text-xl font-bold">
            #{rank}
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2">
          <img
            src={avatar}
            alt="avatar"
            className="h-8 w-8 md:h-9 md:w-9 rounded-full border-2 border-white object-cover"
          />
          <span className="font-semibold">
            {userName} <span className="text-white/70">(You)</span>
          </span>
        </div>

        {/* Campus */}
        <div className="flex items-center gap-2">
          <span className="text-white/70 font-medium">
            CAMPUS:
          </span>
          <span className="font-semibold">
            {campus}
          </span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2">
          <span className="text-white/70 font-medium">
            SCORE:
          </span>
          <span className="text-xl md:text-2xl font-bold text-yellow-300">
            {points}
          </span>
          <span className="text-white/80 font-medium">
            pts
          </span>
        </div>

      </div>

      {/* Button */}
      <button className=" flex items-center justify-center gap-2 bg-white text-blue-600 px-5 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base hover:scale-105 hover:shadow-lg transition-all duration-300 w-full md:w-auto">
        <TrendingUp className="w-4 h-4" />
        Improve Score
      </button>
    </div>
  );
};

export default YourRankBar;
