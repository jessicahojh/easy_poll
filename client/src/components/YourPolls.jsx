import React from 'react';

import Poll from './Poll';
import Result from './Result';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const YourPolls = ({allQuestionsData, allVoted, voteStats}) => {

    function getVotedOrNonVotedQuestions(allVoted, allQuestionsData){

        const usersVotedQuestionId = [];

        for (let i = 0; i < allVoted.length; i++) {
            usersVotedQuestionId.push(allVoted[i].questionId);
        }

        const votedQuestions = [];
        const nonVotedQuestions = [];

        for (let i = 0; i < allQuestionsData.length; i++) {
            if (usersVotedQuestionId.includes(allQuestionsData[i]._id)){
                votedQuestions.push(allQuestionsData[i]);
            } else {
                nonVotedQuestions.push(allQuestionsData[i]);
            }
        }
        return [votedQuestions, nonVotedQuestions];
    };

    if (allQuestionsData === null || allVoted === null || voteStats === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {
      
        const votedAndNonVoted = getVotedOrNonVotedQuestions(allVoted, allQuestionsData);

        return (
            <div className='app'>

            <Container>
                
                        <Row>
                            {votedAndNonVoted[0].map((question, index) => 
                                <Col xs={4}>
                                    <Result
                                    question={question}
                                    key={index}
                                    voteStats={voteStats}
                                    />  
                                </Col>   
                            )}
                        </Row>

                        <Row>
                            {votedAndNonVoted[1].map((question, index) =>
                                <Col xs={4}>
                                    <Poll 
                                    question={question}
                                    key={index}
                                    />   
                                </Col>    
                            )}
                        </Row>

            </Container>
                
            </div>
        )
    }
};

export default YourPolls;