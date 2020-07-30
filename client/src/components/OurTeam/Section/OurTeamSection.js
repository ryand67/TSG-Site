import React from 'react';
import './ourTeamSection.css';
import TeamCard from '../TeamCard/TeamCard';

const OurTeamSection = () => {
    const agents = [{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    }, {
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    },{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    },{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    },{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    },{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    },{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    },{
        name: 'Testing McTester',
        picture: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt modi ex. Veritatis quis natus animi ex magnam reiciendis nostrum voluptatem.',
        phone: '000-000-0000',
        email: 'testing@test.com'
    }]

    return(
        <div className="ourTeamSection" id='ourTeamSection'>
            <h2 className="teamSectionHeader">Our Agents</h2>
            <hr className="teamSectionHr"/>
            <div className="cardContainer">
                {agents.map((item, i) => {
                    if(i < 4) {
                        return <TeamCard key={i} name={item.name} picture={item.picture} desc={item.desc} phone={item.phone} />
                    }
                })}
            </div>
            <div className="cardContainer">
            {agents.map((item, i) => {
                    if(i > 4) {
                        return <TeamCard key={i} name={item.name} picture={item.picture} desc={item.desc} phone={item.phone} />
                    }
                })}
            </div>
        </div>
    )
}

export default OurTeamSection;