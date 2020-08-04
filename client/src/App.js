import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import OurTeamSection from './components/OurTeam/Section/OurTeamSection';
import ServiceCardSection from './components/ServiceCards/Section/ServiceCardsSection';
import Footer from './components/Footer/Footer';
import PageBody from './components/PageBody/PageBody';

function App() {

  const placeHolderPictures = ['https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2725&q=80', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2787&q=80']

  return (
    <Router>
      <div className="siteContainer">
        <Route exact path="/">
          <Nav />
          <Hero title="Travel Sales Group" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem eligendi quia incidunt aliquid tempora fuga eum nisi perferendis quod, quos consequuntur blanditiis, minus quisquam ipsam quasi, beatae exercitationem magni!" hrVisible={true} pictures={placeHolderPictures} />
          <ServiceCardSection />
          <OurTeamSection />
          <Footer />
        </Route>

        <Route exact path="/honeymoon">
          <Nav />
          <Hero title="Isn't It Romantic?" desc="Our Travel Sales Group Pros are experts at honeymoons, destination weddings and Anniversary getaways. We know first hand how much these trips mean to you! They can bring a couple together and make memories that will be cherished forever. We will chat with you, ask the right questions, and make sure that your getaway together is the best trip you could dream up!" hrVisible={true} pictures={placeHolderPictures} />
          <PageBody heading="How We Work" />
          <Footer />
        </Route>

        <Route exact path='/how-we-work'>
          <Nav />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
