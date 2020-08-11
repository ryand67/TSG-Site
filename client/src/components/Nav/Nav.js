import React, { useState } from 'react';
import './nav.css';
import navLogo from '../../Assets/TSGLogoNoTextPNG.png';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {

    const [isTop, setTop] = useState(false);

    const handleLogoClick = () => {
        window.location.replace('/');
    }

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setTop(window.scrollY > 500);
        })
    }, [])

    return (
        <nav className={isTop || window.location.pathname === '/contact' ? 'navBar navBarBottom' : 'navBar'} >
            <img src={navLogo} alt="" className="navLogo" onClick={() => handleLogoClick()}/>
            
            <ul className="navList">
                <Link smooth to={window.location.pathname === '/' ? "#serviceCardSection" : "/#serviceCardSection"} className="navLink navItem">
                    <li>Services</li>
                </Link>

                <Link smooth to={window.location.pathname === '/' ? "#ourTeamSection" : "/#ourTeamSection"} className="navLink navItem">
                    <li>Our Agents</li>
                </Link>

                <li className="navItem">Contact Us</li>
                <li className="navItem"><a href="https://www.vacationcrm.com/IFrameRegistration?lookup_id=9A1FBE78-6356-4091-A53B-EBCEFA51D759" target="_blank">Client Info Form</a></li>
            </ul>
        </nav>
    )
}

export default Nav;