import {
    GET_DB_QUESTIONS,
    ADD_QUESTIONS_AND_OPTIONS
} from './types';

    // Get all questions from database.
    export const getDbQuestions = question => async dispatch => {
    const res = await fetch(`/questions`);
    const data = await res.json();
  
    dispatch({
      type: GET_DB_QUESTIONS,
      payload: data
    });
  };

  export const addQuestionAndOptions = (question, optionA, optionB) => async dispatch => {

    const optionARes = await fetch('/options/add', {
      method: 'POST',
      body: JSON.stringify(optionA),
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
    const optAData = await optionARes.json();

    const optionBRes = await fetch('/options/add', {
      method: 'POST',
      body: JSON.stringify(optionB),
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
    const optBData = await optionBRes.json();

    await fetch('/questions/add', {
      method: 'POST',
      body: JSON.stringify([question, optAData, optBData]),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({
      type: ADD_QUESTIONS_AND_OPTIONS,
      payload: question
    });
  };
