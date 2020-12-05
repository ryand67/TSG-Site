import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import './serviceSection.css';
import servicePictures from '../../ServiceBtnPics';

const ServiceCardSection = () => {
    
    const services = [{
        picture: servicePictures[0],
        title: "Isn't It Romantic?",
        desc: "Honeymoons, Destination Weddings",
        urlLocation: '/honeymoon'
    }, {
        picture: servicePictures[1],
        title: "Best Meeting Ever!",
        desc: "Business Travel and Fabulous Groups",
        urlLocation: "/meetings"
    }, {
        picture: servicePictures[2],
        title: `Grown Up Time`,
        desc: 'Adults Only Resorts, For Couples or Groups',
        urlLocation: '/adults-only'
    }, {
        picture: servicePictures[3],
        title: 'You Pick The Place',
        desc: 'Amazing Destinations',
        urlLocation: '/pick-the-place'
    }, {
        picture: servicePictures[4],
        title: 'Our Escorted Groups',
        desc: 'Travel w/ TSG Agents',
        urlLocation: '/escorted-trips'
    }, {
        picture: servicePictures[5],
        title: 'Rolling On The River',
        desc: 'Explore the World In',
        urlLocation: '/rolling-on-the-river'
    }, {
        picture: servicePictures[6],
        title: 'Travelling w/ Tots or Teens',
        desc: 'Luxury Family Travel',
        urlLocation: '/kid-friendly'
    }, {
        picture: servicePictures[7],
        title: 'Our #TSGBrides',
        desc: 'Honeymoon Registries',
        urlLocation: '/honeymoon-registries'
    }]

    const makeCard = (item, i) => {
        return <ServiceCard key={i} url={item.urlLocation} picture={item.picture} title={item.title} desc={item.desc} />
    }

    return (
        <div className="serviceCardSection" id="serviceCardSection">
            <h2 className="serviceSectionHeader">Services</h2>
            <hr className="serviceSectionHr"/>
            <div className="serivceCardContainer">
                {services.map((item, i) => {
                    if(i < 4) {
                        return makeCard(item, i);
                    }
                })}
            </div>
            <div className="serivceCardContainer">
                {services.map((item, i) => {
                    if(i > 3) {
                        return makeCard(item, i);
                    }
                })}
            </div>
        </div>
    )
}

export default ServiceCardSection;