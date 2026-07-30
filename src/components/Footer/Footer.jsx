// import React from 'react'
// import './Footer.css'
// import MQLogo from '../../images/Logo_Multiquadrant_.jpg'

// function Footer() {
//   return (
//     <div className='Footer'>
//         <div className="about_company">
//             <div className="logo"><img src={MQLogo} alt="Multiquadrant" /></div>
//             <div className="Company_title">
//                 <h3>Energy Management System</h3>
//                 <p>Designed & Developed by the IIOT Department, Multiquadrant </p>
//                 <h5>
//                     © Multiquadrant Industrial Controls (I) Pvt. Ltd. 2025 
//                 </h5>
//                 </div>
//         </div>
//         <div className="links">
//             <div className="links-Element">
//                 <h4>Teams</h4>
//                 <ul><li>About Us</li>
//                 <li>Product</li>
//                 <li>Support</li></ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import './Footer.css'
import MQLogo from '../../images/Logo_Multiquadrant_.jpg'

function Footer() {
  return (
    <div className='Footer'>
      <div className="about_company">
        <div className="logo-footer">
          <img src={MQLogo} alt="Multiquadrant" />
        </div>
        <div className="Company_title">
          <h3>Energy Management System</h3>
          <p>Designed & Developed by the IIOT Department, Multiquadrant</p>
          <h5>© Multiquadrant Industrial Controls (I) Pvt. Ltd. 2025</h5>
        </div>
      </div>

      <div className="links">
        <div className="links-Element">
          <h4>Teams</h4>
          <ul>
            <li>About Us</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="contact-info">
        <h4>Contact</h4>
        <p>Email: iot@multiquadrant.com</p>
        {/* <p>Phone: +91 98765 43210</p> */}
        <p>Location: Nashik, Maharashtra</p>
      </div>

      <div className="social-media">
        <h4>Follow Us</h4>
        <div className="icons">
          <a href="#" aria-label="LinkedIn">🔗</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
