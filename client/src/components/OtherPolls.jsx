import React from 'react';

import Poll from './Poll';
import Result from './Result';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OtherPolls = ({allQuestionsUserDidNotCreate, allVoted, voteStats}) => {

  function getVotedOrNonVotedQuestions(allVoted, allQuestionsUserDidNotCreate){

    const usersVotedQuestionId = [];

    for (let i = 0; i < allVoted.length; i++) {
        usersVotedQuestionId.push(allVoted[i].questionId);
    }

    const votedQuestions = [];
    const nonVotedQuestions = [];

    for (let i = 0; i < allQuestionsUserDidNotCreate.length; i++) {
        if (usersVotedQuestionId.includes(allQuestionsUserDidNotCreate[i]._id)){
            votedQuestions.push(allQuestionsUserDidNotCreate[i]);
        } else {
            nonVotedQuestions.push(allQuestionsUserDidNotCreate[i]);
        }
    }
    return [votedQuestions, nonVotedQuestions];
  };

  if (allQuestionsUserDidNotCreate === null || allVoted === null || voteStats === null) {
    return (
        <div>
            <h2> Loading...</h2>
        </div>
    )

  } else {
  
    const votedAndNonVoted = getVotedOrNonVotedQuestions(allVoted, allQuestionsUserDidNotCreate);

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

export default OtherPolls;