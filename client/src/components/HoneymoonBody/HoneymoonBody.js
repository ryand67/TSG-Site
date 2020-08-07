import React from 'react';
import './honeymoonBody.css';

const HoneymoonBody = () => {
    return (
        <div className="honeymoonBody">
            <h1 className="honeymoonHeading">What To Expect When Booking Your Wedding w/ TSG:</h1>
            <hr className="honeymoonHr"/>
            <div className="honeymoonPoints">
                <p className="honeymoonPoint">Step 1 :  Your agent will discuss your preferences with you and help you narrow down your destination, resort and style for the wedding.</p>
                <p className="honeymoonPoint">Step 2:  A few options will be sent along with the registration form to be filled out by the happy couple.  The plan to book deposit will be paid.</p>
                <p className="honeymoonPoint">Step 3:  Your agent will go over every special amenity and special “offer” for the resorts you have chosen.  We will then put you in touch with the coordinators at the resort or in destination to confirm dates, details and deposit requirements for the resort wedding portion.</p>
                <p className="honeymoonPoint">Step 4:  You will liaise with the coordinator and get your date secured, cc’ing your agent on those emails so that they may keep all your details on file.</p>
                <p className="honeymoonPoint">Step 5:  Yay!  Your wedding is booked!  We will now work on the travel package and how you will invite your guests.  We suggest creating a facebook group including your agent where reminders and info can be posted.  Once your trip is booked, TSG will build a free honeymoon registry for you to provide to your guests.  Then, your stress is over as far as your guests’s travel.  We will handle all of their questions and booking all of them into your group.</p>
            </div>
        </div>
    )
}

export default HoneymoonBody;