import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  let history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formUsername = document.getElementById('username').value;
    const formPassword = document.getElementById('password').value;

    dispatch(loginUser({formUsername, formPassword}));
    history.push('/')
  }

  return (
    <div>
      {
        isAuthenticated ? <div> You are logged in </div> :
        <div className='form-container'>
          <h1>
            Account <span className='text-primary'>Login</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>&nbsp;
              <input
                id='username'
                type='username'
                name='username'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>&nbsp;
              <input
                id='password'
                type='password'
                name='password'
                required
                autoComplete="on"
              />
            </div>
            <input
              type='submit'
              value='Login'
            />
          </form>
        </div>
      }
    </div>
  );
};

export default Login;