import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Brand from '../../components/BrandComp/Brand';
import Footer from '../../components/footer/Footer';

function Burstner() {
    useEffect(() => {
        document.title = 'Bürstner - O CARAVAN';
    }, []);
    return (
        <div>
            <Navbar />
            <Brand />
            <Footer />
        </div>
    )
}

export default Burstner