import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

import { useHistory } from 'react-router-dom';

const Logout = () => {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <div>
        <div className='form-container'>
          <h1>Are you sure you want to log out?</h1>
          <form onSubmit={onSubmit}>
            <input
              type='submit'
              value='Logout'
            />
          </form>
        </div>
    </div>
  );
};

export default Logout;