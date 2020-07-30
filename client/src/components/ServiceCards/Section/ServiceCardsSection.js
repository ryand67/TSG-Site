import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import './serviceSection.css';

const ServiceCardSection = () => {
    return (
        <div className="serviceCardSection">
            <h2 className="teamSectionHeader">Services</h2>
            <hr className="teamSectionHr"/>
            <ServiceCard />
        </div>
    )
}

export default ServiceCardSection;