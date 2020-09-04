import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import './serviceSection.css';

const ServiceCardSection = () => {
    const services = [{
        picture: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/78373236_1539654802855457_3038802731876745216_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=Jl7g59hxgn8AX9OSRQj&_nc_ht=scontent-mia3-1.xx&oh=cd84aff5d14a35f5c96cc51bd6008f50&oe=5F5C4E2D',
        title: "Isn't It Romantic?",
        desc: "Honeymoons, Destination Weddings",
        urlLocation: '/honeymoon'
    }, {
        picture: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/p720x720/62049806_1381822131972059_4525127081494839296_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=97HnCsQ5g_kAX_u6J_1&_nc_ht=scontent-mia3-2.xx&_nc_tp=6&oh=8800c4caf8df5b363b4447860931154b&oe=5F5CBD4C',
        title: "Best Meeting Ever!",
        desc: "Business Travel and Fabulous Groups",
        urlLocation: "/meetings"
    }, {
        picture: 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/14712952_714401338714145_144512781175773352_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=lq3GSS7uxRAAX-03fxd&_nc_ht=scontent-mia3-2.xx&oh=6a99b3362fc10489d44dd2da8d289485&oe=5F5C152E',
        title: `Grown Up Time`,
        desc: 'Adults Only Resorts, For Couples or Groups',
        urlLocation: '/adults-only'
    }, {
        picture: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/79317300_1539661739521430_3756136405739241472_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=UF05G2cbZdsAX_jtafK&_nc_ht=scontent-mia3-2.xx&oh=7afc722a873ff479c90fc051d57299ea&oe=5F59D621',
        title: 'You Pick The Place',
        desc: 'Amazing Destinations'
    }, {
        picture: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-0/c0.0.200.200a/p200x200/83878940_1594646887356248_9148214382667235328_o.jpg?_nc_cat=106&_nc_sid=cdbe9c&_nc_ohc=hAKwdvhVNwkAX-NXoGS&_nc_ht=scontent-mia3-1.xx&oh=2c53c57f379c73ea8a1a0f02cd661964&oe=5F5AF670',
        title: 'Our Escorted Groups',
        desc: 'Travel w/ TSG Agents'
    }, {
        picture: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/p720x720/83523530_1594659017355035_5414190242389295104_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=zRGcmOzKSPIAX9Q3O71&_nc_ht=scontent-mia3-2.xx&_nc_tp=6&oh=3f027759af090c67a6b822f13bfc4a7f&oe=5F5C5F54',
        title: 'Rolling On The River',
        desc: 'Explore the World In'
    }, {
        picture: 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/10505209_350113041809645_3694981853483508768_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=8qmIO9fAZtcAX9tVEa1&_nc_ht=scontent-mia3-2.xx&oh=8cbac3bda4fc044971d0adfb5d114d9f&oe=5F5A8B31',
        title: 'Travelling w/ Tots',
        desc: 'Luxury Family Travel',
        urlLocation: '/kid-friendly'
    }, {
        picture: 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/10505209_350113041809645_3694981853483508768_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=8qmIO9fAZtcAX9tVEa1&_nc_ht=scontent-mia3-2.xx&oh=8cbac3bda4fc044971d0adfb5d114d9f&oe=5F5A8B31',
        title: 'Our #TSGBrides',
        desc: 'Honeymoon Registries',
        urlLocation: '/honeymoon-registries'
    }]

    const makeCard = (item, i) => {
        return <ServiceCard key={i} url={item.urlLocation} picture={item.picture} title={item.title} desc={item.desc} />
    }

    return (
        <div className="serviceCardSection" id="serviceCardSection">
            <h2 className="serviceSectionHeader">Services</h2>
            <hr className="serviceSectionHr"/>
            <div className="serivceCardContainer">
                {services.map((item, i) => {
                    if(i < 4) {
                        return makeCard(item, i);
                    }
                })}
            </div>
            <div className="serivceCardContainer">
                {services.map((item, i) => {
                    if(i > 3) {
                        return makeCard(item, i);
                    }
                })}
            </div>
        </div>
    )
}

export default ServiceCardSection;