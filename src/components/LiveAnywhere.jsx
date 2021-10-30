import React from 'react';
import pic from '../img/first-image.jpg';
import getaways from '../img/outdoor_getaways.jpg';
import unique from '../img/unique_stays.png';
import Homes from '../img/Homes.jpg';

function LiveAnywhere(){
    return(
        <div className="liveAnywhere">
            <div className="liveAnywhere-header">Live Anywhere</div>
            <div className="liveAnywhere-row">
                <div className="liveAnywhere-item">
                    <img src={getaways}  className="liveAnywhere-pic" />
                    <span className="liveAnywhere-text"><strong>Outdoor getaways</strong></span>
                </div>
                <div className="liveAnywhere-item">
                    <img src={unique} className="liveAnywhere-pic" />
                    <span className="liveAnywhere-text"><strong>Unique Stays</strong></span>
                </div>
                <div className="liveAnywhere-item">
                    <img src={Homes}  className="liveAnywhere-pic" />
                    <span className="liveAnywhere-text"><strong>Entire Homes</strong></span>
                </div>
            </div>
            <div className="liveAnywhere-hosting">
                <div className="hosting-text">
                    <p className="hosting-head">Try Hosting</p><br />
                    <p>Earn exta income and unlock new<br />opportunities by sharing your space.</p><br />
                    <button className="hosting-button">Learn More</button>
                </div>
            </div>
            
        </div>
    )
}


export default LiveAnywhere;