import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
  REGISTER_USER,
  USER_LOADED,
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

  dispatch({
    type: REGISTER_USER
  });
};

// Authenticate & Authorize a user using the tokem saved in localstorage
export const autoLogin = () => async dispatch => {

  setAuthToken(localStorage.token);

  try {
    const res = await axios.get('/auth/login');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
    // dispatch({ type: AUTH_ERROR });
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

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(autoLogin());

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

// Update user's profile photo
export const updatePhoto = (user, photo) => {
  fetch('/users/editphoto', {
    method: 'POST',
    body: JSON.stringify([user, photo]),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // dispatch({
  //   type: UPDATE_PHOTO
  // });
}


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