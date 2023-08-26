import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsArrowRightCircleFill } from 'react-icons/bs'



function ProductSlider() {
  const [slider, setSlider] = useState(true);
  const brandSlider = () => {
    setSlider(true);
    console.log(slider)
  }
  const modelSlider = () => {
    setSlider(false);
    console.log(slider)
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='h-80 text-white mt-[300px] max-[1700px]:mt-[600px] relative w-[80%] left-1/2 transform -translate-x-1/2'>
      {/* divider */}
      <div className='items-center flex  absolute top-[108px] -left-16 text-lg rotate-90'>
        <span className='pr-1  text-2xl font-semibold text-white'>KARAVANLAR</span>
        <span className='h-1 w-20 bg-red-800' />
      </div>
      <div className='flex justify-between mx-20 my-10 ml-40'>
        <div className='text-2xl font-semibold'>KARAVANI SEÇ</div>
        <div className='flex gap-4'>
          <button onClick={brandSlider} className={`${slider ? "border text-gray-400 border-gray-400" : ""} hover:border hover:text-gray-400 border-gray-400 duration-400 rounded-full px-3 font-semibold text-sm`}>MARKA</button>
          <button onClick={modelSlider} className={`${slider ? " " : "border text-gray-400 border-gray-400" } hover:border hover:text-gray-400 border-gray-400 duration-400 rounded-full px-3 font-semibold text-sm`}>MODEL</button>
        </div>
      </div>

      <div className='ml-40 '>
        {slider ?
          <Carousel draggable={true} swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={10000} responsive={responsive}>
            <div>
              <p className='text-xl font-semibold mb-3  '>BURSTNER</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/70d71df8-9f39-494b-a0c1-d0af2a06127a.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>FENDT CARAVAN</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/c105da4a-c327-4a5a-9a02-327da416b396.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>KABE</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/51ad2b57-fe70-4884-8ddc-d76a3f8dd494.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>HYMER / ERIBA</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/2f065122-aec3-406e-a462-9b73a2f9ad10.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
          </Carousel > : <Carousel draggable={true} swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={10000} responsive={responsive}>
            <div className='mx-10 select-none cursor-pointer'>
              <p className='text-xl font-semibold mb-3  '>PREMIO LIFE</p>
              <img className='h-52' src="https://ucaravan.com.tr/uploads/models/99b215ad-87e7-49fb-ab4f-a6d7c4fa4825.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>PREMIO</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/01faf386-83f7-416b-900d-e8267d69a176.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>PREMIO PLUS</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/70d71df8-9f39-494b-a0c1-d0af2a06127a.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>BIANCO ACTIVE</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/c105da4a-c327-4a5a-9a02-327da416b396.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>APERO</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/b27771bc-1961-48a5-9630-ab39a36778af.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>TENDENZA</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/a5a7ff1f-cf41-4a70-b6cc-62f416b6f6ba.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>DIAMAT</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/2a265dd5-c0fe-4823-ba1d-93ff36604a83.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>ROYAL</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/eeeb28a2-158d-41cb-b66b-9672d40f54d0.jpg" alt="" />
              <a href='' className='flex  mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>TOURING</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/1aa3c285-0bf4-43cd-977c-eea0ecb2c96b.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>IMPERIAL</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/51ad2b57-fe70-4884-8ddc-d76a3f8dd494.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
            <div>
              <p className='text-xl font-semibold mb-3  '>AVERSO</p>
              <img className='h-52 ' src="https://ucaravan.com.tr/uploads/models/2f065122-aec3-406e-a462-9b73a2f9ad10.jpg" alt="" />
              <a href='' className='flex mt-2 items-center gap-3 duration-300 hover:text-red-600'><BsArrowRightCircleFill size={28} /> <p className='text-white'>Tüm Karavanlar</p></a>
            </div>
          </Carousel >
        }
      </div>

    </div>
  )
}

export default ProductSlider