import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className="siteContainer">
        <Nav />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
