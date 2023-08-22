import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeSlider from '../components/slider/HomeSlider'
import ProductSlider from '../components/slider/ProductSlider'

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeSlider/>
        <ProductSlider/>
    </div>
  )
}

export default Home