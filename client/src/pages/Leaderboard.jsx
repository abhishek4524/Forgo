import LeaderboardHeader from "../components/LeaderboardSection/LeaderboardHeader";
import LeaderboardTabs from "../components/LeaderboardSection/LeaderboardTabs";
import PodiumSection from "../components/LeaderboardSection/PodiumSection";
import LeaderboardTable from "../components/LeaderboardSection/LeaderboardTable";
import YourRankBar from "../components/LeaderboardSection/YourRankBar";
import maleUserImg from "../assets/Male-Avatar.png";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ff] text-gray-900">
      <div className="text-center border-2">Navbar</div>
      <div className="max-w-6xl mx-auto px-6 py-12 mb-25">
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
