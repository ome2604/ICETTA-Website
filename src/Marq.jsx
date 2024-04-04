import React from 'react'
import logo from './assets/images/ettalogofinal.png'
import "./App.css";

export const Marq = () => {
  return (
    <>
    <div className="marquee">
        <h4>ETTA-2024</h4>
      <marquee direction="up"><img src={logo} /></marquee>
        <h4>NEWS-FEED</h4>
        <marquee direction="up">
          <p>ETTA - Emerging Trends In Technology & it's Applications.</p>
          <p>Date of Confrence is on Feb 1,2024</p>
          <p>Call for Papers is on Feb 1,2024</p>
          <p>Paper Submission Deadline is on November 21,2024</p>
          <p>Notification Acceptance is till December 26,2024</p>
          <p>Camera Ready Paper Submission is on January 15,2024</p>
          <p>Contact us @reck.ac.in</p>
          <p>ETTA-24 is 1st international confrence at Reckannauj</p>
        </marquee>
      </div>
    </>
    )
}

export default Marq