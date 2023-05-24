import React from 'react';
import { useState } from 'react';
import './Navbar.css';


function Navbar() {

  const [isSearch, setSearch] = useState(false);

  return (
    <header>
      <nav>
        <div className='logo'>
          <img src={process.env.PUBLIC_URL + './images/Veganhof-logo.png'} alt="VeganHof®" />
        </div>
        <div className='nav-list'>
          <a href="https://github.com/">PRODUCTS</a>
          <a href="https://github.com/">ABOUT US</a>
          <a href="https://github.com/">CONTACT US</a>
        </div>
        <div className={!isSearch? 'search-div-1' : 'search-div-2'} >
          <input placeholder='Search ...'></input>
          <img src={process.env.PUBLIC_URL + './images/Search.svg'} alt="Search" onClick={() => setSearch(!isSearch)} width="20px" height="20px"/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;