import React, { useEffect, useState } from 'react';
import './../Css/ImpactCounter.css';

function ImpactCounter() {
  const [projectsSupported, setProjectsSupported] = useState(500);
  const [volunteers, setVolunteers] = useState(10000);
  const [peopleImpacted, setPeopleImpacted] = useState(250000);

  // Simulate live updates for each count
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectsSupported((prev) => prev + 1);
      setVolunteers((prev) => prev + 5);
      setPeopleImpacted((prev) => prev + 20);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="impact-counter">
      <h2>Our Impact</h2>
      <div className="counter-container">
        <div className="counter-item">
          <h3>{projectsSupported}+</h3>
          <p>Projects Supported</p>
        </div>
        <div className="counter-item">
          <h3>{volunteers}+</h3>
          <p>Volunteers Engaged</p>
        </div>
        <div className="counter-item">
          <h3>{peopleImpacted}+</h3>
          <p>People Impacted</p>
        </div>
      </div>
    </section>
  );
}

export default ImpactCounter;
