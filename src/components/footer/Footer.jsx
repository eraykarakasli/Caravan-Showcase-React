import React, { useState } from 'react'
import { TfiMapAlt } from 'react-icons/tfi'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

function Footer() {
  const [video, setVideo] = useState(true);

  const toggleVideo2 = () => {
    setVideo(!video)
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }


  }
  return (
    <div className='h-auto pb-10 bg-[#232323] text-white'>
      <div className='w-[80%] relative left-1/2 transform -translate-x-1/2 '>
        <div className='pt-10 grid place-items-center grid-cols-3 max-[1550px]:grid-cols-2 max-[1100px]:grid-cols-1 max-[1100px]:py-40'>


          <div className='w-80 -mt-20'>
            <a href='#' className='text-3xl divide-x flex cursor-pointer'>
              <span className='text-red-600 pr-2 font-semibold'>O</span>
              <span className='text-gray-200 px-2'>CARAVAN</span>
            </a>
            <p className='text-sm pl-1 text-gray-300 mt-4'>
              U Caravan, Türkiye'de kamp ve karavancılığı geliştirmek,
              bu alanlardaki kalite algısını yükseltmek ve kitlelere bu
              hobiyi tanıtmak vizyonuyla kurulmuştur.
            </p>
            <p className='text-sm pl-1 text-gray-300 mt-6 flex gap-10 items-center'>
              <TfiMapAlt size={20} className='border border-gray-400 w-9 h-9 p-2' /> Address /  Address / Address / Address
            </p>
            <p className='text-sm pl-1 text-gray-300 mt-6 flex gap-10 items-center'>
              <FiPhone size={20} className='border border-gray-400 w-9 h-9 p-2' /> 0(000) 000 00 00
            </p>
            <p className='text-sm pl-1 text-gray-300 mt-6 flex gap-10 items-center'>
              <AiOutlineMail size={20} className='border border-gray-400 w-9 h-9 p-2' /> info@info.com.tr
            </p>
          </div>
          {video ?
            <div className='ml-12'>
              <div className='text-x font-semibold '>
                <p>SON EKLENENLER</p>
                <div className='border w-10 border-red-500 mt-2'></div>
              </div>
              <div className=' w-[500px]'>
                <div onClick={toggleVideo2} className='mt-8 relative text-sm w-full '>
                  <div className='flex my-4'>
                    <div className=''>
                      <img className='h-[70px] w-auto' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                    </div>
                    <div className='px-5'>
                      <div>
                        <a className='font-semi ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                      </div>
                      <div className='flex gap-10 py-5'>
                        <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex my-4'>
                    <div className=''>
                      <img className='h-[70px] w-auto' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                    </div>
                    <div className='px-5'>
                      <div>
                        <a className='font-semi ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                      </div>
                      <div className='flex gap-10 py-5'>
                        <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex my-4'>
                    <div className=''>
                      <img className='h-[70px] w-auto' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                    </div>
                    <div className='px-5'>
                      <div>
                        <a className='font-semi ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                      </div>
                      <div className='flex gap-10 py-5'>
                        <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                      </div>
                    </div>
                  </div>



                </div>


              </div>
            </div>
            :
            <div>
              <div className='ml-12'>
                <div className='text-x font-semibold '>
                  <p>SON EKLENENLER</p>
                  <div className='border w-10 border-red-500 mt-2'></div>
                </div>
                <div className=' w-[500px]'>
                  <div onClick={toggleVideo2} className='mt-8 relative text-sm w-full '>
                    <div className='flex my-4'>
                      <div className=''>
                        <img className='h-[70px] w-auto' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                      </div>
                      <div className='px-5'>
                        <div>
                          <a className='font-semi ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                        </div>
                        <div className='flex gap-10 py-5'>
                          <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex my-4'>
                      <div className=''>
                        <img className='h-[70px] w-auto' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                      </div>
                      <div className='px-5'>
                        <div>
                          <a className='font-semi ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                        </div>
                        <div className='flex gap-10 py-5'>
                          <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex my-4'>
                      <div className=''>
                        <img className='h-[70px] w-auto' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                      </div>
                      <div className='px-5'>
                        <div>
                          <a className='font-semi ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                        </div>
                        <div className='flex gap-10 py-5'>
                          <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                        </div>
                      </div>
                    </div>



                  </div>


                </div>
              </div>

              <div onClick={toggleVideo2} className='-top-96 -bottom-16 -right-48 -left-48 absolute  inset-50 20 bg-black bg-opacity-70 text-white'>
                <div className='flex items-center h-full justify-center'>
                  <div>
                    <button onClick={toggleVideo2} className='flex justify-end items-start ml-6  w-full'><p className='border-2  font-bold px-2 py-1 rounded-full'>X</p></button>
                    <iframe width="760" height="515" src="https://www.youtube.com/embed/kZ9MIxMeVso?si=JmkrxCFNob722g7b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                  </div>
                </div>
              </div>
            </div>

          }


          <div className='h-full mt-5'>
            <a href='' className=' font-semibold'>
              INSTAGRAM'DA BİZ
              <div className='border w-10 border-red-500 mt-2'></div>
            </a>
          </div>
          <div className='w-full fixed -bottom-8 px-20 mt-10'>
            <div className='text-gray-400 text-sm flex justify-between'>
              <div className='flex gap-6'>
                <a href="">Anasayfa</a>
                <a href="">Hakkımızda</a>
                <a href="">Karavanlar</a>
                <a href="">İletişim</a>
              </div>
              <div>Copyright © 2023-2023  Eray Karakaşlı | Tüm Hakları Saklıdır. </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer