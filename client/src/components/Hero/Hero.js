import React from 'react';
import './hero.css'

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="heroShader">
                <div className="title-container">
                    <h1 className="main-title">Travel Sales Group</h1>
                    <hr className="heroHr"/>
                    <h4 className="main-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem eligendi quia incidunt aliquid tempora fuga eum nisi perferendis quod, quos consequuntur blanditiis, minus quisquam ipsam quasi, beatae exercitationem magni!</h4>
                    <button className="heroButton">How We Work</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;