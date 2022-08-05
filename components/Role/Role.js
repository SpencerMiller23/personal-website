import React from 'react'
import Image from 'next/image'

const Role = ({roleData}) => {
    return (
        <div className='flex flex-col md:flex-row'>
            <a className='mb-[15px] md:mb-0 md:mr-[20px]' href={roleData.websiteUrl} target="_blank" rel="noreferrer">
                <Image src={roleData.companyLogo} alt={roleData.companyName} width={80} height={80} />
            </a>
            <div>
                <h3><a href={roleData.websiteUrl} target="_blank" rel='noreferrer' className='underline'>{roleData.companyName}</a>, {roleData.date}</h3>
                <h2 className='text-xl font-bold'>{roleData.position}</h2>
                <ul className='list-disc pl-[20px]'>
                    {roleData.objectiveArr.map((objective, idx) => (
                        <li key={idx}>
                            {objective}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Role