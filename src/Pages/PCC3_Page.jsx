import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC3 from '../components/PCC3'
import Footer from '../components/Footer/Footer'

const PCC3_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC3 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC3_Page