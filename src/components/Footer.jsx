import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer(){
    return(
        <div className="footer">
            <table className="footer-table">
                <tr>
                    <th>About</th>
                    <th>Community</th>
                    <th>Contact Us</th>
                </tr>
                <tr>
                    <td><NavLink activeClassName="is-active" to="/processes"> How to Travel nd' Relax</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/experience">Ratings and reviews</NavLink></td>
                    <td><i className="fa fa-phone"></i> 07089345678</td>
                </tr>
                <tr>
                    <td><NavLink activeClassName="is-active" to="/processes"> Our Processes</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/experience"> Experiences</NavLink></td>
                    <td><i className="fa fa-envelope"> Travel@relax.com</i></td>
                </tr>
                <tr>
                    <td><NavLink activeClassName="is-active" to="/placesToStay">Places To Stay</NavLink></td>
                    <td>Blog(coming soon)</td>
                    <td><i className="fa fa-home"></i> 47, Murtala Mohammed way, Lagos.</td>
                </tr>
                <tr>
                    <td>Terms And Policies</td>
                    <td>Gallery</td>
                    <td><i className="fa fa-comment" style={{transform: 'rotateY(180deg)'}}></i> Chat With Us Right Here</td>
                </tr>
            </table>
            <hr />
        </div>
    )
}

export default Footer;