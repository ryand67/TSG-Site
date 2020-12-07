import React from 'react';
import Card from './RegistriesCard';
import './registries.css';
import pic1 from '../../Assets/RegistriesPics/registries1.jpg';
import pic2 from '../../Assets/RegistriesPics/registries2.jpg';
import pic3 from '../../Assets/RegistriesPics/registries3.jpg';

function Registries() {

    const registriesInfo = [{
        name: 'Katarina and Chris',
        desc: 'March 2021 at Secrets Akumal',
        pageLink: "https://www.theknot.com/us/christopher-goad-and-katarina-auler-jun-2020",
        picture: pic1
    }, {
        name: 'Tessa and Jake',
        desc: 'January 2021 at Secrets Akumal',
        pageLink: 'https://www.facebook.com/groups/1195869207286541',
        picture: pic3
    }, {
        name: 'Jana and Chris',
        desc: 'April 2021 at Dreams Natura',
        pageLink: 'https://www.theknot.com/us/jana-tuttle-and-chris-crosby-apr-2021',
        picture: pic2
    }]

    return (
        <div className="registriesPage">
            <h1 className="registriesTitle">Registries</h1>
            <div className="regCardDiv">
                {registriesInfo.map(item => {
                    return <Card name={item.name} desc={item.desc} picture={item.picture} pageLink={item.pageLink} className="registriesCard" />
                })}
            </div>
        </div>
    )
}

export default Registries
