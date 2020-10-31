import React from 'react';
import './teamPageProfile.css';

export default function TeamPagePart( { agent } ) {
    return (
        <>
            <div className="teamPageProfile" id={`#${agent.urlId}`}>
                <img src={agent.picture} alt="" className="teamPagePicture" />
                <div className="teamPageText">
                    <h1 className="teamPageProfileName">{agent.name}</h1>
                    <hr className="teamPageProfileHr" />
                    <p className="teamPageProfileDesc">{agent.desc}</p>
                    <div className="teamPageProfileContact">
                        <h4>{agent.phone}</h4>
                        <h4>{agent.email}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
