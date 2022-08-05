import React from 'react'

const Section = ({header, childComponent}) => {

    return (
        <div className='text-white bg-zinc-800 bg-opacity-60 border-[#FBE752] border-[3px] m-auto mb-[50px] w-[800px] max-w-[90vw] p-[40px] md:p-[50px] rounded-xl'>
            <h1 className='text-center text-2xl md:text-4xl font-bold pb-[20px]'>{header}</h1>
            {childComponent}
        </div>
    )
}

export default Section