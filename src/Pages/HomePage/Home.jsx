import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/hero'
import Portfolio from '../../Components/Portfolio/Portfolio'
import About from '../AboutPage/About'
import Collaboraters from '../CollaboratersPage/Collaboraters'
import OurTeam from '../OurTeamPage/OurTeam'
import TopPrograms from '../TopProgramsPage/TopPrograms'

const Home = () => {
  return (
    <div>
        <Hero />
        <TopPrograms />
        <About />
        <Portfolio />
        <OurTeam />
        <Collaboraters />
        <Footer />

    </div>
  )
}

export default Home