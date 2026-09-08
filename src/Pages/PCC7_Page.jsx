import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC7 from '../components/PCC7'
import Footer from '../components/Footer/Footer'

const PCC7_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC7 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC7_Page