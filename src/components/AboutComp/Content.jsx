import React from 'react'

function Content() {
    return (
        <div className='bg-[#121212] relative'>
            <div className='bg-caravan bg-center bg-no-repeat h-[478px] mt-28   w-auto'>
                <div className='bg-black bg h-full  opacity-40'></div>
                <div>

                </div>
                <div className=' left-1/2 transform -translate-x-1/2 -mt-40 absolute'>
                    <p className='text-white font-bold text-3xl flex justify-center'>HAKKIMIZDA</p>
                    <div className='text-white font-semibold text-sm -mb-20 mt-10 flex gap-2  bg-black bg-opacity-30 p-4 px-8'>
                        <a className='hover:text-red-600' href="/">ANASAYFA</a> &#x276F; <p className='text-red-600'>HAKKIMIZDA</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='text-white font-extrabold text-2xl w-[80%] mt-36  ml-20'>
                    <p>  TÜRKİYE'DE KAMP VE KARAVANCILIĞI GELİŞTİRMEK</p>
                    <p>KALİTE ALGISINI YÜKSELTMEK</p>
                    <div className='font-normal text-base w-[50%] mt-16 leading-7 text-slate-300'>
                        <p>
                            Firmamız 2017 yılında, Türkiye'de kamp ve karavancılığı geliştirmek, bu alanlardaki kalite algısını yükseltmek ve kitlelere bu hobiyi tanıtmak vizyonuyla kurulmuştur. Bu bağlamda dünyanın en büyük karavan grubu olan Erwin-Hymer ailesine katılıp Bürstner markasının resmi Türkiye distribütörü olarak ticari hayatına başlamıştır. Bu alanda şüphesiz en üst düzey kaliteyi sunan Alman yapımı karavanlar ülkemize ithal edilmeye başlanmıştır.
                        </p>
                        <p className='pt-10'>
                            Kamp ve karavancılığın olmazsa olmazı olan aksesuar ve yedek parça alanında da faaliyetlerini sürdüren U Caravan, Erwin-Hymer grubunun aksesuar firması olan Movera ile de işbirliği kurarak en üst kalite Alman üretimi aksesuarları ülkemize ithal etmeye başlamıştır.
                        </p>
                    </div>
                    <div className=' m-20'>
                        <a href='/' className='text-5xl divide-x flex cursor-pointer font-normal'>
                            <span className='text-red-600 px-2 font-semibold'>O</span>
                            <span className='text-gray-200 px-2'>CARAVAN</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content