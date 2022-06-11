import React from 'react'
import Image from 'next/image'
import donkeyfinance from '../Common/donkeyfinance.jpg'

const CurrentRole = () => {
    return (
        <div className='text-white bg-zinc-800 m-auto mb-[50px] w-[800px] max-w-[90vw] p-[40px] md:p-[50px] rounded-xl'>
            <h1 className='text-center text-2xl md:text-4xl font-bold pb-[20px]'>Current Role</h1>
            <div className='flex flex-col md:flex-row'>
                <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://don-key.finance/' target="_blank" rel="noreferrer">
                    <Image src={donkeyfinance} alt="Don-key Finance" width={80} height={80} />
                </a>
                <div>
                    <h3><a href='https://don-key.finance/' target="_blank" rel='noreferrer' className='underline'>Don-key Finance</a>, February 2022 - Present</h3>
                    <h2 className='text-xl font-bold'>Web3 Development Jedi</h2>
                    <ul className='list-disc pl-[20px]'>
                        <li>
                            Developing a scalable blockchain indexing tool that will replace a third-party alternative, leading to a reduction in cost and improvement in performance.
                        </li>
                        <li>
                            Implementing a GraphQL API that will serve indexed data to the client. 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CurrentRole