import React from 'react';
import { useSelector } from 'react-redux';
import pic from '../static/my_pic.jpg';

const ProfilePic = () => {

    const user = useSelector((state) => state.users.user);

    if (user) {
        return (
            <img src={`/uploads/${user.photo}`} alt="profilepic" className='pic'/>
        )
    } else {
        return (
            <div>No Pic</div>
        )
    }
}

export default ProfilePic;