import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function VideoSlider() {
    const [video, setVideo] = useState(true);
    const toggleVideo = () => {
        setVideo(!video)

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
        <div className='text-white relative'>
            <div className='items-center flex absolute top-[160px] -left-16 text-lg  rotate-90'>
                <span className=' pr-2 text-2xl font-semibold text-white'>LÜKS YAŞAM</span>
                <span className='h-1 w-20  bg-red-800' />
            </div>
            <div className='mx-40 pt-12'>
                <p className='text-white text-2xl font-semibold'>TÜM MÜŞTERİLERİMİZ İÇİN </p>
                <p className='text-white text-2xl font-semibold'>LÜKS YAŞAM </p>
            </div>
            {video ?
                <Carousel className='mx-36' arrows={true} draggable={false} swipeable={false} infinite={true} autoPlay={true} autoPlaySpeed={5000} responsive={responsive}>
                    <div onClick={toggleVideo} className=' mt-20  border-gray-500 border w-[400px] h-[650px]'>
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
                    <div onClick={toggleVideo} className=' mt-20  border-gray-500 border w-[400px] h-[650px]'>
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
                    <div onClick={toggleVideo} className=' mt-20  border-gray-500 border w-[400px] h-[650px]'>
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

                :
                <div>
                    <Carousel className='mx-36' arrows={true} draggable={false} swipeable={false} infinite={true} autoPlay={true} autoPlaySpeed={5000} responsive={responsive}>
                        <div onClick={toggleVideo} className=' mt-20  border-gray-500 border w-[400px] h-[650px]'>
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
                        <div onClick={toggleVideo} className=' mt-20  border-gray-500 border w-[400px] h-[650px]'>
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
                        <div onClick={toggleVideo} className=' mt-20  border-gray-500 border w-[400px] h-[650px]'>
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

                    <div onClick={toggleVideo} className='w-full h-full fixed inset-0 z-50 bg-black bg-opacity-70 text-white'>
                        <div className='flex items-center h-full justify-center'>
                            <div>
                                <button onClick={toggleVideo} className='flex justify-end items-start ml-6  w-full'><p className='border-2  font-bold px-2 py-1 rounded-full'>X</p></button>
                                <iframe width="760" height="515" src="https://www.youtube.com/embed/kZ9MIxMeVso?si=JmkrxCFNob722g7b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default VideoSlider