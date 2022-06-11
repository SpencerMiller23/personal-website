import React from 'react'

import Image from 'next/image'

import construx from '../components/Common/construx.jpg'
import donkeyfinance from '../components/Common/donkeyfinance.jpg'
import ilta from '../components/Common/ilta.jpg'
import impactlabs from '../components/Common/impactlabs.jpg'
import kromad from '../components/Common/kromad.jpg'
import niftable from '../components/Common/niftable.jpg'
import hrvst from '../components/Common/hrvst.jpg'


const career = () => {
    return (
        <div>
            <div className='content-container w-screen h-screen flex flex-col py-[60px] md:pt-[210px] overflow-y-scroll'>
                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
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

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
                        <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://www.niftable.io/' target="_blank" rel="noreferrer">
                            <Image src={niftable} alt="Niftable" width={80} height={80} />
                        </a>
                        <div>
                            <h3><a href='https://www.niftable.io/' target="_blank" rel='noreferrer' className='underline'>Niftable</a>, March 2021 - February 2022</h3>
                            <h2 className='text-xl font-bold'>Co-founder, Chief Technology Jedi Master</h2>
                            <ul className='list-disc pl-[20px]'>
                                <li>
                                    Spearheaded the development of a platform for creating and trading fractional shares of NFTs.
                                </li>
                                <li>
                                    Delivered several presentations to prospective investors for the purpose of securing investment. 
                                </li>
                                <li>
                                    Designed and developed the landing page and blog using React and multiple AWS services.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
                        <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://www.ilta.co.il/' target="_blank" rel="noreferrer">
                            <Image src={ilta} alt="Israeli Legal-Tech Accelerator" width={80} height={80} />
                        </a>
                        <div>
                            <h3><a href='https://www.ilta.co.il/' target="_blank" rel='noreferrer' className='underline'>Israeli Legal Tech Accelerator</a>, November 2020 - February 2021</h3>
                            <h2 className='text-xl font-bold'>Full-Stack Development Padawan Learner</h2>
                            <ul className='list-disc pl-[20px]'>
                                <li>
                                    Led the continued development of a Node.js REST API service which will be used by the incoming legaltech startup cohort to retrieve historical legal documents and data.
                                </li>
                                <li>
                                    Spearheaded operations to build a React front-end prototype intended to showcase potential uses for a legal document REST API. 
                                </li>
                                <li>
                                    Piloted efforts to refactor legacy code in order to improve performance and ensure compatibility with current software.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
                        <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://kromad.com/' target="_blank" rel="noreferrer">
                            <Image src={kromad} alt="Kromad Design Studio" width={80} height={80} />
                        </a>
                        <div>
                            <h3><a href='https://kromad.com/' target="_blank" rel='noreferrer' className='underline'>Kromad Design Studio</a>, May 2019 - August 2019</h3>
                            <h2 className='text-xl font-bold'>Frontend Web Jedi</h2>
                            <ul className='list-disc pl-[20px]'>
                                <li>
                                    Governed the design and development of custom ecommerce websites, leveraging Shopify and WordPress frameworks to reduce development time and achieve overall vision.
                                </li>
                                <li>
                                    Pioneered initiatives to optimize new and existing websites for search engine ranking, mobile usability, mobile responsiveness, and loading time.
                                </li>
                                <li>
                                    Crafted and produced website proposals customized for the needs of prospective clients, successfully demonstrating the impact and value-add to their business.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
                        <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://www.impactlabs.tech/?lang=en' target="_blank" rel="noreferrer">
                            <Image src={impactlabs} alt="Impact Labs" width={80} height={80} />
                        </a>
                        <div>
                            <h3><a href='https://www.impactlabs.tech/?lang=en' target="_blank" rel='noreferrer' className='underline'>Impact Labs</a>, June 2018 - August 2018</h3>
                            <h2 className='text-xl font-bold'>Summer Padawan Learner</h2>
                            <ul className='list-disc pl-[20px]'>
                                <li>
                                    Innovated and developed a serverless application using AWS, enabling the automatic synchronization of a client-facing database with CRM software via REST API.
                                </li>
                                <li>
                                    Ideated and implemented a comprehensive marketing campaign, which included designing promotional material and building an online advertising strategy for an upcoming 3D printing course.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
                        <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='http://www.construx.co/' target="_blank" rel="noreferrer">
                            <Image src={construx} alt="Construx" width={80} height={80} />
                        </a>
                        <div>
                            <h3><a href='http://www.construx.co/' target="_blank" rel='noreferrer' className='underline'>Construx.co</a>, November 2017 - October 2018</h3>
                            <h2 className='text-xl font-bold'>IT Solutions Jedi Ambassador</h2>
                            <ul className='list-disc pl-[20px]'>
                                <li>
                                    Constructed an internal web application which reduced data re-entry by allowing employees to remotely log hours and submit petty cash forms.
                                </li>
                                <li>
                                    Integrated a new enterprise software suite to successfully improve efficiency across all departments while also reducing administrative costs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px] flex flex-col md:flex-row'>
                        <a className='mb-[15px] md:mb-0 md:mr-[20px]' href='https://gohrvst.com/' target="_blank" rel="noreferrer">
                            <Image src={hrvst} alt="HRVST" width={80} height={80} />
                        </a>
                        <div>
                            <h3><a href='https://gohrvst.com/' target="_blank" rel='noreferrer' className='underline'>HRVST</a>, November 2016 - October 2017</h3>
                            <h2 className='text-xl font-bold'>Frontend Web Jedi</h2>
                            <ul className='list-disc pl-[20px]'>
                                <li>
                                    Architected custom ecommerce websites while reducing development time by using industry leading CMS platforms to manage the back-end. 
                                </li>
                                <li>
                                    Elevated sales pipeline performance by designing and developing landing pages for prospective clients, yielding a significant increase in conversion rates
                                </li>
                                <li>
                                    Headed operations for debugging pre-existing websites of current clients to optimize loading times and improve responsiveness across various web browsers and screen sizes.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default career
