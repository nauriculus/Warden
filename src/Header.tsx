import React from 'react';
import './Header.css';

import { useHistory } from 'react-router-dom'; 


function Header() {

  const history = useHistory();

  const handleReport = (event: any) => {
      history.push(`/report/`);
  };

  const handleHome = (event: any) => {
    history.push(`/`);
};

    return (

      
      <header className="header">
        <nav className="navbar">
         
        <div className="wallet-buttons">
          <img src="../public/WardenHeader.png" onClick={handleHome} className="logo" />
        
          <button className="report" onClick={handleReport}>REPORT</button>

          </div>
        </nav>
      </header>
    );
  }
  

export default Header;