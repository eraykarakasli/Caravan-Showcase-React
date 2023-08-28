import React from 'react'

function Content() {
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

    <div className='w-full   p-20 ml-40 text-white  gap-20'>
          <div className='flex gap-2 font-md text-4xl'>
           Tüm <p className='text-red-600 font-bold'>Karavanlar</p> / Fiyat <p className='text-red-600 font-bold'>Listesi</p>
          </div>
          
    </div>
</div>
  )
}

export default Content