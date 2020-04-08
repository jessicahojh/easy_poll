import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
    REGISTER_USER,
    LOGIN_USER,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    DELETE_USER
  } from './types';
  
  // Register User to server
  export const addUser = user => async dispatch => {
    await fetch('/users/add', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // new code to grab the user ID after user object is created
    const res = await fetch('/users/getid');

    const data = await res.json();

    // end 
  
    dispatch({
      type: REGISTER_USER,
      payload: user.username,
      id_data: data // added this to send id payload data 
    });
  };

  // Load User
  export const loadUser = () => async dispatch => {
    setAuthToken(localStorage.token);

    console.log("loadUser function got called")

    try {
      const res = await axios.get('/auth/login');

      console.log("res data from loadUser func", res.data)

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } 
    catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  
  // Login the user if passed check
  export const loginUser = formData => async dispatch => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/auth/login', formData, config);

      console.log("got res data", res.data) // token

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  
  // Logout the user
  export const logoutUser = () => dispatch => {
    dispatch({
      type: LOGOUT_USER
    });
  };

  // Delete the user
  export const deleteUser = user => async dispatch => {
    await fetch('/users/delete', {
      method: 'DELETE',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({
      type: DELETE_USER
    });
  };