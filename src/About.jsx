import React from "react";
import './App.css'
import Marq from "./Marq";


export const About = () => {
  return (
    <>
    <div className="content">
      <div className="headline">
      <h2 className="h2">ABOUT-US</h2>
      <p><b>Rajkiya Engineering College, Kannauj (RECK)</b> is an institute with total commitment to quality and excellence in academics .It was established by the government of Uttar Pradesh in the year 2015 with single branch electrical engineering with annual intake of sixty(60) students running at Harcourt butler technological university,Kanpur(formerly known as HBTI,Kanpur)to develop an exceptional set of academic and professional skills.The college currently has a pool of thirteen outstanding faculty members in four academic departments, namely applied science and humanities, department of electrical engineering, electronics engineering, civil engineering and department of computer sc. & engineering.</p>
      <div className="marquee-one"><marquee behavior="alternate" className="m1"  >ETTA   -   EMERGING  TRENDS  IN  TECHNOLOGY  AND  THEIR  APPLICATIONS </marquee></div>
      	The Institute aspires to contribute in the nationwide motive to make India great again by maintaining a high standard of integrity and performance leading the students to provide the aspirants a broad spectrum of opportunities. Primal service of the institute is to keep the continuous flux in the field of technical advancement thriving in the college through challenging the limits and bringing about a new revolution, many such projects and collaborations are in process to be executed, most notably hosting its 1st international conference ETTA-19 in which numerous eminent and highly prominent personalities from different scientific fields are likely to attend.
        <br /><br />
        <p>For more information about various ETTA or othre programs please visit <a href="/">www.reck.ac.in</a></p>
      </div>
      <Marq/>
    </div>
    </>
  );
};
