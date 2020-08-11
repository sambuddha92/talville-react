import React from 'react';
import Usp from './Usp';

export default () => (
    <section className='go-premium'>
        <img src='/repeat-grid.png' alt='background' className='background-pattern' />
        <div className='title'>
            <img src='/crown.png' alt='crown' />
            <h1>Improve your chances by going <span className='part-2'>Premium</span></h1>
        </div>
        <Usp />
        <button>I am In!</button>
    </section>
)