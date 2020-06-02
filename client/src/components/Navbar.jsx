import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeMainBody } from '../actions/navbarActions';

import '../App.css';

import home from '../static/home.svg';
import search from '../static/search.svg';
import add from '../static/add.svg';
import notification from '../static/notification.svg';
import profile from '../static/profile.svg';


const Navbar = () => {

  const dispatch = useDispatch();

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

    function clickDiscover(e) {
        e.preventDefault();
        dispatch(changeMainBody("discover"));
    }

    function clickSearch(e) {
        e.preventDefault();
        dispatch(changeMainBody("search"));
    }

    function clickAdd(e) {
        e.preventDefault();
        dispatch(changeMainBody("add"));
    }

    function clickNotification(e) {
        e.preventDefault();
        dispatch(changeMainBody("notification"));
    }

    function clickProfile(e) {
        e.preventDefault();
        dispatch(changeMainBody("profile"));
    }

  return (

    <div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div className="topnav">
        <a href="#" className="active">InstaPoll</a>
        <a href="#"><img src={home} alt="home" className='icon' onClick={clickDiscover}/></a>
        <a href="#"><img src={search} alt="search" className='icon' onClick={clickSearch}/></a>
        <a href="#"><img src={add} alt="add" className='icon' onClick={clickAdd}/></a>
        <a href="#"><img src={notification} alt="notification" className='icon' onClick={clickNotification}/></a>
        <a href="#"><img src={profile} alt="profile" className='icon' onClick={clickProfile}/></a>
    
        <div id="myLinks">
          <a href="/about">About</a>
          <a href="/account">Account</a>
          {isAuthenticated ? <a href="/logout">Logout</a> : <a href="/login">Login</a>}
          {isAuthenticated ? '' : <a href="/register">Register</a>}
        </div>

        <a href="javascript:void(0);" className="iconn" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

    </div>

  )
};

export default Navbar;