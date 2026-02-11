import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsTickerSection from '../components/StatsTickerSection'
import LifeCycleSection from '../components/LifeCycleSection'
import PlayerAchievements from '../components/PlayerAchievements'
import StartAdventureSection from '../components/StartAdventureSection'
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