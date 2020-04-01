import {
    GET_DB_QUESTIONS,
    ADD_QUESTION
} from '../actions/types';

const initialState = {
    questions: null
}

export default (state = initialState, action) => {
    switch(action.type) {

    case GET_DB_QUESTIONS:
        return {
            question: action.payload,
        };
  
    case ADD_QUESTION:
        return {
            question: action.payload,
        };

    default:
        return state;
    };
};