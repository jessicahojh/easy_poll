import React from 'react';
import { useSelector } from 'react-redux';

import '../App.css';

import home from '../static/home.svg';
import search from '../static/search.svg';
import add from '../static/add.svg';
import notification from '../static/notification.svg';
import profile from '../static/profile.svg';


const Navbar = () => {

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
        <a href="/discover" className="active">InstaPoll</a>
        <a href="/discover"><img src={home} alt="home" className='icon'/></a>
        <a href="/search"><img src={search} alt="search" className='icon'/></a>
        <a href="/add"><img src={add} alt="add" className='icon'/></a>
        <a href="/notifications"><img src={notification} alt="notifications" className='icon'/></a>
        <a href="/profile"><img src={profile} alt="profile" className='icon'/></a>
    
        <div id="myLinks">
          <a href="/about">About</a>
          <a href="/account">Account</a>
          <a href="/logout">Logout</a> 
        </div>

        <a href="javascript:void(0);" className="iconn" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

    </div>

  )
};

export default Navbar;