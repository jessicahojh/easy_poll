import React, { useState, useEffect } from 'react'

import Poll from './Poll';
import Result from './Result';
import QuestionForm from './QuestionForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

const Home = () => {

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


    function getVotedOrNonVotedQuestions(allVoted, allQuestionsData){

        const usersVotedQuestionId = []

        for (let i = 0; i < allVoted.length; i++) {
            usersVotedQuestionId.push(allVoted[i].questionId)
        }

        const votedQuestions = []
        const nonVotedQuestions = []

        for (let i = 0; i < allQuestionsData.length; i++) {
            if (usersVotedQuestionId.includes(allQuestionsData[i]._id)){
                votedQuestions.push(allQuestionsData[i])
            } else {
                nonVotedQuestions.push(allQuestionsData[i])
            }
        }
        return [votedQuestions, nonVotedQuestions]
    };


    if (allQuestionsData === null || allVoted === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {

        console.log("ALL QUESTIONS DATA", allQuestionsData)
        console.log("ALL VOTES DATA", allVoted)

        const votedAndNonVoted = getVotedOrNonVotedQuestions(allVoted, allQuestionsData)

        console.log("VOTED", votedAndNonVoted[0])
        console.log("NONVOTED", votedAndNonVoted[1])

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

                {votedAndNonVoted[0].map((question, index) => 
                        <Result
                        question={question}
                        key={index}
                        />     
                )}

                {votedAndNonVoted[1].map((question, index) => 
                        <Poll 
                        question={question}
                        key={index}
                        />      
                )}

            </Container>
                
            </div>
        )
    }
}

export default Home;