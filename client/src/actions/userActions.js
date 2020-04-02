import {
    REGISTER_USER,
    LOGIN_USER,
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
  
  // Login the user if passed check
  export const loginUser = (username) => dispatch => {
    dispatch({
      type: LOGIN_USER,
      payload: username
    });
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