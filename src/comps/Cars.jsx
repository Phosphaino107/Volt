import React from 'react';
import './car.css';
import tesla from '../pics/tesla.jpg'
import benz from '../pics/benz.webp'
import audi from '../pics/audi.jpeg'
import bmw from '../pics/bmw.jpeg'
import lambo from '../pics/lambo.avif'
import limo from '../pics/limo.jpg'
import hummer from '../pics/hummer.jpg'
import dodge from '../pics/dodge.jpg'
import rolls from '../pics/rolls.jpeg'


const carsData = [
    {
        name: 'Tesla Model 3',
        image: tesla,
        price: '$80/day',
        features: ['Electric', 'Autopilot', '300 miles range'],
    },
    {
        name: 'BMW 5 Series',
        image: bmw,
        price: '$70/day',
        features: ['Luxury', 'Automatic', 'Navigation System'],
    },
    {
        name: 'Audi A6',
        image: audi,
        price: '$75/day',
        features: ['Premium', 'Sunroof', 'Leather Seats'],
    },
    {
        name: 'Mercedes-Benz C-Class',
        image: benz,
        price: '$85/day',
        features: ['Luxury', 'Navigation System', 'Safety Features'],
    },
    {
        name: 'Lamborghini Urus',
        image: lambo,
        price: '$800/day',
        features: ['Sports Luxury', 'Autopilot', '300 miles range'],
    },
    {
        name: 'Limousine',
        image: limo,
        price: '$700/day',
        features: ['Luxury', 'Automatic', 'Navigation System'],
    },
    {
        name: 'Rolls-Royce',
        image: rolls,
        price: '$7500/day',
        features: ['Premium', 'Sunroof', 'Leather Seats'],
    },
    {
        name: 'Dodge',
        image: dodge,
        price: '$585/day',
        features: ['Sport luxury', 'Navigation System', 'Safety Features'],
    },
    {
        name: 'Hummer',
        image: hummer,
        price: '$155/day',
        features: ['Off Roadish', 'Navigation System', 'Safety Features'],
    }
];

function CarsPage() {
    return (
        <div className="cars-page">
            <header className="page-header">
                <h1>Our Premium Fleet</h1>
                <p>Discover the perfect car for every occasion</p>
            </header>

            <div className="car-list">
                {carsData.map((car, index) => (
                    <div className="car-card" key={index}>
                        <div className="car-image-container">
                            <img src={car.image} alt={car.name} className="car-image" />
                        </div>
                        <div className="car-details">
                            <h2>{car.name}</h2>
                            <p className="car-price">{car.price}</p>
                            <ul className="car-features">
                                {car.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <a href={`/book/${car.name}`} className="btn-primary">Book Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarsPage;
