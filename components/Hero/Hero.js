import React from 'react'

import Image from 'next/image'

import Avatar from './spencer_avatar.png'

const Hero = () => {
    return (
        <div className='hero w-screen flex flex-col-reverse md:flex-row py-[60px] justify-center items-center'>
            <div className='mt-[50px] md:mr-[50px]'>
                <h1 className='text-white text-center text-2xl md:text-4xl font-bold'>Hi, I&apos;m <span className='text-zinc-500'>Spencer Miller</span>.<br />I&apos;m a full-stack developer.</h1>
            </div>
            <div className='w-[80vw] md:w-[400px] md:ml-[50px]'>
                <Image src={Avatar} alt='Spencer Skywalker' />
            </div>
        </div>
    )
}

export default Hero
