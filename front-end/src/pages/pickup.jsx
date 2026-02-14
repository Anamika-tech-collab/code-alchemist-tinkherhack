import React, { useEffect, useState } from 'react';
import './Pickup.css';
import api from '../api/axios'; // Assuming your axios config is here

const Pickup = () => {
  const [listings, setListings] = useState([
    { _id: '1', food_name: 'Rice & Curry', quantity: '5 kg', urgency: 'High' },
    { _id: '2', food_name: 'Bread', quantity: '3 kg', urgency: 'Medium' },
    { _id: '3', food_name: 'Salad', quantity: '2 kg', urgency: 'Low' }
  ]);

  return (
    <div className="pickup-page">
      <div className="pickup-container">
        <header className="pickup-header">
          <div className="header-banner">
            <span className="leaf-icon">🍃</span>
            <h1>Available Food Pickups - FoodLoop</h1>
            <span className="leaf-decoration">🌿</span>
          </div>
        </header>

        <div className="food-grid">
          {listings.map((item) => (
            <div key={item._id} className="food-card">
              <div className="card-header">
                <span className="food-emoji">
                  {item.food_name.includes('Rice') ? '🍲' : 
                   item.food_name.includes('Bread') ? '🍞' : '🥗'}
                </span>
                <h3>{item.food_name}</h3>
              </div>
              
              <div className="card-body">
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p>
                  <strong>Urgency:</strong> 
                  <span className={`urgency-tag ${item.urgency.toLowerCase()}`}>
                    {item.urgency}
                  </span>
                </p>
              </div>

              <button className="accept-btn">
                Accept Pickup <span className="btn-leaf">🍃</span>
              </button>
            </div>
          ))}
        </div>

        <footer className="pickup-footer">
          <p>"Rescue Food, Nourish Communities"</p>
        </footer>
      </div>
    </div>
  );
};

export default Pickup;