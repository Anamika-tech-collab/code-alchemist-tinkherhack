import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Features: Mock data for the Impact Counter
  const stats = [
    { label: "Meals Saved", value: "1,240", icon: "🍱", color: "#2d6a4f" },
    { label: "Kg Rescued", value: "520 kg", icon: "🥕", color: "#40916c" },
    { label: "CO₂ Prevented", value: "310 kg", icon: "🌍", color: "#52b788" },
    { label: "Active Pickups", value: "18", icon: "🚚", color: "#74c69d" }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <header className="dash-header">
          <h1>Welcome back, Eco-Warrior! 🍃</h1>
          <p>Your contributions are making a real difference in the community.</p>
        </header>

        {/* Feature 1: Live Impact Grid */}
        <div className="impact-grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact-card">
              <span className="impact-icon">{stat.icon}</span>
              <div className="impact-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature 2: High-Action Tiles */}
        <div className="action-grid">
          <div className="action-card donate" onClick={() => navigate('/donate')}>
            <div className="overlay">
              <h2>Have Surplus Food?</h2>
              <p>List your items and help someone in your community.</p>
              <button className="action-btn">Donate Now</button>
            </div>
          </div>

          <div className="action-card pickup" onClick={() => navigate('/pickup')}>
            <div className="overlay">
              <h2>Find Food Nearby</h2>
              <p>12 new listings added in your area today.</p>
              <button className="action-btn">View Listings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;