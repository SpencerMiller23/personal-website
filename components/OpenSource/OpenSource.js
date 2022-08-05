import React from 'react'
import Image from 'next/image'

import secretnetwork from '../Common/secretnetwork.png'

const OpenSource = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://github.com/secretanalytics/secret-sdk-python' target="_blank" rel="noreferrer">
                <Image src={secretnetwork} alt='Secret Network' width={80} height={80} />
            </a>
            <div>
                <h2 className='text-xl font-bold'><a href='https://github.com/secretanalytics/secret-sdk-python' target="_blank" rel='noreferrer' className='underline'>Secret Network Python SDK</a></h2>
                <ul className='list-disc pl-[20px]'>
                    <li>
                        Updated an existing function to provide &quot;out-of-the-box&quot; capability to send batch transactions.
                    </li>
                    <li>
                        Contributed sample code while also finding and correcting mistakes in documentation contributed by others.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OpenSource