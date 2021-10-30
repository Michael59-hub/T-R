import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import show, { Gallery, onlineExperiences } from './onlineExperiences';
import show2 from './show2';
import show3 from './show3';

function Experience(){
    return(
        <div className="Experience">
            <Header />
            <div className="Experience-main">
                <h1>Reviews straight from our customers</h1>
                <div className="experience-reviews">
                    {onlineExperiences.map((experience, key)=>{
                        return(
                            <div className="experience-review" key={key}>
                                <span className="experience-info">
                                    <p className="experience-name"><p className="experience-name">{experience.customer}</p></p>
                                
                                </span>
                                <span className="experience-details">
                                    <p className="experience-place"><NavLink activeClassName="is-active" to="/places">{experience.place} <i className="fa fa-angle-right" style={{height: '1rem'}}></i></NavLink></p>
                                    <div className="experience-time">
                                        <p className="experience-rating">{experience.rating}</p>
                                        <p className="experience-date">{experience.date}</p>
                                    </div>
                                    
                                    <p className="experience-description">{experience.description} </p>
                                    
                                    <div className="experience-pics" id={experience.more_id}>
                                        <img src={experience.experience_pictures} alt="" className="experience-pictures" />
                                        <img src={experience.experience_pictures} alt="" className="experience-pictures" />
                                        <img src={experience.experience_pictures} alt="" className="experience-pictures" />
                                    </div>
                                    <div className="experience-more">
                                        <div className="experience-book">
                                            <p style={{marginTop: '3%'}}>Book Your Trip Now <i className="fa fa-plane"></i></p>
                                        </div>
                                        <div className="experience-pictures-button" onClick={experience.more_function}>
                                           <p style={{marginTop: '3%'}}> Pictures <i className="fa fa-angle-down"></i></p>
                                        </div>
                                    </div>
                                </span>
                            </div>  
                        )
                    
                    }
                    
                    )}
                    
                </div>
                <div className="experience-gallery">
                    <p className="gallery-header">Gallery</p>
                    <div className="gallery">
                    {Gallery.map((pic, key)=>{
                        return(
                            
                            <img src={pic.picture} alt="picture" class="experience-picture" key={key}/>
                            
                        )
                    }
                    )}
                    </div>
                    <p className="experience-mor">See more <i className="fa fa-angle-right"></i></p>
                </div>
            </div>
        </div>
    )
}

export default Experience;