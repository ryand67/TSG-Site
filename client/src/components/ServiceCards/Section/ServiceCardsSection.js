import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import './serviceSection.css';

const ServiceCardSection = () => {
    const services = [{
        picture: 'https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2242&q=80',
        title: "Isn't It Romantic?",
        desc: "Honeymoons, Destination Weddings"
    }]

    const makeCard = (item) => {
        return <ServiceCard picture={item.picture} title={item.title} desc={item.desc} />
    }

    return (
        <div className="serviceCardSection" id="serviceCardSection">
            <h2 className="teamSectionHeader">Services</h2>
            <hr className="teamSectionHr"/>
            <div className="serivceCardContainer">
                {services.map(item => {
                    return makeCard(item);
                })}
            </div>
        </div>
    )
}

export default ServiceCardSection;