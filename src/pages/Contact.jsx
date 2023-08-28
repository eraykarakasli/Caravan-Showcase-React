import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Content from '../components/ContactComp/Content'
import Footer from '../components/footer/Footer'

function Contact() {
  useEffect(() => {
    document.title = 'İletişim - O CARAVAN';
  }, []);
  return (
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>

  )
}

export default Contact