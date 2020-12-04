import React from 'react';
import './testimonial.css';

export default function Testimonial( {testimonials} ) {
    return (
        <div className="testimonialDiv">
            <h1 className="testimonialHeader">Testimonials:</h1>
            {testimonials.map(test => {
                return (
                    <>
                        <p className="testimonialText">{test[0]}</p>
                        <p className="testimonialSignature">{test[1]}</p>
                    </>
                )
            })}
        </div>
    )
}
