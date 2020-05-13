import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarC = () => {

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Easy Poll</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {isAuthenticated ? <Nav.Link href="/logout">Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
          {isAuthenticated ? '' : <Nav.Link href="/register">Register</Nav.Link>}
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavbarC;