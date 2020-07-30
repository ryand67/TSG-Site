import React from 'react';
import './TeamCard.css'

const TeamCard = (props) => {
    return (
        <div className="teamCardContainer">
            <img src={props.picture} alt="" className="teamCardPicture"/>
            <hr className="teamCardHr"/>
            <h4 className="teamCardName">{props.name}</h4>
            <p className="teamCardDesc">{props.desc}</p>
            <div className="teamCardContact">
                <p className="teamCardEmail"><i class="fas fa-envelope"></i>{props.email}</p>
                <p className="teamCardPhone"><i class="fas fa-phone-alt"></i>{props.phone}</p>
            </div>
        </div>
    )
}

export default TeamCard;