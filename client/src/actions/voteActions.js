import {
    ADD_VOTE
} from './types';

  // Add Vote to server
  export const addVote = (userId, optionId) => async dispatch => {

    console.log("plz be here", userId, optionId)

    const voteRes = await fetch('/votes/add', {
      method: 'POST',
      body: JSON.stringify({id: userId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const addVoteData = await voteRes.json();

    console.log("VOTERES", addVoteData)

    await fetch('/options/addVote', {
        method: 'POST',
        body: JSON.stringify([{optionId}, addVoteData]),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
    dispatch({
      type: ADD_VOTE
    });
  };