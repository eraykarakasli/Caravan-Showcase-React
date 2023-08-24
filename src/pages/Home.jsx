import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeSlider from '../components/HomeComp/slider/HomeSlider'
import ProductSlider from '../components/HomeComp/slider/ProductSlider'
import Sorting from '../components/HomeComp/sorting/Sorting'
import Luxury from '../components/HomeComp/luxury/Luxury'
import TestimonialSlider from '../components/HomeComp/slider/TestimonialSlider'
import VideoSlider from '../components/HomeComp/slider/VideoSlider'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <div className='bg-[#121212] '>
        <Navbar/>
        <div className=''> 
        <HomeSlider/>
        <Sorting/>
        </div>
        <ProductSlider/>
        <Luxury/>
        <TestimonialSlider/>
        <VideoSlider/>
        <Footer/>
    </div>
  )
}

export default Home