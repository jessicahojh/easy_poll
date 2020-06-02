import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Discover from './Discover';
import Search from './Search';
import QuestionForm from './QuestionForm';
import Notifications from './Notifications';
import Profile from './Profile';

const Home = () => {

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

    const bodyComponent = useSelector((state) => state.navbar.page);

    return (
        <div className='home'>

            <div>
                {bodyComponent === "discover" && <Discover
                                            allQuestionsData={allQuestionsData}
                                            allVoted={allVoted}
                                            voteStats={voteStats}/>}
                {bodyComponent === "search" && <Search/>}
                {bodyComponent === "add" && <QuestionForm/>}
                {bodyComponent === "notification" && <Notifications/>}
                {bodyComponent === "profile" && <Profile
                                                allQuestionsData={allQuestionsData}
                                                allVoted={allVoted}
                                                voteStats={voteStats}
                                                />}
            </div>
                
        </div>
    )
    
}

export default Home;