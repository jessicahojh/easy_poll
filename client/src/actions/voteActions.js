import {
    ADD_VOTE
} from './types';

  // Add Vote to server
  export const addVote = (userId, optionId) => async dispatch => {

    const voteRes = await fetch('/vote/add', {
      method: 'POST',
      body: JSON.stringify(userId),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await fetch('/options/addVote', {
        method: 'POST',
        body: JSON.stringify([optionId, voteRes]),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
    dispatch({
      type: ADD_VOTE
    });
  };