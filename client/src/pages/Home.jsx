import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffer/>
        <Testimonial/>
        <Newsletter/>
    </div>
  )
}

export default Home