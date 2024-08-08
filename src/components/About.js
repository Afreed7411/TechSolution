import React from 'react';
import styles from '../styles/styles.css'
import about from '../assets/images/about.png';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2>About Tech Solutions</h2>
                    <p>
                        At Tech Solutions, we specialize in creating cutting-edge websites and mobile applications that drive business success. Our team of experienced developers and designers are dedicated to delivering top-notch digital solutions tailored to your unique needs.
                    </p>
                    <p>
                        Whether you need a stunning website to represent your brand or a powerful mobile app to engage your customers, we've got you covered. With a focus on innovation, quality, and customer satisfaction, Tech Solutions is your trusted partner in the digital world.
                    </p>
                </div>
                <div className="about-image">
                    <img src={about} alt="About Us" />
                </div>
            </div>
        </section>
    );
};

export default About;
