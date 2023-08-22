import React from 'react'
import NavLeft from './NavbarItems/NavLeft'
import NavRight from './NavbarItems/NavRight'
import SocialMedia from './NavbarItems/SocialMedia'

function Navbar() {
    return (
        <div>
            <SocialMedia />
            <div className='flex justify-between bg-black h-28 px-20 items-center w-full'>
                <NavLeft />
                <NavRight />
            </div>

        </div>
    )
}

export default Navbar