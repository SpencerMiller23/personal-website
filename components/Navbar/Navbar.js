import React from 'react' 

import Image from 'next/image'
import Link from 'next/link'

import LogoMobile from './logo_mobile.svg'
import LogoDesktop from './logo_desktop.svg'

const Navbar = () => {

    // Toggles the classes controlling the left position of the navbar and the styles of the hamburger icon
    const toggleDrawer = (event) => {
        document.querySelector('#drawer').classList.toggle('left-[-100%]')
        document.querySelector('#drawer').classList.toggle('left-0')
        document.querySelector('#bar-1').classList.toggle('hidden')
        document.querySelector('#bar-2').classList.toggle('active-2')
        document.querySelector('#bar-3').classList.toggle('active-3')
    }

    return (
        <div>
            <div className='w-screen bg-black fixed z-10'>
                {/* Mobile navbar */}
                <div className='grid grid-cols-6 md:hidden h-[60px]'>
                    <div className='col-span-1'></div>
                    <div className='col-span-4 flex items-center px-[10px]'>
                        <Link href="/" passHref={true}>
                            <a>
                                <Image src={LogoMobile} alt='Logo' />
                            </a>
                        </Link>
                    </div>
                    <div className='col-span-1'>
                        <div onClick={toggleDrawer} className='h-full flex flex-col justify-center items-center space-y-[8px]'>
                            <span id='bar-1' className='block h-[2px] w-[30px] border-zinc-500 border-l-[4px] border-r-[20px] rounded-full transition-all duration-300'></span>
                            <span id='bar-2' className='block h-[2px] w-[30px] border-zinc-500 border-l-[20px] border-r-[4px] rounded-full origin-bottom-right transition-all duration-300'></span>
                            <span id='bar-3' className='block h-[2px] w-[30px] border-zinc-500 border-l-[4px] border-r-[20px] rounded-full origin-bottom-left transition-all duration-300'></span>
                        </div>
                    </div>
                </div>
                <div id='drawer' className='flex flex-col md:hidden justify-between h-screen w-[50%] px-[36px] py-[32px] absolute top-0 left-[-100%] transition-all bg-black text-white border-r-[1px] border-zinc-600'>
                    <div className='flex flex-col font-bold'>
                        <Link href="/" passHref={true}><span className='mb-[20px]'>Home</span></Link>
                        <Link href="/about" passHref={true}><span className='mb-[20px]'>About</span></Link>
                        <Link href="/career" passHref={true}><span className='mb-[20px]'>Career</span></Link>
                        <Link href="/contact" passHref={true}><span className='mb-[20px]'>Contact</span></Link>
                    </div>
                    <div className='flex flex-row'>
                        <a href="https://www.linkedin.com/in/spencer-miller23/"  target="_blank" rel='noreferrer' className='w-[40px] mr-[10px] fill-zinc-500 hover:fill-white transition-colors'>
                            <svg data-name="Layer 1" viewBox="0 0 508.33 508.36" xmlns="http://www.w3.org/2000/svg">
                                <path d="M485 29.72c11.45 15.13 16.61 40.21 19.15 70.7 3.36 45.5 4.71 100.1 6 156.52-1.67 57.47-2.35 115.43-6 156.52-2.88 31.54-9 52.66-19.22 65.47-13 12.79-37.94 23.59-73.5 26.15-43.25 3.69-96.61 3.65-155.48 5.1-65.44-1.12-109.82-.64-156.38-5.08-36.32-2.52-60.08-13.19-74.7-26.07-10.83-14.54-14-30-17-66.24-3.75-41.85-4.58-98.56-6-155.54C4 200.57 4.13 143.44 7.9 100.74 10.43 67.05 14.42 44.4 24.65 30 39 17.77 63.48 11.69 100 8.69c50-5.85 102.06-7 155.88-6.87 55.39.09 108.56 1.67 156 6.34 32 2.56 58.48 8.07 73.07 21.56Z" transform="translate(-1.83 -1.82)"></path>
                                <path d="M400.76 392.14V281.39c0-59.34-31.68-87-73.91-87-34.08 0-49.36 18.75-57.87 31.91V199h-64.2c.85 18.13 0 193.17 0 193.17H269V284.26c0-5.76.41-11.53 2.12-15.65 4.63-11.54 15.2-23.48 32.93-23.48 23.24 0 32.53 17.71 32.53 43.67v103.35h64.2ZM137.13 172.6c22.38 0 36.34-14.85 36.34-33.39-.41-18.95-13.95-33.36-35.91-33.36s-36.33 14.41-36.33 33.36c0 18.54 13.94 33.39 35.49 33.39Zm32.11 219.54V199H105v193.14Z" transform="translate(-1.83 -1.82)" data-name="Flat copy" className="fill-black"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/SpencerMiller23" target="_blank" rel='noreferrer' className='w-[40px] fill-zinc-500 hover:fill-white transition-colors'>
                            <svg fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M15.748 24.947c8.342-.24 9.163-1.997 9.163-11.966 0-11-1-12-12-12s-12 1-12 12c0 9.995.826 11.734 9.228 11.968a.503.503 0 0 0 .1-.32c0-.25-.01-2.817-.015-3.7-3.037.64-3.678-1.419-3.678-1.419-.497-1.222-1.213-1.548-1.213-1.548-.99-.656.075-.643.075-.643 1.096.075 1.673 1.091 1.673 1.091.974 1.617 2.556 1.15 3.178.88.1-.684.381-1.15.693-1.415-2.425-.267-4.974-1.175-4.974-5.23 0-1.155.426-2.099 1.124-2.839-.113-.268-.487-1.344.107-2.8 0 0 .917-.285 3.003 1.084a10.755 10.755 0 0 1 2.734-.356c.927.004 1.861.121 2.734.356 2.085-1.369 3-1.084 3-1.084.596 1.456.221 2.532.108 2.8.7.74 1.123 1.684 1.123 2.84 0 4.064-2.553 4.96-4.986 5.22.392.327.741.973.741 1.96a1298.915 1298.915 0 0 1-.013 4.802c0 .11.03.224.095.32Z" fillRule="evenodd" className="fill-zinc-500 hover:fill-white transition-colors"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Desktop navbar */}
                <div className='hidden md:grid grid-cols-5'>
                    <div className='col-span-2 flex flex-row items-center pl-[20px]'>
                        <a href="https://www.linkedin.com/in/spencer-miller23/"  target="_blank" rel='noreferrer' className='w-[40px] mr-[10px] fill-zinc-500 hover:fill-white transition-colors'>
                            <svg data-name="Layer 1" viewBox="0 0 508.33 508.36" xmlns="http://www.w3.org/2000/svg">
                                <path d="M485 29.72c11.45 15.13 16.61 40.21 19.15 70.7 3.36 45.5 4.71 100.1 6 156.52-1.67 57.47-2.35 115.43-6 156.52-2.88 31.54-9 52.66-19.22 65.47-13 12.79-37.94 23.59-73.5 26.15-43.25 3.69-96.61 3.65-155.48 5.1-65.44-1.12-109.82-.64-156.38-5.08-36.32-2.52-60.08-13.19-74.7-26.07-10.83-14.54-14-30-17-66.24-3.75-41.85-4.58-98.56-6-155.54C4 200.57 4.13 143.44 7.9 100.74 10.43 67.05 14.42 44.4 24.65 30 39 17.77 63.48 11.69 100 8.69c50-5.85 102.06-7 155.88-6.87 55.39.09 108.56 1.67 156 6.34 32 2.56 58.48 8.07 73.07 21.56Z" transform="translate(-1.83 -1.82)"></path>
                                <path d="M400.76 392.14V281.39c0-59.34-31.68-87-73.91-87-34.08 0-49.36 18.75-57.87 31.91V199h-64.2c.85 18.13 0 193.17 0 193.17H269V284.26c0-5.76.41-11.53 2.12-15.65 4.63-11.54 15.2-23.48 32.93-23.48 23.24 0 32.53 17.71 32.53 43.67v103.35h64.2ZM137.13 172.6c22.38 0 36.34-14.85 36.34-33.39-.41-18.95-13.95-33.36-35.91-33.36s-36.33 14.41-36.33 33.36c0 18.54 13.94 33.39 35.49 33.39Zm32.11 219.54V199H105v193.14Z" transform="translate(-1.83 -1.82)" data-name="Flat copy" className="fill-black"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/SpencerMiller23" target="_blank" rel='noreferrer' className='w-[40px] fill-zinc-500 hover:fill-white transition-colors'>
                            <svg fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M15.748 24.947c8.342-.24 9.163-1.997 9.163-11.966 0-11-1-12-12-12s-12 1-12 12c0 9.995.826 11.734 9.228 11.968a.503.503 0 0 0 .1-.32c0-.25-.01-2.817-.015-3.7-3.037.64-3.678-1.419-3.678-1.419-.497-1.222-1.213-1.548-1.213-1.548-.99-.656.075-.643.075-.643 1.096.075 1.673 1.091 1.673 1.091.974 1.617 2.556 1.15 3.178.88.1-.684.381-1.15.693-1.415-2.425-.267-4.974-1.175-4.974-5.23 0-1.155.426-2.099 1.124-2.839-.113-.268-.487-1.344.107-2.8 0 0 .917-.285 3.003 1.084a10.755 10.755 0 0 1 2.734-.356c.927.004 1.861.121 2.734.356 2.085-1.369 3-1.084 3-1.084.596 1.456.221 2.532.108 2.8.7.74 1.123 1.684 1.123 2.84 0 4.064-2.553 4.96-4.986 5.22.392.327.741.973.741 1.96a1298.915 1298.915 0 0 1-.013 4.802c0 .11.03.224.095.32Z" fillRule="evenodd" className="fill-zinc-500 hover:fill-white transition-colors"></path>
                            </svg>
                        </a>
                    </div>
                    <div className='col-span-1 flex justify-center py-[25px]'>
                        <Link href='/' passHref={true}>
                            <a>
                                <Image src={LogoDesktop} alt='Logo' />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:flex flex-row justify-center border-y-[1px] border-zinc-600'>
                    <div className='text-zinc-500 hover:text-white transition-colors font-bold border-x-[1px] border-zinc-600 px-[25px] py-[7px]'>
                        <Link href="/about">About</Link>
                    </div>
                    <div className='text-zinc-500 hover:text-white transition-colors font-bold border-r-[1px] border-zinc-600 px-[25px] py-[7px]'>
                        <Link href="/career">Career</Link>
                    </div>
                    <div className='text-zinc-500 hover:text-white transition-colors font-bold border-r-[1px] border-zinc-600 px-[25px] py-[7px]'>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
