import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Card.css';

export default () => (
    <section className='usp'>
        <Row>
            <Col md='6' lg='4'>
                <Card
                imgsrc='/review.png'
                title='EXPERT REVIEW'
                txt='Get your resume and linkedin profile reviewed by an industry veteran'
                />
            </Col>
            <Col md='6' lg='4'>
                <Card
                imgsrc='/interview.png'
                title='MOCK INTERVIEWS'
                txt='Get one practice interview of 30 minutes followed by a career counselling session'
                />
            </Col>
            <Col md='6' lg='4'>
                <Card
                imgsrc='/visible.png'
                title='HIGH VISIBILITY'
                txt='We prioritise your profile and do not charge companies for your placement, making the entire process frictionless'
                />
            </Col>
        </Row>
    </section>
)