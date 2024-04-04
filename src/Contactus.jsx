import React from 'react'
import './App.css'
import Marq from "./Marq";

export const Contactus = () => {
  return (
    <>
      <div className="content">
      <div className="headline">
        <h2>CONTACT US</h2>
		<div className="box">
        <div className="box1">
						<p className="p1" style={{color:'black'}}>Dr. Vivek Srivastava</p>
						<p className="p2">Confrence Convenor, ETTA-2019</p>
						<p className="p3" style={{color:'blue'}}>viveksrivastavakash@gmail.com</p>
						<p className="p2">+91 9198256952</p>
					</div>

          <div className="box2">
						<p className="p1">Dr. Shimpi Singh Jadon</p>
							<p className="p2">Confrence Co-Convenor, ETTA-2019</p>
							<p className="p3" style={{color:'blue'}}>shimpisingh2k6@gmail.com</p>
							<p className="p2">+91 9926262325</p>
					</div>

          <div className="box3">
						<p className="p1">Er. Abhishek Bajpai</p>
							<p className="p2">Organising Secretary, ETTA-2019</p>
							<p className="p3"  style={{color:'blue'}}>abhishek.srmu@gmail.com</p>
							<p className="p2">+91 954072736</p>
					</div>
					</div>
      </div>
      <Marq />
    </div>
    </>
  )
}
