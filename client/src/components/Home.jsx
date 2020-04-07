import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import Poll from './Poll';
import QuestionForm from './QuestionForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    const [allQuestionsData, setAllQuestionsData] = useState(null);

    useEffect(() => {
        if (allQuestionsData === null){
        fetch(`/questions`)
            .then(response => response.json())
            .then(data => {
                setAllQuestionsData(data)
            });
        }
    }, []);

    console.log("GOT ALL QUESTIONS", allQuestionsData)

    if (allQuestionsData === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {

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

                {allQuestionsData.map(question => 
                    <Poll question={question}
                    />)
                }

            </Container>
                
            </div>
        )
    }
}

export default Home;