import React from 'react'

function Sorting() {
    return (
        <div className='w-[99%] absolute '>
            <div className=' -mt-20 flex flex-wrap max-[1100px]:flex-col bg-[#1F1F1F] mx-10  '>

                <div className='mx-10 h-40 w-1/4 '>
                    <p className='text-white pt-12 pb-8'>MARKA</p>
                    <select className='text-white pl-4 w-full h-10  bg-[#111111] ' name="" id="">
                        <option className='' value="">Marka Seçiniz</option>
                        <option className='text-red-500'>Bürstner</option>
                        <option className='text-red-500'>Fendt-Caravan</option>
                        <option className='text-red-500'>Hymer / Eriba</option>
                        <option className='text-red-500'>KABE</option>
                    </select>
                </div>

                <div className='mx-10 h-40 w-1/4 '>
                    <p className='text-white pt-12 pb-8'>MODEL</p>
                    <select className='text-white pl-4 w-full h-10  bg-[#111111]' name="" id="">
                        <option className='' value="">Model Seçiniz</option>
                    </select>
                </div>

                <div className='mx-10 h-40 w-1/4 '>
                    <p className='text-white pt-12 pb-8'>YATAK KAPASİTESİ</p>
                    <select className='text-white pl-4 w-full h-10  bg-[#111111]' name="" id="">
                        <option className='' value="">Seçiniz</option>
                        <option className='text-red-500 '>1</option>
                        <option className='text-red-500 '>2</option>
                        <option className='text-red-500 '>3</option>
                        <option className='text-red-500 '>4</option>
                    </select>

                </div>
                

                    <div className='grid grid-flow-col   items-center w-[88%] mx-12 mt-10 '>
                        <span><hr /> </span>
                    </div>

                    <button className='text-white  w-40 h-12 mt-8 mb-4 ml-10 text-[16px] px-7 duration-500   rounded-full font-semibold bg-red-600 hover:bg-transparent hover:text-red-600 border border-red-600 '>ARAMA YAP</button>

                
            </div>
        </div>
    )
}

export default Sorting