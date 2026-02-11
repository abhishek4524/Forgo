import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="relative bg-[#03bafc] h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Welcome to Fogro
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your ultimate platform for competitive programming and coding challenges. Join our vibrant community, climb the leaderboard, and sharpen your skills with engaging contests and resources.
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-3 rounded-full bg-white text-[#03bafc] font-semibold hover:bg-white/90 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection