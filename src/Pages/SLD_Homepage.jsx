import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SLDHome from "../components/SLD_Home";
import Footer from "../components/Footer/Footer";

const SLDHome_Page = () => {
  return (
    <div className="sld-page-wrapper">

      <Navbar />

      <main className="sld-content">
        <SLDHome />
      </main>

      <Footer />

    </div>
  );
};

export default SLDHome_Page;