import React from 'react'


function NavRight() {
    return (
        <div>
            <div className='text-gray-400 flex gap-16 text-sm font-bold h-28 items-center'>
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