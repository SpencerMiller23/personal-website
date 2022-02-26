import React from 'react'

import Image from 'next/image'

import aws from '../Common/aws.png'
import hardhat from '../Common/hardhat.png'
import nextjs from '../Common/nextjs.png'
import react from '../Common/react.png'
import nodejs from '../Common/nodejs.png'
import solidity from '../Common/solidity.png'
import terraform from '../Common/terraform.png'
import docker from '../Common/docker.png'
import typescript from '../Common/typescript.png'
import graphql from '../Common/graphql.png'

const Technologies = () => {
    return (
        <div className='bg-zinc-500 p-[30px] md:p-[40px]'>
            <h1 className='text-center text-2xl md:text-3xl font-bold pb-[30px]'>Technologies that interest me</h1>
            <div className='technology-container container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-5 lg:gap-0'>
                <div className='col-span-1'>
                    <Image src={typescript} alt='TypeScript' />
                </div>
                <div className='col-span-1'>
                    <Image src={react} alt='React' />                    
                </div>
                <div className='col-span-1'>
                    <Image src={nextjs} alt='Next.js' />
                </div>
                <div className='col-span-1'>
                    <Image src={solidity} alt='Solidity' />
                </div>
                <div className='col-span-1 px-[10px]'>
                    <Image src={hardhat} alt='Hardhat' />
                </div>
                <div className='col-span-1 px-[10px]'>
                    <Image src={nodejs} alt='Node.js' />
                </div>
                <div className='col-span-1'>
                    <Image src={graphql} alt='GraphQL' />
                </div>
                <div className='col-span-1 px-[10px]'>
                    <Image src={aws} alt='AWS' />
                </div>
                <div className='col-span-2 px-[10px]'>
                    <Image src={terraform} alt='Terraform' />
                </div>
                <div className='col-span-2 px-[10px]'>
                    <Image src={docker} alt='Docker' />
                </div>
            </div>
        </div>
    )
}

export default Technologies
