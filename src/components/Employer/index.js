import React from 'react';
import './Employer.css';
import Spotlight from './Spotlight';
import Testimonials from './Testimonials';
import Companies from './Companies';
import HowItWorks from './HowItWorks';
import ScheduleCall from './ScheduleCall'

export default () => (
    <div className='employer'>
        <Spotlight />
        <Testimonials />
        <Companies />
        <HowItWorks />
        <ScheduleCall />
    </div>
)