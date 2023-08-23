import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeSlider from '../components/slider/HomeSlider'
import ProductSlider from '../components/slider/ProductSlider'
import Sorting from '../components/sorting/Sorting'
import Luxury from '../components/luxury/Luxury'

function Home() {
  return (
    <div className='bg-[#121212] h-[3000px]'>
        <Navbar/>
        <div className=''> 
        <HomeSlider/>
        <Sorting/>
        </div>
        <ProductSlider/>
        <Luxury/>
    </div>
  )
}

export default Home