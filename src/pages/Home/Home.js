import React from 'react'
import Hero from './Hero/Hero'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import NewArrival from './NewArrival/NewArrival'
import Casts from './Casts/Casts'
import Footer from '../../layout/Footer/Footer'

const Home = () => {
  return (
    <div className="home_scaffold">
      <Hero />
      <FeaturedMovie/>
      <NewArrival/>
      <Casts/>
      <Footer/>
    </div>
  )
}

export default Home