import React from 'react';
import './TeamCard.css'

const TeamCard = (props) => {
    return (
        <div className="teamCardContainer">
            <img src={props.picture} alt="" className="teamCardPicture"/>
            <hr className="teamCardHr"/>
            <h4 className="teamCardName">{props.name}</h4>
            <p className="teamCardDesc">{props.desc}</p>
        </div>
    )
}

export default TeamCard;