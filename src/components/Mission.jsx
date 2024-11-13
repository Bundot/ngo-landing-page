import React from 'react';
import './../Css/Mission.css';

function Mission() {
  return (
    <section className="mission">
      <h2>Our Mission</h2>
      <p>We are dedicated to empowering communities and creating sustainable change through various programs and partnerships worldwide.</p>
      <div className="mission-stats">
        <div>
          <h3>500+</h3>
          <p>Communities Supported</p>
        </div>
        <div>
          <h3>10,000+</h3>
          <p>Volunteers Engaged</p>
        </div>
        <div>
          <h3>250,000+</h3>
          <p>People Impacted</p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
