import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  return (
    <div className="donate-page">
      <div className="glass-card">
        <div className="form-header">
          <span className="badge">New Listing</span>
          <h1>Share Your Surplus 🥗</h1>
          <p>Help reduce waste by providing accurate food details.</p>
        </div>
        
        <form className="aesthetic-form">
          <div className="input-group">
            <label>Basic Information</label>
            <div className="row">
              <input type="text" placeholder="Food Name (e.g. Fresh Biryani)" />
              <input type="text" placeholder="Quantity (e.g. 5 Plates)" />
            </div>
          </div>

          <div className="input-group">
            <label>Freshness & Storage</label>
            <div className="row">
              <select>
                <option>Cooked Meal</option>
                <option>Bakery Items</option>
                <option>Groceries</option>
              </select>
              <input type="text" placeholder="Shelf Life (e.g. 4 Hours)" />
            </div>
            <input type="text" placeholder="Storage Info (e.g. Keep Refrigerated)" className="full-width" />
          </div>

          <div className="input-group">
            <label>Collection Details</label>
            <input type="text" placeholder="Pickup Address" className="full-width" />
            <textarea placeholder="Additional Notes (Allergens, exact location...)" rows="3"></textarea>
          </div>

          <button type="submit" className="glow-button">Publish Listing</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;