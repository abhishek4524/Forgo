import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsTickerSection from '../components/StatsTickerSection'
import LifeCycleSection from '../components/LifeCycleSection/LifeCycleSection'
import PlayerAchievements from '../components/PlayerAchievementsSection/PlayerAchievements'
import StartAdventureSection from '../components/StartAdventureSection/StartAdventureSection'
import GamifiedCTASection from '../components/GamifiedCTASection'
import FooterSection from '../components/FooterSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <StatsTickerSection />
        <LifeCycleSection />
        <PlayerAchievements />
        <StartAdventureSection />
        <GamifiedCTASection />
        <FooterSection />
    </div>
  )
}

export default Home