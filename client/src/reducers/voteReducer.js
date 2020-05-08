import {
    ADD_VOTE
} from '../actions/types';

const initialState = {
    vote: null
}


export default (state = initialState, action) => {
    switch(action.type) {

    case ADD_VOTE:
        return {
            vote: action.payload,
        };
  

    default:
        return state;
    };
};