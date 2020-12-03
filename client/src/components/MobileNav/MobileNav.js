import React, { useState } from 'react';
import './mobileNav.css';
import navLogo from '../../Assets/TSGLogoNoTextPNG.png';

export default function MobileNav( props ) {
    const [isTop, setTop] = useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setTop(window.scrollY > 500);
        })
    }, [])

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
        <nav className={isTop && menuOpen === false ? "mobileNavTop" : "mobileNav"}>
            <img src={navLogo} alt="" className={menuOpen ? "mobileNavLogo2" : "mobileNavLogo"} onClick={() => window.location.replace('/')}/>
            <div className={menuOpen ? "mobileNavMenuButton mobileNavBurgerOpen" : "mobileNavMenuButton"} onClick={(e) => handleMobileMenu(e)}>
                <div className="mobileNavBurger"></div>
            </div>
        </nav>
        </>
    )
}
