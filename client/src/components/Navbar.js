import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

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
            <Link className='navLink' to='/login'>Login</Link>
        </li>
        <li>
            <Link className='navLink' to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;