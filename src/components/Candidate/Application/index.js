import React from 'react';
import emailjs from 'emailjs-com';
import './Application.css'

export default () => {
    const sendEmail = async (e) => {
        e.preventDefault();
        await emailjs.sendForm('gmail', 'template_vo724hrA', e.target, 'user_qQpAZq4WAGqS6mdIcwa5C');
        window.open('/thank-you-candidate', "_self");
    }
    return (
        <section className='application' id='application'>
            <div className='content'>
                <h1 className='title'>Apply now, to get your dream job!</h1>
                <img src={process.env.PUBLIC_URL + '/images/chat.png'} alt='chat' className='img-lg' />
            </div>
            <form autoComplete="off" onSubmit={sendEmail}>
                <div className='group-one'>
                <input
                    type="text"
                    autoComplete="off"
                    className="form-input input-one"
                    name="name"
                    placeholder='Your full name*'
                    required
                />
                <input
                    type="email"
                    autoComplete="off"
                    className="form-input"
                    name="email"
                    placeholder='Email address*'
                    required
                />
                </div>
                <div className='group-two'>
                <input
                    type="text"
                    autoComplete="off"
                    className="form-input input-one"
                    name="phone"
                    placeholder='Phone number*'
                    required
                />
                <input
                    type="url"
                    autoComplete="off"
                    className="form-input"
                    name="linkedin"
                    placeholder='Linkedin profile url*'
                    required
                />
                </div>
                <button type="submit" className="submit-button">Apply</button>
            </form>
    <img src={process.env.PUBLIC_URL + '/images/chat.png'} alt='chat' className='img-md-sm' />
</section>
)
}
