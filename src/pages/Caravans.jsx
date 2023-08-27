import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Content from '../components/CaravansComp/Content'
import SocialMedia from '../components/navbar/NavbarItems/SocialMedia'

function SubPage() {
  useEffect(() => {
    document.title = 'Karavanlar - O CARAVAN';
  }, []);

  return (
    <div>
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default SubPage