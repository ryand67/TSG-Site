import React, { useEffect, useState } from 'react';
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
import Meetings from './components/Meetings/Meetings';
import River from './components/River/River';
import TeamPage from './components/TeamPage/TeamPage';
import realHeroPics from './components/RealHeroPics';
import MobileNav from './components/MobileNav/MobileNav';
import MobileNavModal from './components/MobileNav/MobileNavModal';
import Testimonial from './components/Testimonial/Testimonial';
import Escorted from './components/Escorted/Escorted';
import Registries from './components/Registries/Registries';
import PickThePlace from './components/PickThePlace/PickThePlace';

function App() {
  
  const placeholderHeroPics = ['https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2725&q=80', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2787&q=80']

  const [isMobileForNav, setNavMobile] = useState(window.innerWidth < 850);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setNavMobile(window.innerWidth < 850);
    })
  }, [])

  const [openMobileMenu, setMobileMenuOpen] = React.useState(false);

  const openMobileMenuCB = () => {
    setMobileMenuOpen(true);
  }

  const closeMobileMenuCB = () => {
    setMobileMenuOpen(false);
  }

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
        {isMobileForNav ? <MobileNav openMobileMenuCB={openMobileMenuCB} handleClose={closeMobileMenuCB} handleNavContact={contactCallback} /> : <Nav handleNavContact={contactCallback} />}
        {stateNavContact ? <Contact handleNavContactClose={contactCloseCallback} /> : ''}
        {openMobileMenu && isMobileForNav ? <MobileNavModal handleNavContact={contactCallback} closeMenu={closeMobileMenuCB} /> : ''}
        <Route exact path="/">
          <Hero title="TravelSalesGroup" desc="“And the purpose of life, after all, is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.” — Eleanor Roosevelt" hrVisible={true} pictures={realHeroPics} />
          <ServiceCardSection />
          <OurTeamSection />
          <Footer />
        </Route>

        <Route exact path="/honeymoon">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Isn't It Romantic?" desc="Our Travel Sales Group Pros are experts at honeymoons, destination weddings and Anniversary getaways. We know first hand how much these trips mean to you! They can bring a couple together and make memories that will be cherished forever. We will chat with you, ask the right questions, and make sure that your getaway together is the best trip you could dream up!" hrVisible={true} pictures={realHeroPics} />
          <HoneymoonBody />
          <Testimonial testimonials={[["Thank you for such an amazing honeymoon in Costa Rica at Secrets Papagayo. It was hands down our best trip together thus far. Everyone was so nice and friendly and the food was excellent...Jerica was very pleased with it. Thanks for helping us have a honeymoon that we will always remember and never want to forget and we will for sure be contacting you for our next big getaway and will also be recommending your services to others.", "Jerica and Justin – NYC"], ["My husband and I were introduced to Heather years ago when she was managing destination wedding plans for close friends. Since then, we have worked with Heather several times for personal Mexico trips. She is professional, responsive and always provides us with the best guidance. We will be working with Heather and Travel Sales Group for years to come! No detail is overlooked! Highly, highly recommend!", "Christine Hutcheson"], ["Tanya assisted our family with a fantastic all-inclusive trip to Sandals Royal Bahamian.  This was our first “real” trip ever, so we were super nervous and not really sure what to expect.  Tanya was amazing!! She put us at ease and took care of every little detail.  Tanya explained everything – what to pack, what to expect at the airport, what to expect when we arrived at customs and gave us plenty of pointers on navigating our way to the resort. Honestly, I cannot say enough wonderful things about Tanya and the job she did for us.  She was so pleasant and welcoming of our questions and concerns, it was like working with friend we’d known forever. She will be our first call when the time comes to book another adventure.  Thank you for everything, Tanya!! You’re the best!!", "Kelly and Jeremy Kessling - Pennsylvania"]]} />
          <Footer />
        </Route>

        <Route exact path='/how-we-work'>
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="How We Work" desc="TravelSalesGroup Travel Consultants plan customized trips that are thoughtfully seemed together and geared toward exactly what YOU are looking for in a travel experience." hrVisible={true} pictures={realHeroPics} />
          <HowWeWork />
          <Footer />
        </Route>

        <Route exact path="/adults-only">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="For the Grown Ups - Adults Only Resorts" desc="" pictures={realHeroPics} hrVisible={false} />
          <AdultsOnly />
          <Testimonial testimonials={[["We’ve had a great experience with Travel Sales Group & Heather! My husband and I were overwhelmed looking at all of the resort options available in popular destinations and knew we needed some trusted help. Heather has been easy to work with and has gone the extra mile to make sure our stays have been perfect! Her recommendations are top notch and continue to impress us. Highly recommend!", "Jennifer Garza"], ["Heather was with us every step of the way. We had never traveled before and she made the entire process comfortable.  She always answered our questions at the drop of a hat. W e will definitely be contacting her at travel Sales Group for our next adventure!", "Gregory and  Christina Pinarski. St. John , IN"]]} />
          <Footer />
        </Route>

        <Route exact path="/kid-friendly">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Traveling w/ Tots" desc="" pictures={realHeroPics} hrVisible={false} />
          <KidFriendly />
          <Testimonial testimonials={[["I would like to take the opportunity to thank Jenn McDonald for another fantastic trip!  Tropical Storm Matthew hit during our stay and Jenn gave me her direct line and made sure that I could contact her at any time to help with any snags that came up.  She even upgraded me on this trip to private airport transfers (highly recommend - saved hours)!  Thanks so much Jenn for everything.  We will be in touch soon!", "​Lucia – NYC"], ["Everytime we have gone away, we have used Jenn to book our trips.  I have to say that she does not leave one stone unturned.  Her attention to detail is unbelievable! This trip was no different than all the others she has planned for us.  I would highly recommend her!", "Lorenda M - Oklahoma"], ["Tanya was incredibly helpful with planning our 7 day Disney vacation for my family and my parents! She was very knowledgeable about anything and everything Disney including differences with the hotels, dining packages, transportation and the new attractions. We’ve been to Disney before but this trip was so much easier since Tanya planned out our entire trip with a detailed itinerary and also helped us maximize our experiences in the parks. She booked the fast passes, character dining, and even upgraded our stay based on the latest resort offers. She was very responsive, organized, and an overall pleasure to work with throughout the planning process. I would highly recommend hiring Tanya to plan a magical Disney vacation for you and your family! It will certainly be filled with amazing memories due to her outstanding planning skills!", "Laura - Pennsylvania"]]} />
          <Footer />
        </Route>

        <Route exact path="/meetings">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Best Meeting Ever" desc="We specialize in handling all of the specifics for your meeting or incentive group.  We handle everything from helping you find the perfect destination and resort to planning the events and menus with our contacts on property.  We can even accompany your group to oversee all of the those little details so that your employees can enjoy the whole event instead of worrying about following up on all those particulars. Reach out to us to get started planning your event Info@TravelSalesGroup.com or 888-382-8847, option 1." pictures={realHeroPics} hrVisible={true} />
          <Meetings />
          <Testimonial testimonials={[["We host an annual conference for business coaches and needed an expert to help us arrange and set up our yearly events. Heather Di Pietro has been a Godsend to our company, and thanks to her knowledge and expertise in dealing with Caribbean resorts, we have now hosted 5 events in 5 years and received rave reviews from our attendees at each one of them. With Heather negotiating on our behalf, each of our events have been a huge financial and professional success. Heather specializes in Caribbean resorts and helped us select the ones that offered luxury, a professional and accommodating staff, and affordable pricing. I strongly recommend Heather to anyone looking to the Caribbean for either business or vacation.", "Adrian Ulsh - CEO - Leader Publishing Worldwide"]]}  />
          <Footer />
        </Route>

        <Route exact path="/rolling-on-the-river">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Rolling on the River" pictures={realHeroPics} hrVisible={true} desc="If you have not yet experienced the luxury and convenience of river cruising, here are a few reasons to give it a try." />
          <River />
          <Footer />
        </Route>

        <Route exact path="/team">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Meet Our Team" desc="Meet our team of agents ready to send you on the vacation of your dreams." pictures={realHeroPics} hrVisible={true} />
          <TeamPage />
          <Footer />
        </Route>

        <Route exact path="/escorted-trips">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Our Escorted Groups" pictures={realHeroPics} hrVisible={false} />
          <Escorted />
          <Footer />
        </Route>

        <Route exact path="/honeymoon-registries">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} title="Our #TSGBrides" desc="Honeymoon Registries" pictures={realHeroPics} hrVisible={true} />
          <Registries />
          <Footer />
        </Route>

        <Route exact path="/pick-the-place">
          <Hero heroHandleContactClose={contactCloseCallback} heroHandleContact={contactCallback} desc="Pick the destination of your next adventure!" title="You Pick The Place" pictures={realHeroPics} hrVisible={true} />
          <PickThePlace />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
