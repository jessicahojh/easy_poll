import {
    CHANGE_MAIN_BODY
} from './types';

export const changeMainBody = (page) => dispatch => {
    dispatch({
        type: CHANGE_MAIN_BODY,
        payload: page
    });
};