import React from "react";
import "./App.css";
import mam2 from './assets/images/mam2.jpg'
import standBoy from './assets/images/standBoy.jpg'
import students from './assets/images/student3.jpg'
import img5 from './assets/images/img5Student2.jpg'
import  Marq  from "./Marq";

export const Home = () => {
  return (
    <>
    <div className="content">
      <div className="headline">
          <h2 className="h2">ETTA-2024</h2>
          <p><b>ETTA-24</b> aspires to contribute in the nationwide motive to make India great again by maintaining a high standard of integrity and performance leading the students to provide the aspirants a broad spectrum of opportunities. Primal service of the institute is to keep the continuous flux in the field of technical advancement thriving in the college through challenging the limits and bringing about a new revolution, many such projects and collaborations are in process to be executed, most notably hosting its<b> 1st international conference ETTA-19</b> in which numerous eminent and highly prominent personalities from different scientific fields are likely to attend.</p>				
          <div className="marquee-one"><marquee behavior="alternate" className="m1"  >ETTA   -   EMERGING  TRENDS  IN  TECHNOLOGY  AND  THEIR  APPLICATIONS </marquee></div>
          <h2 className="h2">CONFRENCE LAYOUT</h2>
          <table>
					<tr style={{backgroundColor:"#48C9B0"}} ><th>PROGRAMS LAYOUT FOR THE CONFRENCE</th></tr>
					<tr style={{backgroundColor:"#DDDDDD"}}><td>step 1: Opening Ceremony & Plenary Lecture</td></tr>
					<tr><td>step 2: Intitation of Global Program</td></tr>
					<tr style={{backgroundColor:"#DDDDDD"}}><td>step 3: confrence tasks Scheduling program</td></tr>
					<tr><td>step 4: Professor round table confrence</td></tr>
					<tr style={{backgroundColor:"#DDDDDD"}}><td>step 5: tracks & supersessions</td></tr>
				</table>
        <h3 className="h3">@RECKANNAUJ</h3>
        <p>Rajkiya Engineering College, Kannauj (RECK) is an institute with total commitment to quality and excellence in academics .It was established by the government of Uttar Pradesh in the year 2015 with single branch electrical engineering</p>
      </div>
      <Marq/>
      </div>
      <div className="pictures">
        <img src={mam2} />
        <img src={standBoy}/>
        <img src={students}  />
        <img src={img5}  />
      </div>
    </>
  );
};

export default Home;
