import React from 'react';
import Carousel from './Carousel';

export default () => (
    <section className='testimonials'>
        <hr className='title-hr' />
        <img src={process.env.PUBLIC_URL + '/images/quote.png'} alt='quote' className='quote-img' />
        <h1 className='title'><span className='part-1'>500+ Candidates</span> have found their perfect fit through us. Listen to what they have to say about us!</h1>
        <Carousel />
    </section>
)