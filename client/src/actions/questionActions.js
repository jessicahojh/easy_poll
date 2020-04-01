import {
    GET_DB_QUESTIONS,
    ADD_QUESTION
} from './types';

    // Get user's bookmarks from database.
    export const getDbQuestions = question => async dispatch => {
    const res = await fetch(`/questions`);
    const data = await res.json();
  
    dispatch({
      type: GET_DB_QUESTIONS,
      payload: data
    });
  };

  // Add Question to server
  export const addQuestion = question => async dispatch => {
    await fetch('/questions/add', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    dispatch({
      type: ADD_QUESTION,
      payload: question
    });
  };