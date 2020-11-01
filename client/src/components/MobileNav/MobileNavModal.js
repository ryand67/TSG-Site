import React from 'react';
import './MobileNavModal.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function MobileNavModal( props ) {
    
    return (
        <div className="mobileNavModal">
            <ul className="mobileNavList">
                <Link smooth to={window.location.pathname === '/' ? "#serviceCardSection" : "/#serviceCardSection"} onClick={() => props.closeMenu()} className="mobileNavLink">
                    <li className="mobileNavListItem">
                        Services
                    </li>
                </Link>
                <Link smooth to={window.location.pathname === '/' ? "#ourTeamSection" : "/#ourTeamSection"} onClick={() => props.closeMenu()} className="mobileNavLink">
                    <li className="mobileNavListItem">
                        Our Agents
                    </li>
                </Link>
                <li className="mobileNavListItem" onClick={() => props.handleNavContact()}>
                    Contact Us
                </li>
                <li className="mobileNavListItem">
                    <a href="https://www.vacationcrm.com/IFrameRegistration?lookup_id=9A1FBE78-6356-4091-A53B-EBCEFA51D759" target="_blank" className="mobileNavLink">Client Info Form</a>
                </li>
            </ul>
        </div>
    )
}
