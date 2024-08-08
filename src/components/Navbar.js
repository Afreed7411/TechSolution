
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/styles.css' ; 
import logo from '../assets/images/logo.png'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="Tech Solutions Logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
