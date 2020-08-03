import React from 'react';
import './hero.css'

const Hero = (props) => {

    return (
        <div className="hero">
            <div className="heroShader">
                <div className="title-container">
                    <h1 className="main-title">{props.title}</h1>
                    <hr className="heroHr"/>
                    <h4 className="main-text">{props.desc}</h4>
                    {window.location.pathname === '/' ? <button className="heroButton">How We Work</button> : <button className="heroButton">Contact</button>}
                </div>
            </div>
        </div>
    )
}

export default Hero;