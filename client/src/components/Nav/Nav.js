import React from 'react';
import './nav.css';
import navLogo from '../../Assets/TSGLogoNoTextPNG.png';

const Nav = () => {
    return (
        <nav className="navBar">
            <img src={navLogo} alt="" className="navLogo"/>
            <ul className="navList">
                <li className="navItem">Company</li>
                <li className="navItem">Services</li>
                <li className="navItem">Contact Us</li>
                <li className="navItem">Our Agents</li>
            </ul>
        </nav>
    )
}

export default Nav;