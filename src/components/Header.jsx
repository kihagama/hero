import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaInfo,FaPhone,FaServicestack } from 'react-icons/fa';
import './Header.css';
import log from '../assets/stratcomlogo.jpg'
const Header = () => {
    const [menu, setmenu] =useState(false)
  return (
    <div className='Navbar'>
      <div className='title'>
        <img src={log} alt="logo" />
        <h1>stratcom</h1>
      </div>
     <nav className={menu ? "mobile" : ""}>
  <Link to="/" onClick={() => setmenu(false)}>{menu?(<FaHome style={{fontSize:"15px"}}/>):(<></>)}<span></span> <span></span>HOME</Link>
  <Link to="/our-services" onClick={() => setmenu(false)}>{menu?(<FaServicestack style={{fontSize:"15px"}}/>):(<></>)}<span></span> <span></span>SERVICES</Link>
  <Link to="/contact" onClick={() => setmenu(false)}>{menu?(<FaPhone style={{fontSize:"15px"}}/>):(<></>)}<span></span> <span></span>CONTACT </Link>
  <Link to="/about-us" onClick={() => setmenu(false)}>{menu?(<FaInfo style={{fontSize:"15px"}}/>):(<></>)}<span></span> <span></span>ABOUT </Link>
</nav>
      <div id= "menu" onClick={()=>setmenu(!menu)}>
       <div id ="bar"></div>
       <div id ="bar"></div>
       <div id ="bar"></div>
     </div>
    </div>
  );
};

export default Header;
