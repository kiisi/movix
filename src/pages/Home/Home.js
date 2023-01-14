import React from 'react'
import Hero from './Hero/Hero'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import NewArrival from './NewArrival/NewArrival'
import Casts from './Casts/Casts'

const Home = () => {
  return (
    <div className="home_scaffold">
      <Hero />
      <FeaturedMovie/>
      <NewArrival/>
      <Casts/>
    </div>
  )
}

export default Home