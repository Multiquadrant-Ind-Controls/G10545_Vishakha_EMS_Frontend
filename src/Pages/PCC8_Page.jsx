import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC8 from '../components/PCC8'
import Footer from '../components/Footer/Footer'

const PCC8_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC8 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC8_Page