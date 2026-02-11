import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("How It Works");

  return (
    <nav className="w-full bg-[#03bafc] relative">
      {/* Main Nav */}
      <div className="h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Logo Icon Wrapper */}
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
            {/* Subtle Glow */}
            <span className="absolute inset-0 rounded-xl bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition duration-300"></span>

            <img
              src="/fogro.png"
              alt="Fogro Logo"
              className="h-8 w-8 relative z-10"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl pb-2 font-bold tracking-tight bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
            Fogro
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="relative flex items-center gap-2 bg-white/20 backdrop-blur-md p-1.5 rounded-full shadow-inner">
            {["How It Works", "Leaderboard", "Community"].map((item) => (
              <li key={item} className="relative">
                <button
                  onClick={() => setActive(item)}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
          ${
            active === item
              ? "text-[#03bafc]"
              : "text-white/90 hover:text-white"
          }`}
                >
                  {item}
                </button>
              </li>
            ))}

            {/* Sliding Indicator */}
            <span
              className="absolute top-1.5 bottom-1.5 bg-white rounded-full transition-all duration-200 ease-in-out"
              style={{
                left:
                  active === "How It Works"
                    ? "6px"
                    : active === "Leaderboard"
                      ? "147px"
                      : "280px",
                width:
                  active === "How It Works"
                    ? "138px"
                    : active === "Leaderboard"
                      ? "130px"
                      : "125px",
              }}
            ></span>
          </ul>
        </div>

        {/* Nav Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/login"
            className="px-5 py-2 rounded-full border font-semibold border-white text-white hover:bg-white hover:text-[#03bafc] transition"
          >
            Login
          </a>

          <a
            href="/start"
            className="px-6 py-2 rounded-full bg-white text-[#03bafc] font-semibold shadow-md hover:scale-105 transition"
          >
            Start Game
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Slide Panel */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Slide Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm 
            bg-linear-to-b from-[#03bafc] to-[#0294c9] p-8 space-y-6 shadow-2xl
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Menu Links */}
          <div className="space-y-5 mt-10">
            {["How It Works", "Leaderboard", "Community"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className={`w-full text-left text-lg font-semibold transition-all duration-300
            ${
              active === item
                ? "text-white translate-x-2"
                : "text-white/80 hover:text-white hover:translate-x-1"
            }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="pt-6 border-t border-white/20 space-y-4">
            <a
              href="/login"
              className="block w-full text-center py-3 rounded-full border border-white text-white font-semibold transition hover:bg-white hover:text-[#03bafc]"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>

            <a
              href="/start"
              className="block w-full text-center py-3 rounded-full bg-white text-[#03bafc] font-semibold shadow-md transition hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Start Game
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
