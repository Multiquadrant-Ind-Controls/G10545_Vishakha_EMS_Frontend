import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PCC4 from '../components/PCC4'
import Footer from '../components/Footer/Footer'

const PCC4_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <PCC4 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default PCC4_Page