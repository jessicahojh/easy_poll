import React, { useState } from 'react';

import ProfilePic from './ProfilePic';
import Posts from './Posts';
import Followers from './Followers';
import Following from './Following';
import Bio from './Bio';
import YourPolls from './YourPolls';
import OtherPolls from './OtherPolls';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {

    const [tab, setTab] = useState("yours");

    function clickYours(e) {
        e.preventDefault();
        setTab("yours");
    }

    function clickOthers(e) {
        e.preventDefault();
        setTab("others");
    }

    return (
        <div className='app'>

        <Container>
            <Row>
                <Col><ProfilePic/></Col>
                <Col><Posts/></Col>
                <Col><Followers/></Col>
                <Col><Following/></Col>
            </Row>

            <Row>
                <Bio/>
            </Row>

            <div>

                <div className="buttons">
                    <Row>
                        <Col><button type="button" onClick={clickYours}>Your Created Polls</button></Col>
                        <Col><button type="button" onClick={clickOthers}>Other Polls You Voted On</button></Col>
                    </Row>
                </div>

                <div>
                    {tab === "yours" && <YourPolls/>}
                    {tab === "others" && <OtherPolls/>}
                </div>
                    
            </div>

        </Container>
            
        </div>
    )
}

export default Profile;