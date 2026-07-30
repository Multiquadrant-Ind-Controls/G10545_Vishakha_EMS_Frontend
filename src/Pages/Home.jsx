import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sld from '../components/section_1'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
  <div width="100%" height="100%" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Navbar />
      <div style={{Display:"flex",justifyContent:"center",alignItems:"center",padding:"100px 0"}}>
        <Sld />
      </div>
      <Footer />
      
    </div>
    
  )
}

export default Home