import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../actions/voteActions';

import OtherProfiles from './otherUsers/OtherProfiles';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ask from '../static/ask.svg';

const Poll = ({ question }) => {

  const [voteStats, setVoteStats] = useState(null);
  const [username, setUsername] = useState(null);

  const dispatch = useDispatch();

  const questionTitle = question.question;
  const option1 = question.options[0].option;
  const option1Id = question.options[0]._id;
  const option2 = question.options[1].option;
  const option2Id = question.options[1]._id;
  const questionUser = question.userId;
  
  const questionId = question._id;

  const user = useSelector((state) => state.users);

  useEffect(() => {
    Promise.all([
        fetchVotes(),
        fetchUsername()
      ]);
  }, [user]);

  function fetchVotes(){
    fetch(`/votes`)
        .then(response => response.json())
        .then(data => {
            setVoteStats(data);
        });
  };

  function fetchUsername(){
    fetch(`/users/getUsername/?questionUser=${questionUser}`)
        .then(response => response.json())
        .then(data => {
            setUsername(data);
        });
  };

  function onClick1(e) {
    e.preventDefault();

    const userId = user.user._id;
    const number = 0;
    dispatch(addVote(userId, option1Id, questionId, number));
  }

  function onClick2(e) {
    e.preventDefault();

    const userId = user.user._id;
    const number = 1;
    dispatch(addVote(userId, option2Id, questionId, number));
  }

  return (
    <div>
      <div id={questionId} className='poll'>
        <div>Posted by <a href={`profiles/${username}/${questionUser}`} className="active">{username}</a></div>
        <img src={ask} alt="ask" className='poll-icon'/>
        <div className="question-title">{questionTitle}</div>
          <button type="button" name="button1" value={option1Id} onClick={onClick1} className="choice-btn">{option1}</button>
          <button type="button" name="button2" value={option2Id} onClick={onClick2} className="choice-btn">{option2}</button>
        </div> 
    </div>
  )
}

export default Poll;
