import React from 'react';
import { useState } from 'react';
import './Navbar.css';


function Navbar() {

  const [isSearch, setSearch] = useState(false);

  const searchHandler = () => {
    setSearch(!isSearch)
  }

  return (
    <header>
      <nav>
        <div className='logo'>
          <img src="" alt="Logo" />
        </div>
        <div className='nav-list'>
          <a href="https://github.com/">PRODUCTS</a>
          <a href="https://github.com/">ABOUT US</a>
          <a href="https://github.com/">CONTACT US</a>
        </div>
        <div className={!isSearch? '.search-div-1' : '.search-div-2'} >
          <input></input>
          <img src="" alt="Search" onClick={() => searchHandler}/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;