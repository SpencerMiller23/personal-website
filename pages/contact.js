import React from 'react'

import Image from 'next/image'

import { ContactForm } from '../components/ContactForm'

import Yoda from '../components/Common/yoda.png'

function contact() {
    return (
        <div>
            <div className='content-container w-screen h-screen flex flex-col py-[60px] md:pt-[210px] overflow-y-scroll'>
                <div className='flex flex-row justify-center items-center pt-[20px]'>
                    <div className='w-[30vw] md:w-[250px] md:pr-[50px]'>
                        <Image src={Yoda} alt='Yoda' />
                    </div>
                    <div className='text-white text-2xl md:text-4xl font-bold pl-[20px] md:pl-[50px]'>
                        <h2>Full-stack engineer,<br />if you seek,<br /> contact me,<br />you must</h2>
                    </div>
                </div>
                <p className='text-white text-lg md:text-xl text-center p-[20px]'>Please feel free to get in touch with any relevant job opportunities.<br />I would be happy to hear from you.</p>
                <ContactForm />
            </div>
        </div>
    )
}

export default contact
