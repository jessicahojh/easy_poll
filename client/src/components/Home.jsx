import React, { useState, useEffect } from 'react'

import Poll from './Poll';
import Result from './Result';
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
    }, [allQuestionsData]);

    if (allQuestionsData === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {

        console.log("ALL QUESTIONS DATA", allQuestionsData)

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

                {allQuestionsData.map((question, index) => 
                    <Poll 
                    question={question}
                    key={index}
                    />)
                }

                {allQuestionsData.map((question, index) => 
                    <Result
                    question={question}
                    key={index}
                    />)
                }

            </Container>
                
            </div>
        )
    }
}

export default Home;