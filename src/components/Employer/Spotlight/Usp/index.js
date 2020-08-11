import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Card.css';

export default () => (
    <section className='usp'>
        <Row>
            <Col md='6' lg='4'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/shortlist.png'}
                title='90% profiles shortlisted'
                txt='We focus on quality over quantity to save your valuable time'
                />
            </Col>
            <Col md='6' lg='4'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/profiles.png'}
                title='15,000+ active profiles'
                txt='We subscribe to all major databases guaranteeing you a steady flow of active candidates'
                />
            </Col>
            <Col md='6' lg='4'>
                <Card
                imgsrc={process.env.PUBLIC_URL + '/images/retention.png'}
                title='99% retention rate'
                txt='Our rigorous screening system ensures the least attrition'
                />
            </Col>
        </Row>
    </section>
)