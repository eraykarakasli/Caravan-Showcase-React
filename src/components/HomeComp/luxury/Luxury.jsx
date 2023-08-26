import React from 'react'
import { FaCaravan } from 'react-icons/fa'
import { PiSteeringWheelDuotone } from 'react-icons/pi'
import { FiMonitor } from 'react-icons/fi'

function Luxury() {
    return (
        <div className='w-full bg-[#1F1F1F] '>
            <div className='h-[550px] relative left-1/2 transform -translate-x-1/2 mt-60 bg-[#1F1F1F] w-[80%]'>
                <div className='relative'>
                    <div className='items-center flex absolute top-[160px] -left-16 text-lg  rotate-90'>
                        <span className=' pr-2 text-2xl font-semibold text-white'>LÜKS YAŞAM</span>
                        <span className='h-1 w-20  bg-red-800' />
                    </div>

                    <div className='mx-40 pt-12'>
                        <p className='text-white text-2xl font-semibold'>TÜM MÜŞTERİLERİMİZ İÇİN </p>
                        <p className='text-white text-2xl font-semibold'>LÜKS YAŞAM </p>
                    </div>
                    <div className='grid grid-flow-col place-items-center text-white ml-16 mt-16 w-full'>
                        <div className='grid place-items-center'>
                            <div className='border w-32 h-32 flex items-center justify-center border-dashed rounded-full'><FaCaravan size={50} /></div>
                            <div className='font-semibold flex justify-center hover:text-red-600 duration-300 mt-6 pb-4'><a href=""> Model Seçimi</a></div>
                            <div className='border-b-4  border-red-600 border w-10 rounded-full'></div>
                            <div className='mt-6 text-gray-400'><p>Size en uygun yerleşim planını seçin.</p></div>
                        </div>
                        <div className='grid place-items-center'>
                            <div className='border border-dashed rounded-full w-32 h-32 flex items-center justify-center'><PiSteeringWheelDuotone size={65} /></div>
                            <div className='font-semibold flex justify-center mt-6 hover:text-red-600 duration-300  pb-4'><a className='' href="">Ekipmanlarınızı Seçin</a></div>
                            <div className='border-b-4  border-red-600 border w-10 rounded-full'></div>
                            <div className='mt-6 text-gray-400 grid place-items-center'><p>İhtiyaçlarınıza cevap verecek opsiyonel ekipmanları</p><p>karavanınıza ekleyin.</p></div>
                        </div>
                        <div className='grid place-items-center'>
                            <div className='border border-dashed w-32 h-32 flex items-center justify-center rounded-full'><FiMonitor size={55} /></div>
                            <div className='font-semibold  flex justify-center mt-6 hover:text-red-600 duration-300  pb-4'><a href="">Teklif Alın</a></div>
                            <div className='border-b-4  border-red-600 border w-10 rounded-full'></div>
                            <div className='mt-6 text-gray-400 grid place-items-center'><p>Sizin için özelleştirilmiş karavanınızın özetine ulaşıp</p><p>bizimle iletişime geçin.</p></div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Luxury