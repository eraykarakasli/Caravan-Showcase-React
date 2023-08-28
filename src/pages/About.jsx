import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Content from '../components/AboutComp/Content'
import Footer from '../components/footer/Footer'

function About() {
  useEffect(() => {
    document.title = 'Hakkımızda - O CARAVAN';
  }, []);
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default About