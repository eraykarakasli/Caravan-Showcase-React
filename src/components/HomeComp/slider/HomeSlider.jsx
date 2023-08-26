import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function HomeSlider() {

    return (
        <div className='z-10 text-5xl font-semibold text-white  '>
            <Carousel

                showIndicators={false} stopOnHover={true} autoPlay autoFocus emulateTouch transitionTime={1000} interval={3000} showThumbs={false} infiniteLoop={true} showStatus={false} dynamicHeight={true}
            >
                <div className='grid grid-cols-1'>
                    <div className='hidden md:block ml-10 '>
                        <p className=' absolute grid place-items-center h-full ml-40 '>KABE</p>
                        <div className='absolute grid place-items-center h-full pt-40 pl-40'>
                            <button className=' z-30 bg-red-600  text-[16px] px-7 duration-500  p-4 rounded-full font-semibold hover:bg-transparent hover:text-red-600 border border-red-600 '>MARKAYA GİT</button>
                        </div>
                        <div className='absolute grid place-items-center h-full pt-40 pl-80'>
                            <button className='text-[16px] ml-10 px-7  p-4 rounded-full duration-500  font-semibold bg-transparent text-white border border-white hover:bg-red-600 '>İLETİŞİM</button>
                        </div>
                    </div>
                    <img src="https://ucaravan.com.tr/images/main-slider/kabe.jpg" />
                </div>
                <div>
                    <div className='hidden md:block ml-10 '>
                        <p className=' absolute grid place-items-center h-full ml-40 '>BURSTNER</p>
                        <div className='absolute grid place-items-center h-full pt-40 pl-40'>
                            <button className=' z-30 bg-red-600  text-[16px] px-7 duration-500  p-4 rounded-full font-semibold hover:bg-transparent hover:text-red-600 border border-red-600 '>MARKAYA GİT</button>
                        </div>
                        <div className='absolute grid place-items-center h-full pt-40 pl-80'>
                            <button className='text-[16px] ml-10 px-7  p-4 rounded-full duration-500  font-semibold bg-transparent text-white border border-white hover:bg-red-600 '>İLETİŞİM</button>
                        </div>
                    </div>
                    <img src="https://ucaravan.com.tr/images/main-slider/burstner.jpg" />
                </div>
                <div>
                    <div className='hidden md:block ml-10 '>
                        <p className=' absolute grid place-items-center h-full ml-40 '>HYMER-ERIBA</p>
                        <div className='absolute grid place-items-center h-full pt-40 pl-40'>
                            <button className=' z-30 bg-red-600  text-[16px] px-7 duration-500  p-4 rounded-full font-semibold hover:bg-transparent hover:text-red-600 border border-red-600 '>MARKAYA GİT</button>
                        </div>
                        <div className='absolute grid place-items-center h-full pt-40 pl-80'>
                            <button className='text-[16px] ml-10 px-7  p-4 rounded-full duration-500  font-semibold bg-transparent text-white border border-white hover:bg-red-600 '>İLETİŞİM</button>
                        </div>
                    </div>
                    <img src="https://ucaravan.com.tr/images/main-slider/hymer-eriba.jpg" />
                </div>
                <div>
                    <div className='hidden md:block ml-10 '>
                        <p className=' absolute grid place-items-center h-full ml-40 '>FENDT-CARAVAN</p>
                        <div className='absolute grid place-items-center h-full pt-40 pl-40'>
                            <button className=' z-30 bg-red-600  text-[16px] px-7 duration-500  p-4 rounded-full font-semibold hover:bg-transparent hover:text-red-600 border border-red-600 '>MARKAYA GİT</button>
                        </div>
                        <div className='absolute grid place-items-center h-full pt-40 pl-80'>
                            <button className='text-[16px] ml-10 px-7  p-4 rounded-full duration-500  font-semibold bg-transparent text-white border border-white hover:bg-red-600 '>İLETİŞİM</button>
                        </div>
                    </div>
                    <img className='' src="https://ucaravan.com.tr/images/main-slider/fendt-caravan.jpg" />
                </div>
            </Carousel>


        </div>

    )
}

export default HomeSlider