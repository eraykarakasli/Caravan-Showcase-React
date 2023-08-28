import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Brand from '../../components/BrandComp/Brand';
import Footer from '../../components/footer/Footer';

function Kabe() {
    useEffect(() => {
        document.title = 'Kabe - O CARAVAN';
    }, []);

    const brand = {
        name : "KABE",
        count: "5",
        categories: ["Royal", "Imperial"],
    }


    return (
        <div>
            <Navbar />
            <Brand name={brand.name} count={brand.count} categories={brand.categories} />
            <Footer />
        </div>
    )
}

export default Kabe
