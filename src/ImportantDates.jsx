import React from "react";
import "./App.css";
import Marq from "./Marq";

export const ImportantDates = () => {
  return (
    <>
      <div className="content">
        <div className="headline">
          <h2>Important Dates</h2>
          <table style={{ marginTop: "10%" }}>
            <tr style={{backgroundColor:"#48C9B0"}}>
              <th>PROGRAMS</th>
              <th>DATES</th>
            </tr>
            <tr style={{backgroundColor:"#DDDDDD"}}>
              <td>Date of confrence</td>
              <td>Feburary 01-02,2024</td>
            </tr>
            <tr>
              <td>call of paper</td>
              <td>feburary 01,2024</td>
            </tr>
            <tr style={{backgroundColor:"#DDDDDD"}}>
              <td>paper submission deadline</td>
              <td>November 23,2024</td>
            </tr>
            <tr>
              <td>notification of acceptance</td>
              <td>december 26,2024</td>
            </tr>
            <tr style={{backgroundColor:"#DDDDDD"}}>
              <td>camera ready paper submission</td>
              <td>Januray 15,2024</td>
            </tr>
          </table>
        </div>
        <Marq />
      </div>
    </>
  );
};
