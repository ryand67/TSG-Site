import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className="siteContainer">
        <Route exact path="/">
          <Nav />
          <Hero />
        </Route>
      </div>
    </Router>
  );
}

export default App;
