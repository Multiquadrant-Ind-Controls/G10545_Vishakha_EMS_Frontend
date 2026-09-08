import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC2 from '../components/PCC2'
import Footer from '../components/Footer/Footer'

const PCC2_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC2 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC2_Page