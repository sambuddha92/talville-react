import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Carousel.css';

const CardsArray = [
    <Card
        txt='Talville has helped us close multiple critical business roles in fast timelines! They are one of the best in the market for mid to senior level hiring. Highly recommended!'
        imgsrc={process.env.PUBLIC_URL + '/images/vidit_aatrey.jpg'}
        name='Vidit Aatrey'
        designation='Co-founder @ Meesho'
    />,
    <Card
        txt='Talville has been a great help in building my team. They are supremely professional, fast and have exceptional understanding of the startup ecosystem.'
        imgsrc={process.env.PUBLIC_URL + '/images/harsh_raikwar.jpg'}
        name='Harshwardhan Raikwar'
        designation='CEO @ Guarented'
    />,
    <Card
        txt='Talville is one of the best agencies that we have worked with. The entire team has been great at putting everything together right from the moment a requirement kicks off until project completion.'
        imgsrc={process.env.PUBLIC_URL + '/images/sandeep_sule.jpg'}
        name='Sandeep Sule'
        designation='HR Head @ PORTER'
    />,
    <Card
        txt='Talville profiles always meet our standards! They are superb in both Tech & Business roles.'
        imgsrc={process.env.PUBLIC_URL + '/images/vasanth_kamath.jpg'}
        name='Vasanth Kamath'
        designation='CEO @ smallcase'
    />
]

export default () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [start, setStart] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
    })

    const onClickPrev = (e) => {
        e.preventDefault();
        start === 0 ? setStart(CardsArray.length - 1) : setStart(start - 1);
    }

    const onClickNext = (e) => {
        e.preventDefault();
        setStart(start + 1);
    }

    if ( width < 400 ) {
        return (
            <div className='carousel'>
                <div className='card-group'>
                    {CardsArray[start % CardsArray.length]}
                </div>
            </div>
        )
    } else if ( width < 750 ) {
        return (
            <div className='carousel'>
                <img
                src={process.env.PUBLIC_URL + '/images/prev-icon.png'}
                alt='previous'
                className='prev-icon'
                onClick={(e) => onClickPrev(e)}
                />
                <div className='card-group'>
                    {CardsArray[start % CardsArray.length]}
                </div>
                <img
                src={process.env.PUBLIC_URL + '/images/next-icon.png'}
                alt='next'
                className='next-icon'
                onClick={(e) => onClickNext(e)}
                />
            </div>
        )
    } else if ( width < 1000 ) {
        return (
            <div className='carousel'>
                <img
                src={process.env.PUBLIC_URL + '/images/prev-icon.png'}
                alt='previous'
                className='prev-icon'
                onClick={(e) => onClickPrev(e)}
                />
                <div className='card-group'>
                    {CardsArray[start % CardsArray.length]}
                    {CardsArray[(start+1) % CardsArray.length]}
                </div>
                <img
                src={process.env.PUBLIC_URL + '/images/next-icon.png'}
                alt='next'
                className='next-icon'
                onClick={(e) => onClickNext(e)}
                />
            </div>
        )
    } else {
        return (
            <div className='carousel'>
                <img
                src={process.env.PUBLIC_URL + '/images/prev-icon.png'}
                alt='previous'
                className='prev-icon'
                onClick={(e) => onClickPrev(e)}
                />
                <div className='card-group'>
                    {CardsArray[start % CardsArray.length]}
                    {CardsArray[(start+1) % CardsArray.length]}
                    {CardsArray[(start+2) % CardsArray.length]}
                </div>
                <img
                src={process.env.PUBLIC_URL + '/images/next-icon.png'}
                alt='next'
                className='next-icon'
                onClick={(e) => onClickNext(e)}
                />
            </div>
        )
    }
}