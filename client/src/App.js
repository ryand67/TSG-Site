import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import OurTeamSection from './components/OurTeam/Section/OurTeamSection';
import ServiceCardSection from './components/ServiceCards/Section/ServiceCardsSection';
import Footer from './components/Footer/Footer';
import HowWeWork from './components/HowWeWork/HowWeWork';
import HoneymoonBody from './components/HoneymoonBody/HoneymoonBody';
import AdultsOnly from './components/AdultsOnly/AdultsOnly';
import KidFriendly from './components/KidFriendly/KidFriendly';
import Contact from './components/Contact/Contact';

function App() {

  const placeHolderPictures = ['https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2725&q=80', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2787&q=80']

  const [stateNavContact, setContact] = React.useState(false);

  const contactCallback = () => {
    setContact(true);
  }

  const contactCloseCallback = () => {
    setContact(false);
  }

  return (
    <Router>
      <div className="siteContainer">
        <Nav handleNavContact={contactCallback} />
        {stateNavContact ? <Contact handleNavContactClose={contactCloseCallback} /> : ''}
        <Route exact path="/">
          <Hero title="TravelSalesGroup" desc="“And the purpose of life, after all, is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.” — Eleanor Roosevelt" hrVisible={true} pictures={placeHolderPictures} />
          <ServiceCardSection />
          <OurTeamSection />
          <Footer />
        </Route>

        <Route exact path="/honeymoon">
          <Hero title="Isn't It Romantic?" desc="Our Travel Sales Group Pros are experts at honeymoons, destination weddings and Anniversary getaways. We know first hand how much these trips mean to you! They can bring a couple together and make memories that will be cherished forever. We will chat with you, ask the right questions, and make sure that your getaway together is the best trip you could dream up!" hrVisible={true} pictures={placeHolderPictures} />
          <HoneymoonBody />
          <Footer />
        </Route>

        <Route exact path='/how-we-work'>
          <Hero title="How We Work" desc="TravelSalesGroup Travel Consultants plan customized trips that are thoughtfully seemed together and geared toward exactly what YOU are looking for in a travel experience.  We create the perfect trip, designed just for you by understanding your likes and dislikes.  We take time with each of our special clients to understand the dream that they have and do everything in our power to exceed their expectations. We receive many requests for travel assistance but only work with a few  clients at a time, in order to provide our best service.  Below is a general timeline and an outline of what to expect when working with one of our agents." hrVisible={true} pictures={placeHolderPictures} />
          <HowWeWork />
          <Footer />
        </Route>

        <Route exact path="/adults-only">
          <Hero title="For the Grown Ups - Adults Only Resorts" desc="" pictures={placeHolderPictures} hrVisible={false} />
          <AdultsOnly />
          <Footer />
        </Route>

        <Route exact path="/kid-friendly">
          <Hero title="Traveling w/ Tots" desc="" pictures={placeHolderPictures} hrVisible={false} />
          <KidFriendly />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
