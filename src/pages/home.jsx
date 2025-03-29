import React from 'react'
import Accordion from '../components/accordion/Accordion'
import Category from '../components/category/category'
import Ready from '../ready/ready'
import Carousel from '../components/carousel/carousel'

const Home = () => {
  return (
    <> 
        <Carousel/>
        <Category/>
        <Ready/>
        <Accordion/>
    </>
  )
}

export default Home