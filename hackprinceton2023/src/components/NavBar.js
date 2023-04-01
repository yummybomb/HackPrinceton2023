import React from 'react';
import './assets/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <a href="index.html"><img src={logo}/></a>
            <div className="nav-links">
                <ul>
                    <li><a href = "/">HOME</a></li>
                    <li><a href = "/generate">GENERATE</a></li>
                    <li><a href = "/showcase">SHOWCASE</a></li>
                    <li><a href = "/judge">JUDGE</a></li>
                    <li><a href = "/about">ABOUT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar