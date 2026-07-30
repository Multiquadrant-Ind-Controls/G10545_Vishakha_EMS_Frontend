import React from "react";
import "./MFM_Screen_demo.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export default function ElectricalParameters() {
  return (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
     
    <div className="electrical-page">
        
      <div className="page-title">
        <h2>Meter: MFM-00XXX</h2>
        <span className="live">● LIVE</span>
      </div>

      {/* Top Row */}
      <div className="section">
        {/* Voltage */}
        <div className="panel">
          <h3>Voltage</h3>

          <div className="row">
            <span>V1 (Line Voltage)</span>
            <strong>415.2 V</strong>
          </div>

          <div className="row">
            <span>V2 (Line Voltage)</span>
            <strong>414.7 V</strong>
          </div>

          <div className="row">
            <span>V3 (Line Voltage)</span>
            <strong>415.5 V</strong>
          </div>
        </div>

        {/* Current */}
        <div className="panel">
          <h3>Current</h3>

          <div className="row">
            <span>I1</span>
            <strong>92.8 A</strong>
          </div>

          <div className="row">
            <span>I2</span>
            <strong>91.5 A</strong>
          </div>

          <div className="row">
            <span>I3</span>
            <strong>93.2 A</strong>
          </div>
        </div>

        {/* Power */}
        <div className="panel">
          <h3>Power</h3>

          <div className="row">
            <span>Active Power (kW)</span>
            <strong>65.8 kW</strong>
          </div>

          <div className="row">
            <span>Apparent Power (kVA)</span>
            <strong>67.1 kVA</strong>
          </div>

          <div className="row">
            <span>Reactive Power (kVAR)</span>
            <strong>12.9 kVAR</strong>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="section">
        {/* Power Quality */}
        <div className="panel">
          <h3>Power Quality</h3>

          <div className="row">
            <span>Frequency</span>
            <strong>50.01 Hz</strong>
          </div>

          <div className="row">
            <span>Power Factor (Cos φ)</span>
            <strong>0.98</strong>
          </div>

          <div className="row">
            <span>THD Voltage</span>
            <strong>1.8 %</strong>
          </div>

          <div className="row">
            <span>THD Current</span>
            <strong>5.4 %</strong>
          </div>
        </div>

        {/* Energy */}
        <div className="panel">
          <h3>Energy</h3>

          <div className="row">
            <span>Energy Consumption</span>
            <strong>246,782.4 kWh</strong>
          </div>

          <div className="row">
            <span>Maximum Demand</span>
            <strong>69.4 kW</strong>
          </div>

          <div className="row">
            <span>Meter Status</span>
            <strong style={{ color: "#28a745" }}>Healthy</strong>
          </div>

          <div className="row">
            <span>Communication</span>
            <strong style={{ color: "#28a745" }}>Online</strong>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}