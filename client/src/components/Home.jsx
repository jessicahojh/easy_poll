import React, { useState } from 'react'

import Poll from './Poll';
import QuestionForm from './QuestionForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    return (
        <div>

        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                <QuestionForm/>
                </Col>
                <Col></Col>
            </Row>

                <Poll/>

        </Container>
            
        </div>
    )
}

export default Home;