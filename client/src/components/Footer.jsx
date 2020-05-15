import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import home from '../static/home.svg';
import search from '../static/search.svg';
import add from '../static/add.svg';
import heart from '../static/heart.svg';
import profile from '../static/profile.svg';

import '../App.css';

const Footer = () => {

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  return (
    <Navbar expand="lg" fixed="bottom" bg="dark" variant="dark">
        <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="#"><img src={home} alt="home" className='footer-icon'/></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1"><img src={search} alt="search" className='footer-icon'/></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2"><img src={add} alt="add" className='footer-icon'/></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-3"><img src={heart} alt="heart" className='footer-icon'/></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-4"><img src={profile} alt="profile" className='footer-icon'/></Nav.Link>
            </Nav.Item>
        </Nav>
     
    </Navbar>
  )
};

export default Footer;