import React from 'react';
import './hero.css'
import Contact from '../Contact/Contact';

const Hero = (props) => {

    const [currentImage, setCurrentImage] = React.useState(props.pictures[0]);
    const [contactUp, setContact] = React.useState(false);

    let counter = 0;

    React.useEffect(() => {
        setInterval(() => {

            if(counter === props.pictures.length - 1) {
                counter = 0;
            } else {
                counter++;
            }

            setCurrentImage(props.pictures[counter]);

        }, 5000);
    }, [])

    const howWeWorkButton = () => {
        window.location.replace('/how-we-work')
    }

    const contactButtonClick = () => {
        setContact(true);
    }

    const exitButton = () => {
        setContact(false);
    }

    return (
        <div className="hero" style={{backgroundImage: `url(${currentImage})` }}>
            {contactUp ? <Contact exitFunc={exitButton}/> : ''}
            <div className="heroShader">
                <div className="title-container">
                    <h1 className="main-title">{props.title}</h1>
                    {props.hrVisible ? <hr className="heroHr"/> : false}
                    <h4 className="main-text">{props.desc}</h4>
                    {window.location.pathname === '/' ? <button className="heroButton" onClick={() => howWeWorkButton()}>How We Work</button> : <button className="heroButton" onClick={() => contactButtonClick()}>Contact</button>}
                </div>
            </div>
        </div>
    )
}

export default Hero;