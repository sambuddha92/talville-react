import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Card.css';

export default () => (
    <section className='usp'>
        <Row>
            <Col md='6' lg='3'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/share.png'}
                title='1.SHARE REQUIREMENTS'
                txt='Share basic info about the job with our dedicated account managers. We help you craft a JD which stands out'
                />
            </Col>
            <Col md='6' lg='3'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/list.png'}
                title='2.SHORTLIST PROFILES'
                txt='Start shortlisting from a list of pre screened, interview ready candidates. We start sharing profiles within 48 hours.'
                />
            </Col>
            <Col md='6' lg='3'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/interview-emp.png'}
                title='3.INTERVIEW CANDIDATES'
                txt='Interview and assess shortlisted candidates. We follow up with candidates for scheduing interviews and submission of assignments.'
                />
            </Col>
            <Col md='6' lg='3'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/offers.png'}
                title='4.ROLL OUT OFFERS'
                txt='Offer candidates who you think would be a great fit. We follow up with them for offer acceptance and joining formalities.'
                />
            </Col>
        </Row>
    </section>
)