

import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import HT1_Page from "./Pages/HT1_Page";
import HT2_Page from "./Pages/HT2_Page";
import HT3_Page from "./Pages/HT3_Page";
import HT4_Page from "./Pages/HT4_Page";
import PCC1_Page from "./Pages/PCC1_Page";
import PCC2_Page from "./Pages/PCC2_Page";
import PCC3_Page from "./Pages/PCC3_Page";
import PCC4_Page from "./Pages/PCC4_Page";
import PCC5_Page from "./Pages/PCC5_Page";
import PCC6_Page from "./Pages/PCC6_Page";
import PCC7_Page from "./Pages/PCC7_Page";
import PCC8_Page from "./Pages/PCC8_Page";
import DG_Page from "./Pages/DG_Page";
import SLD_Homepage from "./Pages/SLD_Homepage";



import Report from "./Pages/Report";
import Alarm from "./Pages/Alarm";
import MFM_demo from "./Pages/MFM_Screen_demo";

export default function App() {
  return (
    <Routes>
     
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ht1" element={<HT1_Page />} />
        <Route path="/ht2" element={<HT2_Page />} />
        <Route path="/ht3" element={<HT3_Page />} />
        <Route path="/ht4" element={<HT4_Page />} />
        <Route path="/pcc1" element={<PCC1_Page />} />
        <Route path="/pcc2" element={<PCC2_Page />} />
        <Route path="/pcc3" element={<PCC3_Page />} />
        <Route path="/pcc4" element={<PCC4_Page />} />
        <Route path="/pcc5" element={<PCC5_Page />} />
        <Route path="/pcc6" element={<PCC6_Page />} />
        <Route path="/pcc7" element={<PCC7_Page />} />
        <Route path="/pcc8" element={<PCC8_Page />} />
        <Route path="/dg" element={<DG_Page />} />
        <Route path="/report" element={<Report />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/mfm" element={<MFM_demo />} />
        <Route path="/sld" element={<SLD_Homepage />} />

       

      
    </Routes>
  );
}