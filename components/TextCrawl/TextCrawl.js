import React, { useEffect } from 'react'

import Image from 'next/image'

import Logo from './logo_desktop.svg'

const TextCrawl = () => {

    // Timers used to display the relevant parts of the text crawl
    useEffect(() => {
        const timer1 = setTimeout(() => {
            document.getElementById('intro').classList.toggle('hidden')
            document.getElementById('logo').classList.toggle('hidden')
        }, 7000)

        const timer2 = setTimeout(() => {
            document.getElementById('logo').classList.toggle('hidden')
            document.getElementById('board').classList.toggle('hidden')
        }, 20000)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [])

    return (
        <div>
            <div className='bg-black h-screen w-screen pt-[60px] md:pt-[210px] flex flex-col overflow-hidden'>
                {/* 
                    Starwars-style opening text crawl
                    Useful link: https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
                */}
                <section id='intro' className="m-auto text-[#4bd5ee] opacity-0 font-normal md:text-[200%] animate-[intro_6s_ease-out]">A long time ago, in a galaxy far,<br />far away.... (Canada)<br /><br />(Click for sound)</section>
                
                <section id='logo' className="hidden m-auto opacity-0 animate-[logo_9s_ease-out_7s]">
                    <Image src={Logo} alt='Logo' />
                </section>

                <div id="board" className='hidden'>  
                    <div id="content" className='text-[#FFFF82]'>
                        <p id="title" className='text-center'>Episode I</p>
                        <p id="subtitle" className='text-center'>THE CODING MENACE</p>
                        <br />
                        <p>Turmoil has engulfed the Galactic Republic as Christopher Kade finishes studying to become a master in his trade.</p>    
                        <p>The galaxy is in chaos as the newly elected Chancellor has just been elected to the position of Chancellor of the Republic.</p>
                        <p>The old Chancellor has been killed in a battle with the new Chancellors clone.</p>
                        <p>The only thing that can save the galaxy is the power of the Jedi, who are the only ones who can save the Republic from the Empire.</p>
                        <p>The Jedi are the only ones who can save the Republic from the Empire.</p>
                    </div>  
                </div>
                <audio preload="auto" autoPlay>
                    <source src="./sound.mp3" type="audio/mpeg" autoPlay />
                </audio>
            </div>
        </div>
    )
}

export default TextCrawl
