import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Card.css';

export default () => (
    <section className='usp'>
        <Row>
            <Col md='6' lg='4'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/mail.png'}
                title='Absolutely no spam'
                txt='We contact you for very relevant job openings only, you can opt out at any time'
                />
            </Col>
            <Col md='6' lg='4'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/time.png'}
                title='Guaranteed feedback'
                txt='Get a feedback regarding your application, within 4 hours of any update from employers'
                />
            </Col>
            <Col md='6' lg='4'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/fund.png'}
                title='100+ companies hiring'
                txt='We are hiring for 100+ top tech companies including 50+ startups.'
                />
            </Col>
        </Row>
    </section>
)