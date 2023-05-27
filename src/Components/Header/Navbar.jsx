import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  const navigate = useNavigate();
  const [isSearch, setSearch] = useState(false);

  window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add('small');
      header.classList.add('change-color');
    } else {
      header.classList.remove('small');
      header.classList.remove('change-color');
    }
  });

  const homeHanler = () => {
    var id = document.getElementById('Home')
    id.scrollIntoView({ behavior: 'smooth' });
    navigate("/")
  }

  return (
    <header id='header'>
      <nav>
        <div className='logo' onClick={homeHanler} >
          <img src={process.env.PUBLIC_URL + './images/header/Veganhof-logo.png'} alt="VeganHof®" />
        </div>
        <div className='nav-list'>
          <a href="/">PRODUCTS</a>
          <a href="#AboutUs">ABOUT US</a>
          <a href="#ContactUs">CONTACT US</a>
        </div>
        <div className={!isSearch ? 'search-div-1' : 'search-div-2'} >
          <input type='search' placeholder='Search ...'></input>
          <img src={process.env.PUBLIC_URL + './images/header/Search.svg'} alt="Search" onClick={() => setSearch(!isSearch)} width="20px" height="20px" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;