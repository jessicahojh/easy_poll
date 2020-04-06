import {
    GET_DB_QUESTIONS,
    ADD_QUESTIONS_AND_OPTIONS
} from '../actions/types';

const initialState = {
    question: null
}

export default (state = initialState, action) => {
    switch(action.type) {

    case GET_DB_QUESTIONS:
        return {
            question: action.payload,
        };
  
    case ADD_QUESTIONS_AND_OPTIONS:
        return {
            question: action.payload,
        };

    default:
        return state;
    };
};