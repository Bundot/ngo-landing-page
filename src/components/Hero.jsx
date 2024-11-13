import React from 'react';
import './../Css/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Empowering Communities, Changing Lives</h1>
        <p>Your support helps create sustainable change around the world.</p>
        <button className="donate-btn">Donate Now</button>
      </div>
    </section>
  );
}

export default Hero;
