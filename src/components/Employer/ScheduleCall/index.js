import React from 'react';
import emailjs from 'emailjs-com';

export default() => {
    const sendEmail = async (e) => {
        e.preventDefault();
        await emailjs.sendForm('gmail', 'company_template', e.target, 'user_qZlQgUAsKgh9JJbIsE1rz');
        window.open('/thank-you-employer', "_self");
    }

    return (
        <section className='schedule-call' id='schedule-call'>
            <div className='content'>
                <h1 className='title'>We would love to chat</h1>
                <img
                    src={process.env.PUBLIC_URL + '/images/chat.png'}
                    alt='chat'
                    className='img-lg'/>
            </div>
            <form autoComplete="off" onSubmit={sendEmail}>
                <div className='group-one'>
                    <input
                        type="text"
                        autoComplete="off"
                        className="form-input input-one"
                        name="name"
                        placeholder='Your full name*'
                        required/>
                    <input
                        type="text"
                        autoComplete="off"
                        className="form-input"
                        name="company"
                        placeholder='Name of the company*'
                        required/>
                </div>
                <div className='group-two'>
                    <input
                        type="email"
                        autoComplete="off"
                        className="form-input input-one"
                        name="email"
                        placeholder='Email address*'
                        required/>
                    <input
                        type="text"
                        autoComplete="off"
                        className="form-input"
                        name="phone"
                        placeholder='Phone number*'
                        required/>
                </div>
                <button type="submit" className="submit-button">Schedule a call</button>
            </form>
            <img
                src={process.env.PUBLIC_URL + '/images/chat.png'}
                alt='chat'
                className='img-md-sm'/>
        </section>
    )
}