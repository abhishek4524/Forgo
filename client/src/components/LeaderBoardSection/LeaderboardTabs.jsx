import { useState } from "react";

const LeaderboardTabs = () => {
  const [activeTab, setActiveTab] = useState("Global");

  const tabs = ["Global", "Community"];

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-blue-100 p-1 rounded-full flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "text-blue-600 hover:bg-blue-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTabs;
