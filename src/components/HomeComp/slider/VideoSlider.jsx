import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function VideoSlider() {
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
        <div className='text-white relative'>
            <div className='items-center flex absolute top-[160px] -left-16 text-lg  rotate-90'>
                <span className=' pr-2 text-2xl font-semibold text-white'>LÜKS YAŞAM</span>
                <span className='h-1 w-20  bg-red-800' />
            </div>
            <div className='mx-40 pt-12'>
                <p className='text-white text-2xl font-semibold'>TÜM MÜŞTERİLERİMİZ İÇİN </p>
                <p className='text-white text-2xl font-semibold'>LÜKS YAŞAM </p>
            </div>
            <Carousel className='mx-36' arrows={true} draggable={false} swipeable={false} infinite={true} autoPlay={true} autoPlaySpeed={10000} responsive={responsive}>
                <div className=' mt-20  border w-[400px] h-[650px]'>

                    <div className=' '>
                        <div className='h-[300px] flex items-center bg-black'>
                            <img className='h-[250px] w-full' src="https://img.youtube.com/vi/kZ9MIxMeVso/maxresdefault.jpg" alt="Video Thumbnail" />
                        </div>

                        <div className='flex gap-10 ml-6 py-4'>
                            <p className='text-gray-400'>24/08/2023</p> <p className=' text-red-700 font-semibold'>O CARAVAN</p>
                        </div>
                        <div className='mx-6 my-4 mb-6'>
                            <a className='font-bold text-red-600 ' href="">Bürstner Premio 455 TS | O CARAVAN | KARAVAN TANITIM 2024</a>
                        </div>
                            <div className='border-b border-gray-500 mx-6 '></div>
                            <div className='mx-6 my-6'>
                                <p>Yeni Bürstner Premio 455 TS küçülen boyutuna rağmen yarattığı ferahlık hissi, genişleyen mutfak ve duşa..</p>
                            </div>
                            <div className='font-bold text-red-600 text-xs flex justify-end mx-6 py-6'>
                                <a href="">KARAVANI GÖR</a>
                            </div>
                    </div>
                </div>

            </Carousel >
        </div>
    )
}

export default VideoSlider