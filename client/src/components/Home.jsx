import React from 'react';

import { useSelector } from 'react-redux';

import Discover from './Discover';
import Search from './Search';
import QuestionForm from './QuestionForm';
import Notifications from './Notifications';
import Profile from './Profile';

const Home = () => {

    const bodyComponent = useSelector((state) => state.navbar.page);

    return (
        <div className='home'>

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