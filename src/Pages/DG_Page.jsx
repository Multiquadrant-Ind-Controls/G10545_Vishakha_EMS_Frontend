import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import DG from '../components/DG'
import Footer from '../components/Footer/Footer'

const DG_Page = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <DG />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default DG_Page