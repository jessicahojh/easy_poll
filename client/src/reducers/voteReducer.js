import {
    ADD_VOTE
} from '../actions/types';


export default (state = initialState, action) => {
    switch(action.type) {

    case ADD_VOTE:

    default:
        return state;
    };
};