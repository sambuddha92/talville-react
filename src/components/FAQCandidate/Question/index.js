import React from 'react';

export default ({serial, q, a}) => (
    <div className='question'>
        <div className='sl'>{serial}</div>
        <div className='qna'>
            <h1 className='q'>{q}</h1>
            <h1 className='a'>{a}</h1>
        </div>
    </div>
)