import React from 'react';
import './cont.css';

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with Volt Car Rentals for any inquiries or assistance.</p>
            </div>
            <div className="contact-container">
                <div className="contact-form-container">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Your name..." />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your email..." />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message..."></textarea>

                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
                <div className="contact-info-container">
                    <h2>Contact Information</h2>
                    <ul className="contact-info">
                        <li>
                            <strong>Address:</strong> 123 Volt Drive, Energy City, EC 12345
                        </li>
                        <li>
                            <strong>Email:</strong> support@voltcarrentals.com
                        </li>
                        <li>
                            <strong>Phone:</strong> +123 456 7890
                        </li>
                    </ul>
                    <div className="social-media">
                        <h3>Follow Us</h3>
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
