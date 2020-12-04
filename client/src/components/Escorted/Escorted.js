import React from 'react';
import './Escorted.css';

export default function Escorted() {
    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }

    return (
        <div className='escortedDiv'>
            <p className="escortedHeader">Join us for our personally escorted AMAWaterways group wine cruise along the Rhine from July 13th – 20th !</p>
            <p className="escortedPlug">SAVE $250 per person when booking with our group!!</p>
            <p className="escortedInfo">We will depart from Basel and meander through France, Germany, and end our journey in Amsterdam.</p>
            <p className="escortedInfo">You will only unpack once - aboard the brand new AMALucia with several options for staterooms, all with a view of the gorgeous scenes along the nearby shores of the Rhine River.  You will sample some of the best wine, chocolate, cheese and beer in the world…all included in your stay!  The food onboard is nothing short of 5 star with expert local wine pairings included with every course of your gourmet meal.  The inclusions onboard are endless.</p>
            <p className="escortedInfo">Tour medieval castles, sample fresh gingerbread like you have never experienced in your life, and bike through the small towns that inspired Beauty and the Beast and stroll through markets with fresh fruits, vegies, cheese, baked goods, meats and flowers in town squares.  Our favorite part of the trip is the castles along the Rhine, where you will sit back in your chaise on the upper deck and watch as you float by 30 different castles built into the hills along the river.  Just Stunning!</p>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1381820481972224&show_text=true&width=552&height=792&appId" width={window.innerWidth > 575 ? "552" : "325"} height="792" style={iframeStyle} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
            <p className="escortedInfo"><a href="https://www.amawaterways.com/destination/europe-river-cruises/2020/enchanting-rhine">Click here for a video with details!</a></p>
        </div>
    )
}
