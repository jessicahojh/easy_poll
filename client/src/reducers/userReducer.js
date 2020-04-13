import {
    REGISTER_USER,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    DELETE_USER
  } from '../actions/types';
  
  const initialState = {
    user: null,
    isAuthenticated: false
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
  
      case REGISTER_USER:

      case USER_LOADED:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true
        };

      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true
        };

      case LOGIN_FAIL:
  
      case LOGOUT_USER:
        localStorage.removeItem('token');
        return {
          token: null,
          isAuthenticated: false,
          user: null
        };

      case DELETE_USER:
        return {
          user: null,
          isAuthenticated: false
        }
  
      default:
        return state;
    };
  };