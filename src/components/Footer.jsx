import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter} from 'react-icons/fa';

import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='sociallinks'>
        
 <a style={{fontSize:"35px",color:"white"}} href="tel:+256700750061" target="_blank" rel="noopener noreferrer"><FaPhoneAlt /> </a>
 <a style={{fontSize:"35px",color:"green"}}  href="https://wa.me/256700750061" target="_blank" rel="noopener noreferrer">   <FaWhatsapp />  </a>
 <a 
  style={{ fontSize: "35px", color: "blue" }} 
  href="https://www.x.com/ismaelkihagama/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaTwitter />
</a>

<a 
  style={{ fontSize: "35px", color: "red" }} 
  href="https://www.instagram.com/lothbrokivarpe" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

        </div>

        <div className='quicklinks'>
            <h2 style={{color:"white"}}>Quick Links</h2>
        <Link to="/" >HOME</Link>
        <Link to="/our-courses" >COURSES</Link>
         <Link to="/contact" >CONTACT-US</Link>
          <Link to="/about-us" >ABOUT-US</Link>
        </div>
        <div className='quicklinkss'>
     <p>Stratcom Uganda &copy; {new Date().getFullYear()} — Innovating  for a Smarter Future</p>
     <p>Empowering Uganda with cutting-edge solutions in software development, digital transformation, and IT consulting.</p>
<p>At Stratcom, we build reliable, scalable, and affordable tech solutions for a better tomorrow in Uganda and beyond.</p>
<p>Email: info@stratcom.ug | Tel: +256 712 345 678</p>


        </div>
      
    </div>
  )
}

export default Footer
