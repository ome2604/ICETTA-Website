import React from 'react'
import './App.css'
import Marq from './Marq'
export const Keynote = () => {
  return (
    <div className="content">
      <div className="headline">
        <h2>KEYNOTE SPEAKERS</h2>
        <div className="marquee-one"><marquee behavior="alternate" className="m1">KEYNOTE  SPEAKERS  WILL  BE  UPDATED  SOON.</marquee></div>
        <p>For more information about various ETTA or othre programs please visit  <a href="">www.reck.ac.in</a></p>
      </div>
      <Marq/>
    </div>
  )
}
