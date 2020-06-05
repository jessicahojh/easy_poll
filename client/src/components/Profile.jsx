import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProfilePic from './ProfilePic';
import Posts from './Posts';
import Followers from './Followers';
import Following from './Following';
import Bio from './Bio';
import YourPolls from './YourPolls';
import OtherPolls from './OtherPolls';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {

    const [tab, setTab] = useState("yours");

    function clickYours(e) {
        e.preventDefault();
        setTab("yours");
    };

    function clickOthers(e) {
        e.preventDefault();
        setTab("others");
    };

    const [allQuestionsData, setAllQuestionsData] = useState(null);
    const [allQuestionsUserDidCreate, setAllQuestionsUserDidCreate] = useState(null);
    const [allVoted, setAllVoted] = useState(null);
    const [voteStats, setVoteStats] = useState(null);

    const userId = useSelector((state) => state.users.userId);

    const newQuestion = useSelector((state) => state);

    useEffect(() => {
        Promise.all([
            fetchAllQuestions(),
            fetchAllVotes(),
            fetchVoteStats(),
            fetchAllQuestionsUserDidCreate()
          ]);
    }, [userId, newQuestion]);

    function fetchAllQuestions(){
        fetch(`/questions`)
            .then(response => response.json())
            .then(data => {
                setAllQuestionsData(data);
            });
    };

    function fetchAllVotes(){
        fetch(`/users/getUsersVote/?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setAllVoted(data);
            });
    };

    function fetchVoteStats(){
        fetch(`/votes`)
            .then(response => response.json())
            .then(data => {
                setVoteStats(data);
            });
    };

    function fetchAllQuestionsUserDidCreate(){
        fetch(`/users/getQuestionsUserDidCreate/?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setAllQuestionsUserDidCreate(data);
            });
    }

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

            <div>

                <div className="buttons">
                    <Row>
                        <Col><button type="button" onClick={clickYours}>Your Created Polls</button></Col>
                        <Col><button type="button" onClick={clickOthers}>Other Polls You Voted On</button></Col>
                    </Row>
                </div>

                <div>
                    {tab === "yours" && <YourPolls
                                        allQuestionsUserDidCreate={allQuestionsUserDidCreate}
                                        allVoted={allVoted}
                                        voteStats={voteStats}/>}
                    {tab === "others" && <OtherPolls
                                        allQuestionsData={allQuestionsData}
                                        allVoted={allVoted}
                                        voteStats={voteStats}/>}
                </div>
                    
            </div>

        </Container>
            
        </div>
    );
};

export default Profile;