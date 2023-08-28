import React from 'react'
import { FiGrid } from 'react-icons/fi'
import { AiOutlineBars } from 'react-icons/ai'
import { GiCaravan } from 'react-icons/gi'


function Brand({ name, count, categories }) {
    return (
        <div className='bg-[#121212] h-auto relative'>
            <div className='bg-caravan bg-center bg-no-repeat h-[478px] mt-28   w-auto'>
                <div className='bg-black bg h-full  opacity-40'></div>
                <div>

                </div>
                <div className=' left-1/2 transform -translate-x-1/2 -mt-40 absolute'>
                    <p className='text-white font-bold text-3xl flex justify-center'>{name}</p>
                    <div className='text-white font-semibold text-sm -mb-20 mt-10 flex gap-2  bg-black bg-opacity-30 p-4 px-8'>
                        <a className='hover:text-red-600' href="/">ANASAYFA</a> &#x276F; <p className='text-red-600'>{name}</p>
                    </div>
                </div>
            </div>

            <div className='w-full p-20 ml-40 text-white gap-20 flex'>
                <div className='w-2/4'>
                    <div className='flex justify-between bg-[#232323] h-16 rounded-md items-center px-5'>
                        <div className='flex items-center gap-4'>
                            <GiCaravan size={40} /> <div className='font-semibold'> {count} Karavan Bulundu</div>
                        </div>
                        <div className='flex gap-3 '>
                            <button className='hover:text-red-600 hover:border-red-600 border rounded-sm'>  <FiGrid className=' w-10 h-8 p-1.5' /></button>
                            <button className='hover:text-red-600 hover:border-red-600 border rounded-sm'><AiOutlineBars className=' w-10 h-10 p-2' /></button>
                        </div>
                    </div>


                    <div className='w-full  h-auto mt-20'>
                        {
                            categories.map((category, index) => (
                                <div key={index}>
                                    <div className='text-xl'>
                                        {category}
                                        <div className='w-10 bg-red-800 h-1 rounded-full'></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>





                </div>


                <div className='w-1/4'>
                    <div className='h-[75px] justify-center bg-[#232323] rounded-sm w-auto flex items-center px-6 font-bold text-xl'>
                        KARAVAN ARA
                    </div>
                    <div className='h-[290px] bg-[#232323] mt-2 text-black   grid place-items-center'>
                        <select className='text-white pl-4 mt-5 w-[80%] h-[50px]  bg-[#111111]  ' name="" id="">
                            <option className='' value="">Marka Seçiniz</option>
                            <option className='text-red-500'>Bürstner</option>
                            <option className='text-red-500'>Fendt-Caravan</option>
                            <option className='text-red-500'>Hymer / Eriba</option>
                            <option className='text-red-500'>KABE</option>
                        </select>

                        <select className='text-white pl-4 w-[80%] mt-5 h-[50px]  bg-[#111111]' name="" id="">
                            <option className='' value="">Model Seçiniz</option>
                        </select>

                        <button className='text-white mb-5 mt-8 w-[80%] h-12 text-[16px] duration-500   rounded-full font-semibold bg-red-600 hover:bg-transparent hover:text-red-600 border border-red-600 '>FİLTRELE</button>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Brand