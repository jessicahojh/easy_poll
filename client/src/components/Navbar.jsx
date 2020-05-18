import React from 'react';
import { useSelector } from 'react-redux';

import '../App.css';

const NavbarC = () => {

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  function myFunction(e) {
    e.preventDefault();

    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (

    <div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div className="topnav">
        <a href="#home" className="active">InstaPoll</a>
    
        <div id="myLinks">
          <a href="#about">About</a>
          {isAuthenticated ? <a href="/logout">Logout</a> : <a href="/login">Login</a>}
          {isAuthenticated ? '' : <a href="/register">Register</a>}
        </div>

        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

    </div>

  )
};

export default NavbarC;