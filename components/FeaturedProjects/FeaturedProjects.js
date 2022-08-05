import React from 'react'
import Image from 'next/image'
import MultiSig from './multi-sig.jpg'

const FeaturedProjects = () => {
    return (
        <div className='grid md:grid-cols-3'>
            <a href='https://ethereum-multi-sig-wallet.vercel.app/' target="_blank" rel="noreferrer">
                <div className='col-span-3 md:col-span-1 opacity-75 hover:opacity-100 transition-all duration-300'>
                    <Image src={MultiSig} alt='MultiSig' />
                    <h2 className='text-xl mt-[5px]'>Ethereum Multi-Sig Wallet</h2>
                </div>
            </a>
        </div>
    )
}

export default FeaturedProjects