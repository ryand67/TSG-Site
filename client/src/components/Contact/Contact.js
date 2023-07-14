import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

export default function(props) {

    const [formName, setName] = useState('');
    const [formEmail, setEmail] = useState('');
    const [formPhone, setPhone] = useState('');
    const [formMessage, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        console.log(e.target)
        e.preventDefault();

        emailjs.sendForm('service_mplbg7h', 'template_ffhm35s', e.target, 'user_8JdlKgob6SqIadG5ELa2O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contactShader">
            <div className="contactPageDiv">
                <i onClick={() => props.handleNavContactClose()} className="fas fa-times contact-exit"></i>
                <h1 className="contactHeader">Contact Us:</h1>
                <form className="contactForm" onSubmit={(e) => handleFormSubmit(e)}>
                    <label htmlFor="formNameInput">Name:</label>
                    <input required type="text" placeholder="Name" name="formNameInput" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="formEmailInput">Email:</label>
                    <input required type="email" placeholder="example@example.com" name="formEmailInput" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="formPhoneInput">Phone Number:</label>
                    <input required type="tel" placeholder="1234567890" name="formPhoneInput" onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="formSubject">Subject:</label>
                    <input required type="text" name="formSubject" placeholder="Subject" />
                    <label htmlFor="formMessageTextArea">Message:</label>
                    <textarea required name="formMessageTextArea" placeholder="Write your message here." cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="formSubmit">Submit</button>
                </form>
            </div>
        </div>
    )
}
