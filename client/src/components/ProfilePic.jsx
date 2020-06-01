import React from 'react';
import { useSelector } from 'react-redux';
import defaultPic from '../static/defaultPic.jpg';

const ProfilePic = () => {

    const user = useSelector((state) => state.users.user);

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