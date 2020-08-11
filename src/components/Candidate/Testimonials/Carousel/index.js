import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Carousel.css';

const CardsArray = [
    <Card
        txt='While dealing with recruiters from Talville I felt that they were different from others. They had a thorough understanding of the role they were approaching for and their recruiters were very well mannered in their approach.'
        imgsrc={process.env.PUBLIC_URL + '/images/sourav_lashkari.jpg'}
        name='Sourav Lashkari'
        designation='Associate Director @ Rupeek'
    />,
    <Card
        txt='I was very happy with the kind of opportunities Talville approached me with. Their recruiters helped me a lot throughout the interview process. After every round there was a follow-up call to ensure the process was smooth.'
        imgsrc={process.env.PUBLIC_URL + '/images/pradheep.jpg'}
        name='Pradheep Manivel'
        designation='Growth Manager @ Groww'
    />,
    <Card
        txt="I wasn't actively looking out when one of the recruiters from Talville approached me with a relevant opportunity. From then on they took care of the whole process. The entire communication was seamlessly conducted over emails."
        imgsrc={process.env.PUBLIC_URL + '/images/sumeet_kotasthane.jpg'}
        name='Sumit Kotasthane'
        designation='Product Manager @ Rupeek'
    />,
    <Card
        txt='I had just updated my profile on a job board when Team Talville approached me. I am extremely satisfied with their process, they are highly professional. Would recomend them to anyone who is looking out.'
        imgsrc={process.env.PUBLIC_URL + '/images/aaditya_sareen.jpg'}
        name='Aaditya Sareen'
        designation='Sr. BDM @ Guarented'
    />,
    <Card
        txt='Being a fresher I had very little information about active jobs. I tried posting my profile here and there with very little success till Talville approached me through Linkedin and I was able to secure a job within a week.'
        imgsrc={process.env.PUBLIC_URL + '/images/hemant_kumar.jpg'}
        name='Hemant Kumar'
        designation='City Manager @ Slice'
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