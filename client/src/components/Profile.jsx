import React, { useState, useEffect } from 'react';

import Poll from './Poll';
import Result from './Result';
import ProfilePic from './ProfilePic';
import Posts from './Posts';
import Followers from './Followers';
import Following from './Following';
import Bio from './Bio';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { useSelector } from 'react-redux';

const Profile = () => {

    const [allQuestionsData, setAllQuestionsData] = useState(null);
    const [allVoted, setAllVoted] = useState(null);
    const [voteStats, setVoteStats] = useState(null);

    const userId = useSelector((state) => state.users.userId);

    const newQuestion = useSelector((state) => state);

    useEffect(() => {
        Promise.all([
            fetchAllQuestions(),
            fetchAllVotes(),
            fetchVoteStats()
          ]);
    }, [userId, newQuestion]);

    function fetchAllQuestions(){
        fetch(`/questions`)
            .then(response => response.json())
            .then(data => {
                setAllQuestionsData(data);
            });
    }

    function fetchAllVotes(){
        fetch(`/users/getUsersVote/?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setAllVoted(data);
            });
    }

    function fetchVoteStats(){
        fetch(`/votes`)
            .then(response => response.json())
            .then(data => {
                setVoteStats(data);
            });
    }

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
                    <Col><ProfilePic/></Col>
                    <Col><Posts/></Col>
                    <Col><Followers/></Col>
                    <Col><Following/></Col>
                </Row>

                <Row>
                    <Bio/>
                </Row>

                <Tabs defaultActiveKey="Yours" id="uncontrolled-tab-example">
                    <Tab eventKey="Yours" title="Your Created Polls">
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

                        {votedAndNonVoted[1].map((question, index) => 
                                <Poll 
                                question={question}
                                key={index}
                                />      
                        )}
                    </Tab>
                    <Tab eventKey="Others" title="Other Polls You Voted On">
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

                        {votedAndNonVoted[1].map((question, index) => 
                            <Poll 
                            question={question}
                            key={index}
                            />      
                        )} 
                    </Tab>
                </Tabs>

            </Container>
                
            </div>
        )
    }
}

export default Profile;