import React from 'react'

const Loader = () => {
    return (
        <div>
            <div className='flex w-screen h-screen bg-zinc-900'>
                <div className='m-auto w-36 h-36 border-zinc-300 border-8 border-t-white rounded-full animate-[spin_2s_linear_infinite]'></div>
            </div>
        </div>
    )
}

export default Loader
