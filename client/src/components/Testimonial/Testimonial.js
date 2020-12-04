import React from 'react';
import './testimonial.css';

export default function Testimonial( props ) {
    return (
        <div className="testimonialDiv">
            <h1 className="testimonialHeader">Testimonials:</h1>
            <p className="testimonialText">{props.text}</p>
            <p className="testimonialSignature">{props.signature}</p>
        </div>
    )
}
