import React from 'react';
import Login from '../components/auth/Login';

const LandingPage = () => {

    return (
        <div>
            <div className="landing-page">
                <h1>INSTAPOLL</h1>
                <div className="login">
                    <Login/>
                </div>
                <div>Don't have an account? <a href="/register" className="active register-link">Sign Up!</a></div>
            </div>
        </div>
    );
};

export default LandingPage;