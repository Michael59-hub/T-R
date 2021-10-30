import React from 'react';
import Header from './Header';
import background from '../img/pexels.jpg';
import Explore from './Explore';
import LiveAnywhere from './LiveAnywhere';
import Discover from './Discover';
import { Services } from './Services';
import image from '../img/pexels.jpg';
import Converter from './Converter';

function HomePage(){
    return(
        <div className="HomePage">
            <Header />
            <div className="first" style= {{backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
                <div className="first-main">
                    <div className="form">
                        <form>
                            <div className="customer-names">
                                <input type="text" placeholder="First Name" class="names" />
                                <input type="text" placeholder="Last Name" class="names" />
                            </div>
                            <input type="email" placeholder="E-mail" class="normal" />
                            <input type="tel" patter="[0-9]{3}-[0-9]{4}-[0-9]{3}" placeholder="Phone No." class="normal" />
                            <div className="form-dropdowns" id="home-dropdowns">
                                <div class="form-floating">
                                    <select class="form-select bg-dark" style={{backgroundColor: 'blue'}} id="floatingSelect" aria-label="Floating label select example">
                                        <i class="fa fa-caret-down"></i>
                                        <option selected>Children?</option>
                                        <option style={{color: 'white'}} value="1">1</option>
                                        <option  style={{color: 'white'}} value="2">2</option>
                                        <option  style={{color: 'white'}} value="3">3</option>
                                        <option  style={{color: 'white'}} value="3">4</option>
                                        <option  style={{color: 'white'}} value="3">5</option>
                                        <option  style={{color: 'white'}} value="3">6</option>
                                        <option  style={{color: 'white'}} value="3">7</option>
                                    </select>
                                    <label for="floatingSelect" style={{color: `white`}}>Number of Children</label>
                                </div>
                                <div class="form-floating">
                                    <select class="form-select bg-dark" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Pets?</option>
                                        <option style={{color: 'white'}} value="Yes">Yes</option>
                                        <option style={{color: 'white'}} value="No">No</option>
                                    </select>
                                    <label for="floatingSelect" style={{color: `white`}}>Will there be pets</label>
                                </div>
                            </div>
                            <input type="submit" value="Sign Up" class="submit" /> 
                        </form>
                    
                    </div>
                    <div className="welcome-msg">
                        <div class="welcome">
                            <h1>Want to travel but looking for a place to stay?</h1>
                            <br />
                            <p className="welcome-text">We cover your travel plan and tourism all around your location. We have places to stay and relax.</p>
                            <p className="welcome-mobile-text">We cover your travel plan, tourism and stay in the area</p>
                            <button class="come">Come with us</button>
                        </div>
                    </div>
                </div>
                 
            </div>
            <Explore />
            <LiveAnywhere />
            <Discover />
            <div className="services">
                <div className="services-header">Our Services</div>
                <div className="services-row">
                    {Services.map((service, key) =>{
                    return(
                        <div  className="services-item" key={key}>
                            <img src={service.image} class="service-pic" alt="image"/>
                            <p><strong>{service.topic}</strong></p>
                            <p>{service.desc}</p>
                            <p>Rating: {service.rating}</p>
                    
                        </div>
                    )
                }

                )}
                </div>
                
            </div>
            <Converter />
        </div>
    )
}

export default HomePage;