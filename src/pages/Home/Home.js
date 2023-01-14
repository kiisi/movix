import React from 'react'
import Hero from './Hero/Hero'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import NewArrival from './NewArrival/NewArrival'

const Home = () => {
  return (
    <div className="home_scaffold">
      <Hero />
      <FeaturedMovie/>
      <NewArrival/>
    </div>
  )
}

export default Home