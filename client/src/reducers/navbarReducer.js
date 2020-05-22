import {
    CHANGE_MAIN_BODY
} from '../actions/types';

const initialState = {
    page: "profile"
}

export default (state = initialState, action) => {
    switch(action.type) {

    case CHANGE_MAIN_BODY:
        return {
            page: action.payload
        };

    default:
        return state;
    };
};