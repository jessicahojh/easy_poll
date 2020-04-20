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

    // const [votedQuestions, setVotedQuestions] = []
    // const [nonVotedQuestions, setNonVotedQuestions] = []

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

        console.log("USERS VOTED QUES ID", usersVotedQuestionId)

        const votedQuestions = []
        const nonVotedQuestions = []

        for (let i = 0; i < allQuestionsData.length; i++) {
            if (usersVotedQuestionId.includes(allQuestionsData[i]._id)){
                votedQuestions.push(allQuestionsData[i])
                console.log("includes and i is", i)
            } else {
                nonVotedQuestions.push(allQuestionsData[i])
                console.log("does not include and i is", i)
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

        const answers = getVotedOrNonVotedQuestions(allVoted, allQuestionsData)

        console.log("VOTED", answers[0])
        console.log("NONVOTED", answers[1])

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