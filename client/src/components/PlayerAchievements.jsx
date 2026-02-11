import React from 'react'
import SectionTitle from './SectionTile/SectionTitle';
import PlayerAchievementsCard from "./PlayerAchievementsCard/PlayerAchievementsCard";

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-200 to-blue-200">
      <SectionTitle
          title="Unlock"
          highlight="Achievements"
          subtitle="Level up your financial skills and earn rewards"
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        
        <PlayerAchievementsCard
          icon="savings"
          iconColor="text-yellow-600"
          circleColor="bg-yellow-100"
          title="First Saver"
          subtitle="Save your first ₹10,000"
        />

        <PlayerAchievementsCard
          icon="trending_up"
          iconColor="text-green-600"
          circleColor="bg-green-100"
          title="Market Wizard"
          subtitle="Earn 15% return on investments"
        />

        <PlayerAchievementsCard
          icon="diversity_3"
          iconColor="text-purple-600"
          circleColor="bg-purple-100"
          title="Community Hero"
          subtitle="Help 10 other players"
        />

        <PlayerAchievementsCard
          icon="military_tech"
          iconColor="text-blue-600"
          circleColor="bg-blue-100"
          title="Financial Guru"
          subtitle="Reach level 25"
        />

      </div>
    </section>
  );
};

export default AchievementsSection;
