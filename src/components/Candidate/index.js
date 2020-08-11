import React from 'react';
import Spotlight from './Spotlight';
import Usp from './Usp';
import Testimonials from './Testimonials';
import Companies from './Companies';
/*import GoPremium from './GoPremium';*/
import Application from './Application';
import './Candidate.css';

export default () => (
    <div className='candidate'>
        <Spotlight />
        <Usp />
        <Testimonials />
        <Companies />
        <Application />
    </div>
)