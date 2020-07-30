import React from 'react';
import './nav.css';
import navLogo from '../../Assets/TSGLogoNoTextPNG.png';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <nav className="navBar">
            <img src={navLogo} alt="" className="navLogo"/>
            <ul className="navList">
                <li className="navItem">Company</li>
                <li className="navItem">Services</li>
                <li className="navItem">Contact Us</li>
                <Link smooth to="#ourTeamSection" className="navLink navItem">
                    <li>Our Agents</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;