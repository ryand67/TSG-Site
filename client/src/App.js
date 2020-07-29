import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import OurTeamSection from './components/OurTeam/Section/OurTeamSection';

function App() {
  return (
    <Router>
      <div className="siteContainer">
        <Route exact path="/">
          <Nav />
          <Hero />
          <OurTeamSection />
        </Route>
      </div>
    </Router>
  );
}

export default App;
