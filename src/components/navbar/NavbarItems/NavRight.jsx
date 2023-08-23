import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'


function NavRight() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="xl:hidden text-white">
                <button onClick={toggleDropdown} className="text-xl focus:outline-none hover:text-red-500">
                    ☰
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-0 right-0 h-screen bg-black  w-60  rounded-md shadow-md py-2 ">
                        <button className='h-8 w-8 hover:bg-red-400 font-bold bg-red-600' onClick={toggleDropdown}>X</button>
                        <div className='flex justify-center my-1' >
                            <a href='#' className='text-3xl divide-x flex cursor-pointer'>
                                <span className='text-red-600 px-2 font-semibold'>U</span>
                                <span className='text-gray-200 px-2'>CARAVAN</span>
                            </a>
                        </div>
                        <div className='grid place-items-start mt-6'>
                            <a href="" className="flex hover:text-red-500  px-5 py-2">ANASAYFA</a>
                            <a href="" className="flex hover:text-red-500  px-5 py-2">HAKKIMIZDA</a>


                            <button onClick={toggleMenu} className='flex hover:text-red-500 px-5 py-2  items-center gap-20' >KARAVANLAR {isOpen ? <AiOutlineDown className='rotate-180'/> : <AiOutlineDown/> }</button>
                            {isOpen && (
                            <div className=" ">
                                <a href="" className="block hover:text-red-600 px-5 py-2">Brüstner</a>
                                <a href="" className="block hover:text-red-600 px-5 py-2">Fendt - Caravan</a>
                                <a href="" className="block hover:text-red-600 px-5 py-2">Hymer / Eriba</a>
                                <a href="" className="block hover:text-red-600 px-5 py-2">KABE</a>
                            </div>
                            )}


                            <a href="#" className="flex hover:text-red-500 px-5 py-2">İLETİŞİM</a>
                        </div>
                    </div>
                )}
            </div>
            <div className='max-[1280px]:hidden  text-gray-400 flex gap-16 text-sm font-bold h-28 items-center'>

                <a className='text-red-500' href="">ANASAYFA</a>
                <a className='' href="">HAKKIMIZDA</a>
                <div className="relative z-30 group h-full w-full flex items-center hover:text-red-500 duration-500">
                    <a className='hover:text-red-500 duration-500 focus:outline-none ' href="">KARAVANLAR</a>
                    <div className="absolute hidden group-hover:block text-gray-400 top-28  bg-black border border-gray-300 border-t-red-500 rounded-md shadow-md py-2 w-48">
                        <a href="#" className="block px-4 py-4 hover:bg-gray-800 hover:text-white">Brüstner</a>
                        <a href="#" className="block px-4 py-4 hover:bg-gray-800 hover:text-white">Fendt - Caravan</a>
                        <a href="#" className="block px-4 py-4 hover:bg-gray-800 hover:text-white">Hymer / Eriba</a>
                        <a href="#" className="block px-4 py-4 hover:bg-gray-800 hover:text-white">KABE</a>
                    </div>
                </div>
                <a className='hover:text-red-500 duration-500' href="">İLETİŞİM</a>

            </div>
        </div>
    )
}

export default NavRight