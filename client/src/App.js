import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import OurTeamSection from './components/OurTeam/Section/OurTeamSection';
import ServiceCardSection from './components/ServiceCards/Section/ServiceCardsSection';
import Footer from './components/Footer/Footer';
import HoneymoonPage from './components/HoneymoonPage/HoneymoonPage';

function App() {

  return (
    <Router>
      <div className="siteContainer">
        <Route exact path="/">
          <Nav />
          <Hero title="Travel Sales Group" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem eligendi quia incidunt aliquid tempora fuga eum nisi perferendis quod, quos consequuntur blanditiis, minus quisquam ipsam quasi, beatae exercitationem magni!" />
          <ServiceCardSection />
          <OurTeamSection />
          <Footer />
        </Route>

        <Route exact path="/honeymoon">
          <Nav />
          <HoneymoonPage />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
