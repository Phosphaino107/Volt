import React from 'react';
import { Link } from 'react-router-dom';
import './foot.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-logo">Volt</h2>
                    <p>Reliable car rentals at the best prices.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cars">Cars</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@voltcarrentals.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Volt Car Rentals. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
