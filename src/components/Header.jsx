import React from 'react';
import logo from '../img/logo-removebg-preview.png';
import { NavLink } from "react-router-dom";


function Header(){
    return(
        <div className="Header">
            <div className="logo">
                <NavLink activeClassName="is-active" to="/">
                    <img src={logo} alt="Logo"  style={{width: `110px` ,height: `90px`}}/>
                </NavLink>
            </div>
            <div className="links">
                <div className="centre-link">
                    <ul className="centre-links">
                        <li><NavLink activeClassName="is-active" className="header-link" to="/"><i className="fa fa-home"></i>Home</NavLink></li>
                        <li><NavLink  activeClassName="is-active" className="header-link" to="/places"> Places To Go</NavLink></li>
                        <li><NavLink activeClassName="is-active" className="header-link" to="/experience"> Reviews</NavLink></li>
                    </ul>
                </div>
                <div className="right-link">
                    

                </div>
            </div>
        </div>
    )
}

export default Header;