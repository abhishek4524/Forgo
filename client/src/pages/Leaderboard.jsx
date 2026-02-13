import Navbar from "../components/Navbar";
import LeaderboardHeader from "../components/LeaderBoardSection/LeaderboardHeader";
import LeaderboardTabs from "../components/LeaderBoardSection/LeaderboardTabs";
import PodiumSection from "../components/LeaderBoardSection/PodiumSection";
import LeaderboardTable from "../components/LeaderBoardSection/LeaderboardTable";
import YourRankBar from "../components/LeaderBoardSection/YourRankBar";
import maleUserImg from "../assets/Male-Avatar.png";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ff] text-gray-900">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8 mb-25">
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
