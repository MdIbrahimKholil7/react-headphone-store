import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className="nav">
                <div className="logo">
                    <h1>Marvel HeadPhone</h1>
                </div>
                <div className="hamburger">
                   {/*  <FontAwesomeIcon onClick={} icon={faBars}></FontAwesomeIcon> */}
                </div>
                <div className="menu" id='menu'>
                    <a href="/home">Home</a>
                    <a href="/product">Product</a>
                    <a href="/about">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;