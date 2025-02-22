import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import FeaturedProduct from './FeaturedProduct'
import WhyChooseUs from './WhyChooseUs'
import StudyProgram from './StudyProgram'

const Main: React.FC = () => {
  return (
    <div>
        <Header />
        <Hero />
        <AboutUs />
        <FeaturedProduct />
        <WhyChooseUs />
        <StudyProgram />
    </div>
  )
}

export default Main