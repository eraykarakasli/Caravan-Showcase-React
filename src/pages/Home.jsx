import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeSlider from '../components/slider/HomeSlider'
import ProductSlider from '../components/slider/ProductSlider'
import Sorting from '../components/sorting/Sorting'

function Home() {
  return (
    <div className='bg-[#121212]'>
        <Navbar/>
        <div className=''> 
        <HomeSlider/>
        <Sorting/>
        </div>
        <ProductSlider/>
    </div>
  )
}

export default Home