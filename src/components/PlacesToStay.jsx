import React from 'react';
import Header from './Header';
import { Places_Stay } from './PlacesToStay';

function PlacesToStay(){
    return(
        <div className="PlacesToStay">
            <Header />
            <div className="places-to-Stay">
               <h1 className="places-header">Places to Stay</h1>
               <p className="places-text">We offer only the best resorts and to hotels tostay so that your trip can be as bliss as possible.<br />From the continental hotel to de jure we have the bext in store for you. </p>
               <div className="places-main">
               {Places_Stay.map((place, key) =>{
                   return(
                        <div className="places-card" key={key}>
                            <div class="card" style={{width: '100%', borderRadius: '15px', borderBottom: 'none'}}>
                                <img src={place.place} alt="" className="places-pic stay-pic" />
                                <div class="card-body">
                                    <h5 class="card-title">{place.place_name}</h5>
                                    <p class="card-text">{place.description}</p>
                                    <p class="card-text">{place.Rating}</p>
                                </div>
                            </div>
                        </div> 
                   )
                   
               }
               )}
               </div>
               
               
            </div>
            
        </div>
    )
}


export default PlacesToStay;