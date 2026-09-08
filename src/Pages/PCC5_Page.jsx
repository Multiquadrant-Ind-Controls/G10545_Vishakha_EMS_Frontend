import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC5 from '../components/PCC5'
import Footer from '../components/Footer/Footer'

const PCC5_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC5 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC5_Page