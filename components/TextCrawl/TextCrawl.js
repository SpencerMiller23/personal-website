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
        }, 21000)

        // Remove the timers when the component is unmounted
        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [])

    return (
        <div>
            <div className='content-container w-screen h-screen flex flex-col md:pt-[210px] overflow-hidden'>
                {/* 
                    Starwars-style opening text crawl
                    Found here: https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
                */}
                <section id='intro' className="m-auto text-[#4bd5ee] opacity-0 font-normal md:text-[200%] animate-[intro_6s_ease-out_1s]">A long time ago, in a galaxy far,<br />far away.... (Canada)<br /><br />(Click anywhere for sound)</section>
                
                <section id='logo' className="hidden m-auto opacity-0 animate-[logo_9s_ease-out_5s]">
                    <Image src={Logo} alt='Logo' />
                </section>

                <div id="board" className='hidden'>  
                    <div id="content" className='text-[#FFFF82]'>
                        <p id="title" className='text-center'>Episode I</p>
                        <p id="subtitle" className='text-center'>THE CODING MENACE</p>
                        <br />
                        <p>Turmoil has engulfed the Galactic Republic as the Canadian winter settles in.</p>    
                        <p>The galaxy is in chaos as the soon-to-be software Jedi, Spencer, is born.</p>
                        <p>Spencer would live a quiet live in Canada, enjoying his favourite activities such as skiing and playing hockey.</p>
                        <p>Eventually, he would leave everything behind and move to Israel to fulfill his destiny and become a software Jedi.</p>
                        <p>Today, Spencer is taking the next step in his career by mastering the art of blockchain development.</p>
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
