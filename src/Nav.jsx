import React from 'react'
import "./App.css";
import {Link, NavLink} from "react-router-dom"


export const Nav = () => {
  return (
    <>
        <nav className='nav-bar'>
            <li> <NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/Keynote" >Keynote Speakers</NavLink></li>
            <li><NavLink to="/cfp" >Call For Papers</NavLink></li>
            <li><NavLink to="/confrence">CONFRENCE COMMITTEE</NavLink></li>
            <li><NavLink to="/dates">Important Dates</NavLink></li>
            <li><NavLink to="/reachus">How To Reach</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </nav>
    </>
    )
}

export default Nav;
