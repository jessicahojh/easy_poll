import React, { useState } from 'react'

import Poll from './Poll';
import CreateForm from './CreateForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    const [user, setUser] = useState("")
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [] = useState()
    const [] = useState()

    const handleQuestion = e => {
        setQuestion(e.target.value)
    }

    const handleOption1 = e => {
        setOption1(e.target.value)
    }

    const handleOption2 = e => {
        setOption2(e.target.value)
    }

    const handleSubmit= e => {
        e.preventDefault();
        if (question !== "" && option1 !== "" && option2 !== "") {

        }
    }

    return (
        <div>

        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                <CreateForm
                    handleQuestion={handleQuestion}
                    handleOption1={handleOption1}
                    handleOption2={handleOption2}
                    handleSubmit={handleSubmit}
                />
                </Col>
                <Col></Col>
            </Row>

                <Poll/>

        </Container>
            
        </div>
    )
}

export default Home;