import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import FeaturedProduct from './FeaturedProduct'

const Main: React.FC = () => {
  return (
    <div>
        <Header />
        <Hero />
        <AboutUs />
        <FeaturedProduct />
    </div>
  )
}

export default Main