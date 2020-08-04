import React from 'react';
import './pageBody.css';

const PageBody = (props) => {
    return (
        <div className="pageBodyContainer">
            <h1 classNAme="pageBodyHeading">{props.heading}</h1>
            <hr className="pageBodyHr"/>
        </div>
    )
}

export default PageBody;