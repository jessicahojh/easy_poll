import {
    GET_DB_OPTIONS,
    ADD_OPTION
} from './types';

    // Get user's options from database.
    export const getDbOptions = question => async dispatch => {
    const res = await fetch(`/options`);
    const data = await res.json();
  
    dispatch({
      type: GET_DB_OPTIONS,
      payload: data
    });
  };

  // Add Option to server
  export const addOption = option => async dispatch => {
    await fetch('/options/add', {
      method: 'POST',
      body: JSON.stringify(option),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    dispatch({
      type: ADD_OPTION,
      payload: option
    });
  };