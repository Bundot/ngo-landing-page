import React, { useState } from 'react';
import './../Css/Donation.css';

function Donation() {
  const [amount, setAmount] = useState('');

  const handleDonationClick = (donationAmount) => {
    setAmount(donationAmount);
  };

  return (
    <section className="donation">
      <h2>Make a Difference</h2>
      <p>Choose an amount to donate or enter your own:</p>
      <div className="donation-options">
        <button onClick={() => handleDonationClick(10)}>NGN10</button>
        <button onClick={() => handleDonationClick(25)}>NGN25</button>
        <button onClick={() => handleDonationClick(50)}>NGN50</button>
        <button onClick={() => handleDonationClick(100)}>NGN100</button>
      </div>
      <input 
        type="number" 
        placeholder="Enter custom amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button className="donate-final-btn">Donate NGN{amount || '...'} Now</button>
    </section>
  );
}

export default Donation;
