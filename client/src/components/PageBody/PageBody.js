import React from 'react';
import './pageBody.css';

const PageBody = (props) => {
    return (
        <div className="pageBodyContainer">
            <h1 classNAme="pageBodyHeading">{props.heading}</h1>
            <hr className="pageBodyHr"/>
            <p className="pageBodyDesc">{props.desc}</p>
        </div>
    )
}

export default PageBody;