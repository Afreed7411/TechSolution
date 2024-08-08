import React from 'react';
import Services from './Services'; 
import styles from '../styles/styles.css'; 
import Contact from './Contact'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <header className="hero">
                <h1>Welcome to Tech Solutions</h1>
                <p>Your partner in cutting-edge website and app development.</p>
                {/* <button>Get Started</button> */}
                <Link to="/Contact" className="get-started-button">Get Started</Link>
            </header>
            <Services /> 
        </div>
    );
};

export default HomePage;

