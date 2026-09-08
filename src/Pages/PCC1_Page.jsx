import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC1 from '../components/PCC1'
import Footer from '../components/Footer/Footer'

const PCC1_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC1 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC1_Page