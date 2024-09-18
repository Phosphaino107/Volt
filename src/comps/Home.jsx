import React from 'react';
import './home.css';

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <h1>Volt Car Rentals</h1>
                    <p>Your journey starts here. Experience the road like never before.</p>
                    <a href="/cars" className="btn-primary">Explore Cars</a>
                </div>
            </header>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Volt?</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <i className="fas fa-car"></i>
                        <h3>Wide Selection</h3>
                        <p>Find the perfect car for every journey.</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-dollar-sign"></i>
                        <h3>Affordable Prices</h3>
                        <p>Unbeatable rates without hidden fees.</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-headset"></i>
                        <h3>24/7 Support</h3>
                        <p>Always here to assist with your needs.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>"Volt gave me the best car rental experience. The car was perfect and the service was exceptional."</p>
                        <h3>- Alex P.</h3>
                    </div>
                    <div className="testimonial-card">
                        <p>"Reliable cars at affordable prices. I always rent with Volt when traveling."</p>
                        <h3>- Maria D.</h3>
                    </div>
                    <div className="testimonial-card">
                        <p>"Easy booking process and great customer service. Volt is my go-to car rental company."</p>
                        <h3>- John S.</h3>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <h2>Book Your Next Adventure</h2>
                <p>Whether for business or pleasure, we’ve got the perfect car for you.</p>
                <a href="/cars" className="btn-primary">Book Now</a>
            </section>

           
        </div>
    );
}

export default HomePage;
