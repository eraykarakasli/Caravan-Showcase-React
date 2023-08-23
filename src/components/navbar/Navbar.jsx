import React, { useEffect, useState } from 'react'
import NavLeft from './NavbarItems/NavLeft'
import NavRight from './NavbarItems/NavRight'
import SocialMedia from './NavbarItems/SocialMedia'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className=''>
            <SocialMedia />
            <div className={`${isScrolled ? ' top-0 duration-500 transition-all' : ' '
            } flex  z-30  fixed justify-between bg-black h-28 px-20 items-center w-full`}>
                <NavLeft />
                <NavRight />
            </div>

        </div>
    )
}

export default Navbar