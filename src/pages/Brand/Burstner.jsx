import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Brand from '../../components/BrandComp/Brand';
import Footer from '../../components/footer/Footer';

function Burstner() {
    useEffect(() => {
        document.title = 'Bürstner - O CARAVAN';
    }, []);
    const brand = {
        name: "BURSTNER",
        count: "5",
        categories: [
            [
                { name: "Royal", model: "Royal 600 CXL", capacity: "4", weight: "1750", price: "78.000,00", img: "https://ucaravan.com.tr/image/uploads/products/c5e042d4-a4ca-4129-be59-3d6d0cfee85b.jpg/550/280/0?folder=products" },
                { name: "Royal", model: "Royal 600 TDL", capacity: "6", weight: "1750", price: "77.000,00", img: "https://ucaravan.com.tr/image/uploads/products/b7056ef1-1908-4cd0-9f2d-80e8726b9079.jpg/550/280/0?folder=products" },
                { name: "Royal", model: "Royal 740 DGDL", capacity: "6", weight: "1991", price: "83.000,00", img: "https://ucaravan.com.tr/image/uploads/products/1cae9fa9-665d-439a-82a9-265dbbc52a47.jpg/550/280/0?folder=products" },
            ],
            [
                { name: "Imperial", model: "Imperial 780 TDL FK", capacity: "3", weight: "2140", price: "115.000,00", img: "https://ucaravan.com.tr/image/uploads/products/1eefa7c2-d84a-483f-a2cb-569ca7f056da.jpg/550/280/0?folder=products" },
            ],
        ]
    }

    return (
        <div>
            <Navbar />
            <Brand name={brand.name} count={brand.count} categories={brand.categories} />
            <Footer />
        </div>
    )
}

export default Burstner