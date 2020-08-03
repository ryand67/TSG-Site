import React from 'react';
import './serviceCard.css';

const ServiceCard = (props) => {

    const serviceClick = () => {
        window.location.replace(props.url);
    }

    return (
        <div style={{ backgroundImage: `url(${props.picture})` }} className="serviceCard" onClick={() => serviceClick()}>
            <div className="serviceCardFilter">
                <div className="serviceCardInfo">
                    <h1 className="serviceCardTitle">{props.title}</h1>
                    <p className="serviceCardDesc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;