import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className="nav">
                <div className="logo">
                    <h1>Marvel HeadPhone</h1>
                </div>
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/product">Product</a>
                    <a href="/about">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;