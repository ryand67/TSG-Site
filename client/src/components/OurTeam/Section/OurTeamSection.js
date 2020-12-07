import React from 'react';
import './ourTeamSection.css';
import TeamCard from '../TeamCard/TeamCard';
import NewTeamCard from '../newTeamCard/newTeamCard';
import FrankPic from '../../../Assets/ProfilePhotos/Frank.jpg';
import coralPic from '../../../Assets/ProfilePhotos/Coral.jpeg';
import heatherPic from '../../../Assets/ProfilePhotos/Heather.jpg';

const OurTeamSection = () => {
    const agents = [{
        name: 'Heather DiPietro',
        picture: heatherPic,
        desc: 'Heather is an expert with your Luxury Experiences, Honeymoons, Anniversaries, Destination Weddings, Incentive and Conference Groups, Europe, River Cruises, Caribbean, Mexico, Tahiti, Bora Bora, New Zealand, Hawaii.',
        phone: '518-885-8035',
        email: 'Heather@TravelSalesGirl.com'
    },{
        name: 'Jenn McDonald',
        picture: 'http://nebula.wsimg.com/fe29e37c665b9f697ec41d92c4a72afc?AccessKeyId=B3B2E63AE054F167177D&disposition=0&alloworigin=1',
        desc: 'Jenn expertly plans Family Travel in Mexico and the Caribbean, Beach Honeymoons, Hawaii.',
        phone: '215-491-4308',
        email: 'Jenn@TravelSalesGal.com'
    }, {
        name: '​Tanya Nghiem',
        picture: 'http://nebula.wsimg.com/2b524f8b906a39d32a0d87a98dd4af09?AccessKeyId=B3B2E63AE054F167177D&disposition=0&alloworigin=1',
        desc: 'Our resident Disney Princess (including Disney cruises, Adventures by Disney, and all parks), Universal Vacations, Family Travel, Hawaii, Mexico.',
        phone: '267-483-5767',
        email: '​Tanya@TravelSalesGroup.com'
    },{
        name: 'Coral Staton',
        picture: coralPic,
        desc: 'Namaste – Yoga Retreats, Adventure Travel, Thailand, South America, Family Travel, Some Cruises.',
        phone: '770-272-5397​',
        email: 'Coral@TravelSalesGroup.com'
    },{
        name: 'Frank DiPietro',
        picture: FrankPic,
        desc: 'Specialties include AMAWaterways River Cruises, Viking River Cruises, Golf and Fishing Trips, European Adventures.',
        phone: '518-369-5730',
        email: 'Frank@TravelSalesGuy.com'
    }]

    const makeCard = (item, i) => {
        return <NewTeamCard key={i} name={item.name} picture={item.picture} desc={item.desc} phone={item.phone} email={item.email} />
    }

    return(
        <div className="ourTeamSection" id='ourTeamSection'>
            <h2 className="teamSectionHeader">Our Agents</h2>
            <hr className="teamSectionHr"/>
            {/* <newTeamCard /> */}
            <div className="cardContainer">
                {agents.map((item, i) => {
                    if(i < 3) {
                        return makeCard(item, i);
                    }
                })}
            </div>
            <div className="cardContainer">
            {agents.map((item, i) => {
                    if(i > 2) {
                        return makeCard(item, i);
                    }
                })}
            </div>
        </div>
    )
}

export default OurTeamSection;