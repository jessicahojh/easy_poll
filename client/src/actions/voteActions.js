import {
    ADD_VOTE
} from './types';

  // Add Vote to server
  export const addVote = (userId, optionId, questionId, index) => async dispatch => {

    const voteRes = await fetch('/votes/add', {
      method: 'POST',
      body: JSON.stringify([{userId}, {optionId}, {questionId}]),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log("after posting to Db")

    const addVoteData = await voteRes.json();

    console.log("about to add vote to options")

    const abc = await fetch('/options/addVote', {
        method: 'POST',
        body: JSON.stringify([{optionId}, addVoteData, index]),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    console.log("about to call dispatch", optionId)
  
    dispatch({
      type: ADD_VOTE,
      payload: optionId
    });
  };