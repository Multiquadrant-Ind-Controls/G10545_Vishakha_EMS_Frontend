import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HT2 from '../components/HT2'
import Footer from '../components/Footer/Footer'

const HT2_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <HT2 />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default HT2_Page