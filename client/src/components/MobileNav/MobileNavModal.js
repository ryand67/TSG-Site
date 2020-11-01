import React from 'react';
import './MobileNavModal.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function MobileNavModal() {
    return (
        <div className="mobileNavModal">
            <ul className="mobileNavList">
                <li className="mobileNavListItem">
                    Services
                </li>
                <li className="mobileNavListItem">
                    Our Agents
                </li>
                <li className="mobileNavListItem">
                    Contact Us
                </li>
                <li className="mobileNavListItem">
                    Client Info Form
                </li>
            </ul>
        </div>
    )
}
