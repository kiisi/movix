import React from 'react'
import Hero from './Hero/Hero'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import NewArrival from './NewArrival/NewArrival'
import Casts from './Casts/Casts'
import Footer from '../../layout/Footer/Footer'
import ExclusiveVideos from './ExclusiveVideos/ExclusiveVideos'


const Home = () => {
  return (
    <div className="home_scaffold">
      <Hero />
      <FeaturedMovie/>
      <NewArrival/>
      <ExclusiveVideos/>
      <Casts/>
      <Footer/>
    </div>
  )
}


export default Home