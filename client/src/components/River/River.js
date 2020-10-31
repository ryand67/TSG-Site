import React from 'react';
import './River.css';
import logo1 from '../../Assets/RiverLogos/crystalCruises.png';
import logo2 from '../../Assets/RiverLogos/uniworldCruises.png';
import logo3 from '../../Assets/RiverLogos/vikingCruises.jpg';
import logo4 from '../../Assets/RiverLogos/AmaWaterways.jpg';

export default function River() {
    return (
        <div className="RiverPage">
            <ol className="riverList">
                <li className="riverListItem">Daily excursions and the ability to explore by just walking off the ship.  The places that these ships docks are usually right in the center of the cities that you want to explore.  Ocean liners travel TO cities.  River Cruises travel THROUGH cities allowing you to truly experience them.</li>
                <li className="riverListItem">Scenic views night and day.  You are rarely more than 100 yards from the edges of these rivers so you get to see so much of the countryside as you travel.  On most of these, there are no interior cabins, so every room has an outstanding view.</li>
                <li className="riverListItem">The only way to see most of these destinations with all inclusive packages.  Every line include different amenities, meals, beverages and inclusions.  So, your TSG agent can help you decide which is the best fit for you and your budget.</li>
                <li className="riverListItem">Only unpack once.  You will get to see multiple cities and countries on each itinerary and only unpack your bags once.</li>
                <li className="riverListItem">Smaller vessels and way fewer passengers on each ship.  These ships average between 100 and 200 passengers.  In a post covid era, this means that they are less crowded and safer for you.  The staff gets to know you and your preferences.  There is far more personal attention on these ships than on larger ocean liners.</li>
                <li className="riverListItem">If you are one of those people that says, “I just don’t care for cruises”, give it a shot once and you will be hooked!</li>
                <li className="riverListItem">Smaller ships also means more options.  You can explore the Rhine, the Danube, the Douro, the Seine, the Mekong or even Africa.</li>
            </ol>
            <p>Contact our agency river cruise specialist, Heather Di Pietro at 518-885-8035, 888-382-8847 or <span><a href="mailto:heather@travelsalesgirl.com" className="riverEmailLink">heather@travelsalesgirl.com</a></span> for more info or to get your river adventure on the books. </p>
            <div className="riverLogoDiv">
                <img src={logo1} alt="" className="riverLogo" />
                <img src={logo2} alt="" className="riverLogo" />
                <img src={logo3} alt="" className="riverLogo" />
                <img src={logo4} alt="" className="riverLogo" />
            </div>
        </div>
    )
}
