import React from 'react'
import FormContact from '../AboutComp/FormContact'

function Content() {
    return (
        <div className='bg-[#121212] h-auto relative'>
            <div className='bg-caravan bg-center bg-no-repeat h-[478px] mt-28   w-auto'>
                <div className='bg-black bg h-full  opacity-40'></div>
                <div>

                </div>
                <div className=' left-1/2 transform -translate-x-1/2 -mt-40 absolute'>
                    <p className='text-white font-bold text-3xl flex justify-center'>İLETİŞİM</p>
                    <div className='text-white font-semibold text-sm -mb-20 mt-10 flex gap-2  bg-black bg-opacity-30 p-4 px-8'>
                        <a className='hover:text-red-600' href="/">ANASAYFA</a> &#x276F; <p className='text-red-600'>İLETİŞİM</p>
                    </div>
                </div>
            </div>

            <div className='w-full  flex  p-40 text-white justify-center gap-20'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.8395951677846!2d28.53784513897761!3d41.001834716971295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5677e719a3885%3A0xc431befcb21106b1!2zQsO8ecO8ayBVbHUgw5ZuZGVyIEdhemkgTXVzdGFmYSBLZW1hbCBBdGF0w7xyayBQYXJrxLE!5e1!3m2!1str!2str!4v1693224310765!5m2!1str!2str" width="500" height="500" ></iframe>
                </div>
                <div>
                    <FormContact />
                </div>
            </div>
        </div>
    )
}

export default Content