import {
    GET_DB_QUESTIONS,
    ADD_QUESTIONS_AND_OPTIONS
} from '../actions/types';

const initialState = {
    allQuestions: null,
    currentNewQuestion: null
}

export default (state = initialState, action) => {
    switch(action.type) {

    case GET_DB_QUESTIONS:
        return {
            allQuestions: action.payload,
        };
  
    case ADD_QUESTIONS_AND_OPTIONS:
        return {
            currentNewQuestion: action.payload,
        };

    default:
        return state;
    };
};