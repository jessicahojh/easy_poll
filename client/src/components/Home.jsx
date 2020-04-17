import React, { useState, useEffect } from 'react'

import Poll from './Poll';
import Result from './Result';
import QuestionForm from './QuestionForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    const [allQuestionsData, setAllQuestionsData] = useState(null);
    const [allVoted, setAllVoted] = useState(null);

    const userId = useSelector((state) => state.users.userId)

    useEffect(() => {
        if (allQuestionsData === null){
        fetch(`/questions`)
            .then(response => response.json())
            .then(data => {
                setAllQuestionsData(data)
            });
        }
        if (allVoted === null){
        fetch(`/users/getUsersVote/?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setAllVoted(data)
            });
        }
    }, [allQuestionsData, allVoted]);


    // function getResults(){

    // };


    // function getPolls(){

    // }


    if (allQuestionsData === null && allVoted === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {

        // dispatch();


        console.log("ALL QUESTIONS DATA", allQuestionsData)
        console.log("ALL VOTES DATA", allVoted)

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
                    <>
                        <Poll 
                        question={question}
                        key={index}
                        />

                        <Result
                        question={question}
                        key={index}
                        />
                    </>       
                )}

                {/* {allVoted.map(obj => <div>{obj}</div>)} */}

            </Container>
                
            </div>
        )
    }
}

export default Home;