import React from 'react';
import './serviceCard.css';

const ServiceCard = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.picture})` }} className="serviceCard">
            <div className="serviceCardFilter">
                <h1 className="serviceCardTitle">{props.title}</h1>
                <p className="serviceCardDesc">{props.desc}</p>
            </div>
        </div>
    )
}

export default ServiceCard;