import {
    REGISTER_USER,
    LOGIN_USER,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    DELETE_USER
  } from '../actions/types';
  
  const initialState = {
    user: null,
    user_id: null,
    isAuthenticated: null
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
  
      case REGISTER_USER:
        return {
          user: action.payload,
          user_id: action.id_data,
          isAuthenticated: true
        };
  
      case LOGIN_USER:
        return {
          user: action.payload,
          isAuthenticated: true
        };

      case USER_LOADED:
        return {
        isAuthenticated: true
        };

      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          isAuthenticated: true
        };

      case LOGIN_FAIL:
  
      case LOGOUT_USER:
        return {
          user: null,
          isAuthenticated: false
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