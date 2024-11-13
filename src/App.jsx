import React from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Donation from './components/Donation';
import ImpactCounter from './components/ImpactCounter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Mission />
      <ImpactCounter />
      <Donation />
      <Footer />
    </div>
  );
}

export default App;
