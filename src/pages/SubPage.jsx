import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Content from '../components/SubpageComp/Content'
import SocialMedia from '../components/navbar/NavbarItems/SocialMedia'

function SubPage() {
  return (
    <div>
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default SubPage