import React from "react";
import "./App.css";
import Marq from "./Marq";

export const CallforPaper = () => {
  return (
    <div className="content">
      <div className="headline">
        <h2>CALL FOR PAPER</h2>
      <div className="box">
        <div className="b1">
          <a href="tp1.html">
            <h4>TRACK 1</h4>
            <p>
              Emerging Trends in Electronics Engineering and their Applications
            </p>
          </a>
        </div>

        <div className="b1">
          <a href="tp2.html">
            <h4>TRACK 2</h4>

            <p>
              Emerging Trends in Electrical Engineering and their Applications
            </p>
          </a>
        </div>

        <div className="b2">
          <a href="tp3.html">
            <h4>TRACK 3</h4>
            <p>Emerging Trends in Civil Engineering and their Applications</p>
          </a>
        </div>
        <div className="b2">
          <a href="tp4.html">
            <h4>TRACK 4</h4>
            <p>
              Emerging Trends in Computer Science & Engineering and their
              Applications
            </p>
          </a>
        </div>
        <div className="b2">
          <a href="tp5.html">
            <h4>TRACK 5</h4>
            <p>Emerging Trends in Applied Science and Managment</p>
          </a>
        </div>
        </div>
      </div>
      <Marq />
    </div>
  );
};

export default CallforPaper;
