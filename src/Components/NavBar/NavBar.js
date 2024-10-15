// import React from 'react'
// import "./NavBar.css" 
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <div className='navbar'>
//        <Link to="/">
    
//     <img className="logo" src=  "https://th.bing.com/th/id/OIP._Gf-Razvp1aQZXJ9ijEAEAHaHa?rs=1&pid=ImgDetMain" alt="AI Diet Logo"/>
//     </Link>
//     <span className="logo-text">AI Diet Planner</span>
//     </div>
//   )
// }

// export default NavBar


// TEMP IMPORTAN 

import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaUtensils } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/" className="logo-link">
        <FaUtensils className="logo-icon" />
        <span className="logo-text">AI Diet Planner</span>
      </Link>

    </nav>
  );
}

export default NavBar;