import React, { useState } from 'react';
import './head.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">Volt Car Rentals</div>
            <button className="menu-button" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cars">Cars</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
