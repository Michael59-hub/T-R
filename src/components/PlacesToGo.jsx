import React from 'react';
import Header from './Header';
import { Places } from './Places';

function PlacesToGo(){
    return(
        <div className="PlacesToStay">
            <Header />
            <div className="places-to-go">
               <h1 className="places-header">Here are some places to go</h1>
               <div className="places-main">
                  {Places.map((place, key) =>{
                   return(
                        <div className="places-card" key={key}>
                            <div class="card" style={{width: '100%', borderRadius: '15px', borderBottom: 'none'}}>
                                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={place.pic_1} class="d-block w-100 places-pic" style={{height: '300px'}} alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={place.pic_2} class="d-block w-100 places-pic" style={{height: '300px'}} alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={place.pic_3} class="d-block w-100 places-pic" style={{height: '300px'}} alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{place.place_name}</h5>
                                    <p class="card-text">{place.history}</p>
                                    <p className="card-text places-extra" id={place.id}>{place.more}</p>
                                    <p class="card-text">{place.review}</p>
                                    
                                </div>
                                <button className="places-more" onClick={place.click} >More<i className="fa fa-angle-down"></i></button>
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


export default PlacesToGo;