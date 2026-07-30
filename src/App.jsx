
// import React from "react";
// import meterIcon from "../src/mfm.png";
// import Meter from "./components/meter";
// import Section_1 from "./components/section_1";

// export default function App() {
//   const feederX = [80,140,200,260,360,440,520,620,700,780,860,940];

//   return (
//    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//     <Section_1 />
//    </div>
//   );
// }


import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import HT1_Page from "./Pages/HT1_Page";
import HT2_Page from "./Pages/HT2_Page";
import HT3_Page from "./Pages/HT3_Page";
import HT4_Page from "./Pages/HT4_Page";
import Report from "./Pages/Report";
import Alarm from "./Pages/Alarm";
import MFM_demo from "./Pages/MFM_Screen_demo";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
     
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ht1" element={<HT1_Page />} />
        <Route path="/ht2" element={<HT2_Page />} />
        <Route path="/ht3" element={<HT3_Page />} />
        <Route path="/ht4" element={<HT4_Page />} />
        <Route path="/report" element={<Report />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/mfm" element={<MFM_demo />} />

        {/* Add more routes here */}
        {/* <Route path="/reports" element={<Reports />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
     

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}