import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import './serviceSection.css';

const ServiceCardSection = () => {
    const services = [{
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: "Isn't It Romantic?",
        desc: "Honeymoons, Destination Weddings",
        urlLocation: '/honeymoon'
    }, {
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: "Best Meeting Ever!",
        desc: "Business Travel and Fabulous Groups"
    }, {
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: `Grown Up Time`,
        desc: 'Adults Only Resorts, For Couples or Groups'
    }, {
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: 'You Pick The Place',
        desc: 'Amazing Destinations'
    }, {
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: 'Our Escorted Groups',
        desc: 'Travel w/ TSG Agents'
    }, {
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: 'Rolling On The River',
        desc: 'Explore the World In'
    }, {
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: 'Travelling w/ Tots',
        desc: 'Luxury Family Travel'
    }]

    const makeCard = (item) => {
        return <ServiceCard url={item.urlLocation} picture={item.picture} title={item.title} desc={item.desc} />
    }

    return (
        <div className="serviceCardSection" id="serviceCardSection">
            <h2 className="teamSectionHeader">Services</h2>
            <hr className="teamSectionHr"/>
            <div className="serivceCardContainer">
                {services.map((item, i) => {
                    if(i < 4) {
                        return makeCard(item);
                    }
                })}
            </div>
            <div className="serivceCardContainer">
                {services.map((item, i) => {
                    if(i > 3) {
                        return makeCard(item);
                    }
                })}
            </div>
        </div>
    )
}

export default ServiceCardSection;