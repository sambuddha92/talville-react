import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './Footer.css'

export default () => (
    <section className='footer'>
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='talville' className='logo' />
        <div className='contact-details'>
            <div className='mail'>
                <img src = {process.env.PUBLIC_URL + '/images/mail-footer.png'} alt='mail' />
                <p>talent@talville.com</p>
            </div>
            <div className='call'>
                <img src = {process.env.PUBLIC_URL + '/images/call.png'} alt='phone' />
                <p>+91 8527 934 598</p>
            </div>
        </div>
        <hr />
        <div className='links'>
            <span className='copyright'>© 2020 UKUFUNDA LEARNING PVT LTD</span>
            <a href='/privacy' className='internal'>PRIVACY</a>
            <Router>
                <Route exact path='/'><a href='/faq-candidate' target="_self" className='internal no-underline'>FAQ</a></Route>
                <Route exact path='/employer'><a href='/faq-employer' target="_self" className='internal'>FAQ</a></Route>
                <Route exact path='/faq-employer'><a href='/faq-employer' target="_self" className='internal'>FAQ</a></Route>
                <Route exact path='/faq-candidate'><a href='/faq-candidate' target="_self" className='internal'>FAQ</a></Route>
            </Router>
            <a href='/tnc' className='internal'>T&C</a>
            <a href='https://in.linkedin.com/company/talville' target="_blank" rel='noopener noreferrer'><img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt='linkedin' className='linkedin-logo'/></a>
        </div>
        <span className='copyright-bottom'>© 2020 UKUFUNDA LEARNING PVT LTD</span>
    </section>
);