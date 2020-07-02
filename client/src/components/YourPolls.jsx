import React from 'react';

import Poll from './Poll';
import Result from './Result';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const YourPolls = ({allQuestionsUserDidCreate, allVoted, voteStats}) => {

    function getVotedOrNonVotedQuestions(allVoted, allQuestionsUserDidCreate){

        const usersVotedQuestionId = [];

        for (let i = 0; i < allVoted.length; i++) {
            usersVotedQuestionId.push(allVoted[i].questionId);
        }

        const votedQuestions = [];
        const nonVotedQuestions = [];

        for (let i = 0; i < allQuestionsUserDidCreate.length; i++) {
            if (usersVotedQuestionId.includes(allQuestionsUserDidCreate[i]._id)){
                votedQuestions.push(allQuestionsUserDidCreate[i]);
            } else {
                nonVotedQuestions.push(allQuestionsUserDidCreate[i]);
            }
        }
        return [votedQuestions, nonVotedQuestions];
    };

    if (allQuestionsUserDidCreate === null || allVoted === null || voteStats === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {
      
        const votedAndNonVoted = getVotedOrNonVotedQuestions(allVoted, allQuestionsUserDidCreate);

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
            </Container>
                
            </div>
        )
    }
};

export default YourPolls;