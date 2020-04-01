import {
    GET_DB_OPTIONS,
    ADD_OPTION
} from '../actions/types';

const initialState = {
    option: null
}

export default (state = initialState, action) => {
    switch(action.type) {

    case GET_DB_OPTIONS:
        return {
            option: action.payload,
        };
  
    case ADD_OPTION:
        return {
            option: action.payload,
        };

    default:
        return state;
    };
};