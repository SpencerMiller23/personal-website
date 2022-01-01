import React, { useState, useRef } from 'react'

import axios from 'axios';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef(null)
    const [formValid, setFormValid] = useState(true)

    const validateForm = () => {
        const inputs = formRef.current.querySelectorAll('input');
        var validRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
        if (inputs[0].value.length < 2 || inputs[1].value.length < 2 || inputs[2].value.length < 2) {
            setFormValid(false)
            return false
        }
        if (!inputs[0].value.match(validRegex)) {
            setFormValid(false)
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            // Fetch the userID from the backend API
            axios.get('/api/hello').then(response => {
                // Send the email using the EmailJS API
                emailjs.sendForm('service_96n6ttm', 'template_pavoqlk', formRef.current, response.data.data)
                    .then((result) => {
                        // Reset form text
                        formRef.current.reset()
                    }, (error) => {
                        console.log(error.text);
                    });
            });
        } else {
            setFormValid(false)
        }
    }

    return (
        <div>
            <div className='bg-black w-screen h-screen flex pt-[60px] md:pt-[210px] overflow-y-scroll'>
                <div className='m-auto w-[800px] max-w-[85vw]'>
                    <form className='grid grid-cols-2 text-white' onSubmit={handleSubmit} ref={formRef}>
                        <div className='col-span-2 md:col-span-1 md:pr-[10px] mb-[10px]'>
                            <label htmlFor='fname'>First name</label>
                            <br />
                            <input type="text" name="fname" className='fName w-full bg-transparent px-[20px] py-[10px] border-[#FFE81F] border-[3px] my-[10px]' placeholder='Leia' />
                        </div>
                        <div className='col-span-2 md:col-span-1 md:pl-[10px] mb-[10px]'>
                            <label htmlFor='lname'>Last name</label>
                            <br />
                            <input type="text" name="lname" className='lName w-full bg-transparent px-[20px] py-[10px] border-[#FFE81F] border-[3px] my-[10px]' placeholder='Organa' />
                        </div>
                        <div className='col-span-2 mb-[10px]'>
                            <label htmlFor='email'>Email</label>
                            <br />
                            <input type="email" name="email" className='email w-full bg-transparent px-[20px] py-[10px] border-[#FFE81F] border-[3px] my-[10px]' placeholder='leia.organa@gmail.com' />
                        </div>
                        <div className='col-span-2 mb-[10px]'>
                            <label htmlFor='message'>Message</label>
                            <br />
                            <textarea
                                name='message'
                                className='message w-full h-[440px] md:h-[200px] bg-transparent px-[20px] py-[10px] border-[#FFE81F] border-[3px] my-[10px]'
                                rows='10'
                                placeholder="General Miller. Years ago you served my father in the Clone Wars. Now he begs you to help him in his struggle against the Empire. I regret that I am unable to present my father's request to you in person, but my ship has fallen under attack, and I'm afraid my mission to bring you to Alderaan has failed. I have placed information vital to the survival of the Rebellion into the memory systems of this R2 unit. My father will know how to retrieve it. You must see this droid safely delivered to him on Alderaan. This is our most desperate hour. Help me, Spencer Miller. You're my only hope."
                            >
                            </textarea>
                        </div>
                        <div className='col-span-2'>
                            <button className='submit w-full bg-transparent px-[20px] py-[10px] border-[#FFE81F] border-[3px]'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
