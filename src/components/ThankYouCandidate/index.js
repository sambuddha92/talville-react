import React from 'react';
import './ThankYouCandidate.css';

export default () => (
    <section className='thank-you'>
        <img src={process.env.PUBLIC_URL + '/images/fund.png'} alt='thanks' />
        <h1 className='title'>Thanks for reaching out to us.</h1>
        <h3 className='subtitle'>We will get back to you shortly.</h3>
        <a href='/' className='no-underline'><button>Go Back</button></a>
    </section>
)