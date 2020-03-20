import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const isLogged = useSelector((state) => state.users.isLogged);

  return (
    <div className='navbar'>
      <h1>
        Easy Poll
      </h1>
      <br></br>
      <ul>
        <li>
            <Link className='navLink' to='/'>Home</Link>
        </li>
        <li>
            <Link className='navLink' to='/about'>About</Link>
        </li>
        <li>
          {
            isLogged ? <Link className='navLink' to='/logout'>Logout</Link>
            : <Link className='navLink' to='/login'>Login</Link>
          }
        </li>
        <li>
          {
            isLogged ? ''
            : <Link className='navLink' to='/register'>Register</Link>
          }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;