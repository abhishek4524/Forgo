import React from "react";
import { GlobeAltIcon, ShareIcon } from "@heroicons/react/24/outline";

const FooterSection = () => {
  return (
    <footer className="bg-[#EBEEF1] pt-16 pb-8">
      <div className="w-[90%] max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-gray-300">

          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              Fogro
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Built with ❤️ for Students. Making finance fun,
              accessible, and rewarding.
            </p>

            <div className="flex items-center gap-4 text-gray-500">
              <GlobeAltIcon className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition" />
              <ShareIcon className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition" />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Games</li>
              <li className="hover:text-indigo-600 cursor-pointer">Curriculum</li>
              <li className="hover:text-indigo-600 cursor-pointer">Leaderboard</li>
              <li className="hover:text-indigo-600 cursor-pointer">Challenges</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
              <li className="hover:text-indigo-600 cursor-pointer">Guides</li>
              <li className="hover:text-indigo-600 cursor-pointer">Community</li>
              <li className="hover:text-indigo-600 cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Privacy</li>
              <li className="hover:text-indigo-600 cursor-pointer">Terms</li>
              <li className="hover:text-indigo-600 cursor-pointer">Cookies</li>
              <li className="hover:text-indigo-600 cursor-pointer">Security</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-xs mt-8">
          © 2026 FOGRO SIMULATION TECHNOLOGIES PVT LTD. | LEVEL UP YOUR FINANCIAL FUTURE
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
