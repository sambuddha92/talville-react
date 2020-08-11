import React from 'react';

export default ({txt, imgsrc, name, designation}) => (
    <div className='card'>
        <p className='txt'>{txt}</p>
        <div className='profile'>
            <hr />
            <img src={imgsrc} alt='display pic' className='display-pic' />
            <div className='identity'>
                <div className='name'>{name}</div>
                <div className='designation'>{designation}</div>
            </div>
        </div>
    </div>
)