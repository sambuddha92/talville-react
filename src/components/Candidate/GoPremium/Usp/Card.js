import React from 'react';

export default ({ imgsrc, title, txt }) => (
    <div className='card'>
        <img src={imgsrc} alt='card-top' className='img' />
        <p className='title'>{title}</p>
        <p className='txt'>{txt}</p>
    </div>
)