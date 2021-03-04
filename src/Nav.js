import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };

  return (
    <div className="Nav">
      <nav>
      <Link style={navStyle} to="/">
        <h2>steelbrain</h2>
      </Link>
      
          <ul>
          <Link style={navStyle} to="/team">
               <li>
                  Team
              </li>
          </Link>
          <Link style={navStyle} to="/contact">
              <li>
                  Contact
              </li>
          </Link>     
          </ul>
          <Link to="/contact">
              <button id="first-btn" className="nav-right-contact-btn">CONTACT</button>
          </Link>
          
      </nav>
    </div>
  );
}

export default Nav;
