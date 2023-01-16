import React from 'react'
import Hero from './Hero/Hero'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import NewArrival from './NewArrival/NewArrival'
import Casts from './Casts/Casts'
import Footer from '../../layout/Footer/Footer'
import ExclusiveVideos from './ExclusiveVideos/ExclusiveVideos'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <div className="home_scaffold">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movix</title>
        <link rel="canonical" href="https://movixfrontend.netlify.app/" />
      </Helmet>
      <Hero />
      <FeaturedMovie />
      <NewArrival />
      <ExclusiveVideos />
      <Casts />
      <Footer />
    </div>
  )
}


export default Home