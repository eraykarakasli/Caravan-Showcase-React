import React from 'react'
import { BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi'
import { TfiYoutube } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

function SocialMedia() {
    return (
        <div className='w-[80%] relative left-1/2 transform -translate-x-1/2'>
            <div className=' flex justify-between px-8 h-10 items-center '>
                <div className='flex gap-5'>
                    <a href=""><BiLogoInstagram size={16} color="white" /></a>
                    <a href=""><TfiYoutube size={16} color='white' /></a>
                    <a href=""><BiLogoFacebook color='white' /> </a>
                </div>
                <div className='flex gap-8 text-white'>
                    <a className='flex items-center gap-2 text-xs font-semibold' href=""><BsTelephone size={12} color='white' /> 0(000) 000 00 00</a>
                    <a className='flex items-center gap-2 text-xs font-semibold' href=""><AiOutlineMail size={15} color='white' />info@admin.com.tr</a>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia