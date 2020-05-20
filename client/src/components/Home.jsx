import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import home from '../static/home.svg';
import search from '../static/search.svg';
import add from '../static/add.svg';
import notification from '../static/notification.svg';
import profile from '../static/profile.svg';

import Discover from './Discover';
import Search from './Search';
import QuestionForm from './QuestionForm';
import Notifications from './Notifications';
import Profile from './Profile';

const Home = () => {

    const [bodyComponent, setBodyComponent] = useState("profile");

    function clickDiscover(e) {
        e.preventDefault();
        setBodyComponent("discover");
    }

    function clickSearch(e) {
        e.preventDefault();
        setBodyComponent("search");
    }

    function clickAdd(e) {
        e.preventDefault();
        setBodyComponent("add");
    }

    function clickNotification(e) {
        e.preventDefault();
        setBodyComponent("notification");
    }

    function clickProfile(e) {
        e.preventDefault();
        setBodyComponent("profile");
    }

    return (
        <div className='app'>

            <div className="buttons">
                <Row>
                    <Col><button type="button"><img src={home} alt="home" className='icon' onClick={clickDiscover}/></button></Col>
                    <Col><button type="button"><img src={search} alt="search" className='icon' onClick={clickSearch}/></button></Col>
                    <Col><button type="button"><img src={add} alt="add" className='icon' onClick={clickAdd}/></button></Col>
                    <Col><button type="button"><img src={notification} alt="notification" className='icon' onClick={clickNotification}/></button></Col>
                    <Col><button type="button"><img src={profile} alt="profile" className='icon' onClick={clickProfile}/></button></Col>
                </Row>
            </div>

            <div>
                {bodyComponent === "discover" && <Discover/>}
                {bodyComponent === "search" && <Search/>}
                {bodyComponent === "add" && <QuestionForm/>}
                {bodyComponent === "notification" && <Notifications/>}
                {bodyComponent === "profile" && <Profile/>}
            </div>
                
        </div>
    )
    
}

export default Home;