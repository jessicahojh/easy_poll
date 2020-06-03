import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';


const LandingPage = () => {

    const userId = useSelector((state) => state.users.userId);


    return (
        <div>
            <div className="landing-page">
                <h1>INSTAPOLL</h1>
                <div className="login">
                    <Login/>
                </div>
                <div>Don't have an account?</div>
                <div>Sign Up!</div>
                <div className="register">
                    <Register/>
                </div>
            </div>
        </div>
    )
    
}

export default LandingPage;