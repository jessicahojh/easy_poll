import {
    ADD_VOTE
} from './types';

  // Add Vote to server
  export const addVote = (userId, optionId) => async dispatch => {

    console.log("plz be here", userId, optionId)

    // const voteRes = await fetch('/votes/add', {
    await fetch('/votes/add', {
      method: 'POST',
      body: JSON.stringify({id: userId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // await fetch('/options/addVote', {
    //     method: 'POST',
    //     body: JSON.stringify([optionId, voteRes]),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
  
    dispatch({
      type: ADD_VOTE
    });
  };