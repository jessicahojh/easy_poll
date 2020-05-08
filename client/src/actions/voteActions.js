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

    const addVoteData = await voteRes.json();

    await fetch('/options/addVote', {
        method: 'POST',
        body: JSON.stringify([{optionId}, addVoteData, index]),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
    dispatch({
      type: ADD_VOTE,
      payload: optionId
    });
  };