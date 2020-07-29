import React from 'react';
import './ourTeamSection.css';
import TeamCard from '../TeamCard/TeamCard';

const OurTeamSection = () => {
    const agents = [{
        name: 'Testing',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.'
    },{
        name: 'Testing',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.'
    },{
        name: 'Testing',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.'
    },{
        name: 'Testing',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.'
    }]

    return(
        <div className="ourTeamSection">
            <h2 className="teamSectionHeader">Our Agents</h2>
            <hr className="teamSectionHr"/>
            {agents.map(item => {
                return <TeamCard name={item.name} picture={item.picture} desc={item.desc} />
            })}
        </div>
    )
}

export default OurTeamSection;