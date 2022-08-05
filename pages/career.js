import React from 'react'

import { Section } from '../components/Section'
import { Role } from '../components/Role'
import roleData from '../components/Role/roleData'

const career = () => {
    return (
        <div>
            <div className='content-container w-screen h-screen flex flex-col py-[60px] md:pt-[210px] overflow-y-scroll'>
                {roleData.map((roleData, idx) => (
                    <Section childComponent={<Role roleData={roleData} />} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default career
