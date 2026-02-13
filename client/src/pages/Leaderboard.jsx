import Navbar from "../components/Navbar";
import LeaderboardHeader from "../components/LeaderBoardSection/LeaderboardHeader";
import LeaderboardTabs from "../components/LeaderBoardSection/LeaderboardTabs";
import PodiumSection from "../components/LeaderBoardSection/PodiumSection";
import LeaderboardTable from "../components/LeaderBoardSection/LeaderboardTable";
import YourRankBar from "../components/LeaderBoardSection/YourRankBar";
import maleUserImg from "../assets/Male-Avatar.png";

const Leaderboard = () => {
  return (
    <div className="relative min-h-screen bg-[#f5f9ff] text-gray-900 bg-linear-to-br from-[#03bafc]/20 via-white to-[#dff3ff]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8 pb-25">
        <LeaderboardHeader />
        <LeaderboardTabs />
        <PodiumSection />
        <LeaderboardTable />
      </div>

      <YourRankBar rank="11" points="836" userName="chamber" avatar={maleUserImg} campus="Neon NY"/>
    </div>
  );
};

export default Leaderboard;
