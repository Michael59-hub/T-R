import React from 'react';
import pic from '../img/first-image.jpg';
import activities from '../img/activities.jpg';
import online from '../img/online_activities.jpg';
import olympians from '../img/olympians.jpg';

function Discover(){
    return(
        <div className="liveAnywhere">
            <div className="liveAnywhere-header">Discover things to do</div>
            <div className="liveAnywhere-row">
                <div className="liveAnywhere-item">
                    <img src={activities}  className="liveAnywhere-pic" />
                    <span className="liveAnywhere-text"><strong>Experiences</strong></span>
                    <p>Find unforgettable activities near you</p>
                </div>
                <div className="liveAnywhere-item">
                    <img src={online}  className="liveAnywhere-pic" />
                    <span className="liveAnywhere-text"><strong>Online Experiences</strong></span>
                    <p>Live, interactive activities led by Hosts</p>
                </div>
                <div className="liveAnywhere-item">
                    <img src={olympians}  className="liveAnywhere-pic" />
                    <span className="liveAnywhere-text"><strong>Olympians & Paralympians</strong></span>
                    <p>Online activities hosted by athletes</p>
                </div>
            </div>
        </div>
    )
}


export default Discover;