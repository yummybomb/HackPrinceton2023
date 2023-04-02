import './assets/NavBar.css';
import React from 'react';
import logo from './assets/logo.png';

const NavBar = () => {
  return (
    <nav>
    <a href="index.html"><img src={logo}/></a>
        <div className="nav-links">
            <ul>
                <li><a href = "/">LOGIN</a></li>
                <li><a href = "/dashboard">DASHBOARD</a></li>
                <li><a href = "/generate">GENERATE</a></li>
                <li><a href = "/completions">REWARDS</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar