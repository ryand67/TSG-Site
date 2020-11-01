import React, { useState } from 'react';
import './mobileNav.css';
import navLogo from '../../Assets/TSGLogoNoTextPNG.png';
import MobileMavModal from './MobileNavModal';

export default function MobileNav( props ) {
    const [menuOpen, setMenu] = useState(false);

    const handleMobileMenu = (e) => {
        e.preventDefault();
        if(menuOpen) {
            props.handleClose()
            setMenu(false);
        } else {
            props.openMobileMenuCB();
            setMenu(true);
        }
    }

    return (
        <>
        <nav className="mobileNav">
            <img src={navLogo} alt="" className={menuOpen ? "mobileNavLogo2" : "mobileNavLogo"} onClick={() => window.location.replace('/')}/>
            <button className="mobileNavMenuButton" onClick={(e) => handleMobileMenu(e)}>MENU</button>
        </nav>
        </>
    )
}
