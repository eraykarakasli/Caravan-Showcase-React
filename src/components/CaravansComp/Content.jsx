import React from 'react'
import { useNavigate } from 'react-router-dom'

function Content() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#121212] h-auto relative'>
      <div className='bg-caravan bg-center bg-no-repeat h-[478px] mt-28   w-auto'>
        <div className='bg-black bg h-full  opacity-40'></div>
        <div>

        </div>
        <div className=' left-1/2 transform -translate-x-1/2 -mt-40 absolute'>
          <p className='text-white font-bold text-3xl flex justify-center'>KARAVANLAR</p>
          <div className='text-white font-semibold text-sm -mb-20 mt-10 flex gap-2  bg-black bg-opacity-30 p-4 px-8'>
            <a className='hover:text-red-600' href="/">ANASAYFA</a> &#x276F; <p className='text-red-600'> TÜM KARAVANLAR</p>
          </div>
        </div>
      </div>

      <div className='w-full p-20 ml-40 text-white gap-20 '>
        <div className='flex gap-2 font-md text-4xl'>
          Tüm <p className='text-red-600 font-bold'>Karavanlar</p> / Fiyat <p className='text-red-600 font-bold'>Listesi</p>
        </div>

        <div className='flex flex-wrap md:flex-row  mt-10 w-[80%] gap-10'>
          <div onClick={()=> navigate('/karavanlar/burstner')} className='relative border border-gray-700 md:w-1/3 lg:w-1/5  h-auto w-auto group cursor-pointer '>
            <img className='group-hover:opacity-0 absolute inset-0 duration-500' src="https://ucaravan.com.tr/images/brands/burstner-filter.png" alt="" />
            <img className='' src="https://ucaravan.com.tr/images/brands/burstner.png" alt="" />
          </div>
          <div onClick={()=> navigate('/karavanlar/fendt-caravan')} className='relative border border-gray-700 md:w-1/3 lg:w-1/5 h-auto w-auto group cursor-pointer '>
            <img className='group-hover:opacity-0 absolute inset-0 duration-500' src="https://ucaravan.com.tr/images/brands/fendt-caravan-filter.png" alt="" />
            <img className='' src="https://ucaravan.com.tr/images/brands/fendt-caravan.png" alt="" />
          </div>
          
          <div onClick={()=> navigate('/karavanlar/hymer-eriba')} className='relative border border-gray-700 md:w-1/3 lg:w-1/5 h-auto w-auto group cursor-pointer '>
            <img className='group-hover:opacity-0 absolute inset-0 duration-500' src="https://ucaravan.com.tr/images/brands/hymer-eriba-filter.png" alt="" />
            <img className='' src="https://ucaravan.com.tr/images/brands/hymer-eriba.png" alt="" />
          </div>
          
          <div onClick={()=> navigate('/karavanlar/kabe')} className='relative border border-gray-700 md:w-1/3 lg:w-1/5 h-auto w-auto group cursor-pointer '>
            <img className='group-hover:opacity-0 absolute inset-0 duration-500' src="https://ucaravan.com.tr/images/brands/kabe-filter.png" alt="" />
            <img className='' src="https://ucaravan.com.tr/images/brands/kabe.png" alt="" />
          </div>
          
          

        </div>
      </div>
    </div>
  )
}

export default Content