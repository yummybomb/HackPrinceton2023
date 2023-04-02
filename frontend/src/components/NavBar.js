import './assets/NavBar.css';
import React from 'react';
import logo from './assets/logo.png';

const NavBar = () => {
  return (
    <nav>
    <a href="index.html"><img src={logo}/></a>
        <div className="nav-links">
            <ul>
                <li><a href = "/generate">GENERATE</a></li>
                <li><a href = "/upload">UPLOAD</a></li>
                <li><a href = "/judge">JUDGE</a></li>
                <li><a href = "/rewards">REWARDS</a></li>
                <li><a href = "/">LOGOUT</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar