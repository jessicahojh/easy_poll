import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import defaultPic from '../static/defaultPic.jpg';

const ProfilePic = ({userId}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserInfo()
    }, [])

    function fetchUserInfo(){
        fetch(`/users/getUserInfo/?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
            });
    }

    if (user && user.photo !== "") {
        return (
            <img src={`/uploads/${user.photo}`} alt="profilepic" className='pic'/>
        )
    } else {
        return (
            <img src={defaultPic} alt="defaultpic" className='pic'/>
        )
    }
}

export default ProfilePic;