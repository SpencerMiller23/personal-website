import React from 'react'

const career = () => {
    return (
        <div>
            <div className='content-container w-screen h-screen flex flex-col py-[60px] md:pt-[210px] overflow-y-scroll'>
                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px]'>
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

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px]'>
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

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px]'>
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

                <div className='bg-zinc-800 w-[800px] max-w-[90vw] mb-[60px] flex flex-row text-white rounded-xl m-auto'>
                    <div className='p-[40px]'>
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
        </div>
    )
}

export default career
