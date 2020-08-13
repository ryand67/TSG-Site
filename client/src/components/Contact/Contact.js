import React, { useState } from 'react';
import './contact.css';

export default function(props) {

    const [formName, setName] = useState('');
    const [formEmail, setEmail] = useState('');
    const [formPhone, setPhone] = useState('');
    const [formMessage, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="contactShader">
            <div className="contactPageDiv">
                <i onClick={() => props.exitFunc()} className="fas fa-times contact-exit"></i>
                <h1 className="contactHeader">Contact Us:</h1>
                <form action="" className="contactForm" onSubmit={(e) => handleFormSubmit(e)}>
                    <label htmlFor="formNameInput">Name:</label>
                    <input required type="text" placeholder="Name" name="formNameInput" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="formEmailInput">Email:</label>
                    <input required type="email" placeholder="example@example.com" name="formEmailInput" onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="formEmailInput">Phone Number:</label>
                    <input required type="tel" placeholder="1234567890" name="formEmailInput" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" onChange={(e) => setPhone(e.target.value)}/>
                    <label htmlFor="formMessageTextArea">Message:</label>
                    <textarea required name="formMessageTextArea" placeholder="Write your message here" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="formSubmit" onClick={(e) => handleFormSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}