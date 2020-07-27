import React from 'react';
import './nav.css';
import navLogo from '../../Assets/TSGLogoNoTextPNG.png';

const Nav = () => {
    return (
        <nav className="navBar">
            <img src={navLogo} alt="" className="navLogo"/>
        </nav>
    )
}

export default Nav;