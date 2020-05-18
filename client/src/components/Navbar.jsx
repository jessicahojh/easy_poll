import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

    <>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


    <div className="topnav">
      <a href="#home" className="active">InstaPoll</a>
  
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>

    </>




    // <Navbar expand="lg" fixed="top" bg="dark" variant="dark" className="custom-nav">
      // <Navbar.Brand href="/">InstaPoll</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto cus-white">
    //       <Nav.Link href="/">Home</Nav.Link>
    //       <Nav.Link href="/about">About</Nav.Link>
    //       {isAuthenticated ? <Nav.Link href="/logout">Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
    //       {isAuthenticated ? '' : <Nav.Link href="/register">Register</Nav.Link>}
    //       <NavDropdown title="Account" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  )
};

export default NavbarC;