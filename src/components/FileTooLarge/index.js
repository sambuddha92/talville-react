import React from 'react';
import './FileTooLarge.css';

export default () => (
    <section className='too-large'>
        <h1 className='title'>Please upload a file smaller than 5 MB.</h1>
        <h3 className='subtitle'>Alternatively, drop an email to 'talent@talville.com' along with your resume.</h3>
        <a href='/#application' className='no-underline'><button>Try Again</button></a>
    </section>
)