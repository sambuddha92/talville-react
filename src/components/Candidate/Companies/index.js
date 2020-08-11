import React from 'react';

export default () => (
    <section className = 'companies'>
        <h1>Companies that hire from us!</h1>
        <h3>100+ technology companies and startups hire for their premium and niche openings with our help. Take a look at some of the companies hiring through us.</h3>
        <img src={process.env.PUBLIC_URL + '/images/companies.png'} alt='jumbotail rupeek meesho browserstack mpokket slice slintel groww lifelong porter cloudtail verloop avail' className='img-lg' />
        <img src={process.env.PUBLIC_URL + '/images/companies-sm.png'} alt='jumbotail rupeek meesho browserstack mpokket slice slintel groww lifelong porter cloudtail verloop avail' className='img-sm' />
    </section>
)