import React from 'react'
import Image from 'next/image'
import MultiSig from './multi-sig.jpg'

const FeaturedProjects = () => {
    return (
        <div className='text-white bg-zinc-800 m-auto mb-[50px] w-[800px] max-w-[90vw] p-[40px] md:p-[50px] rounded-xl'>
            <h1 className='text-center text-2xl md:text-4xl font-bold pb-[20px]'>Projects</h1>
            <div className='grid grid-cols-3'>
                <a href='https://ethereum-multi-sig-wallet.vercel.app/' target="_blank" rel="noreferrer">
                    <div className='col-span-3 md:col-span-1 opacity-75 hover:opacity-100 transition-all duration-300'>
                        <Image src={MultiSig} alt='MultiSig' />
                        <h2 className='text-xl mt-[5px]'>Ethereum Multi-Sig Wallet</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default FeaturedProjects