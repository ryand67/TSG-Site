import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import OurTeamSection from './components/OurTeam/Section/OurTeamSection';
import ServiceCardSection from './components/ServiceCards/Section/ServiceCardsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="siteContainer">
        <Route exact path="/">
          <Nav />
          <Hero />
          <ServiceCardSection />
          <OurTeamSection />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
