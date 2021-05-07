import React from 'react';
import './Escorted.css';

export default function Escorted() {
    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }

    return (
        <div className='escortedDiv'>
            <p className="escortedHeader">Join us for our personally escorted AMAWaterways group wine cruise along the Rhine from August 1st-8th, 2022!</p>
            <p className="escortedPlug">SAVE $250 per person when booking with our group!!</p>
            <div className="escortedPlugExtra">** PLUS AN ADDITIONAL $750 per person off if you book by May 31st, 2021!! **</div>
            <p className="escortedInfo">We will depart from Basel and meander through France, Germany, and end our journey in Amsterdam.</p>
            <p className="escortedInfo">You will only unpack once - aboard the brand new AMALucia with several options for staterooms, all with a view of the gorgeous scenes along the nearby shores of the Rhine River.  You will sample some of the best wine, chocolate, cheese and beer in the world…all included in your stay!  The food onboard is nothing short of 5 star with expert local wine pairings included with every course of your gourmet meal.  The inclusions onboard are endless.</p>
            <p className="escortedInfo">Tour medieval castles, sample fresh gingerbread like you have never experienced in your life, and bike through the small towns that inspired Beauty and the Beast and stroll through markets with fresh fruits, vegies, cheese, baked goods, meats and flowers in town squares.  Our favorite part of the trip is the castles along the Rhine, where you will sit back in your chaise on the upper deck and watch as you float by 30 different castles built into the hills along the river.  Just Stunning!</p>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1594646744022929&width=500&show_text=true&height=822&appId" width={window.innerWidth > 575 ? "552" : "325"} height="792" style={iframeStyle} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
            <p className="escortedInfo"><a href="https://www.youtube.com/watch?v=6pECXxfzrUo&t=4s" target="_blank">Click here for a video with details!</a></p>

            <div className="escortedHeader">Italy’s Treasures Tour with TSG from April 9th–20th, 2022</div>
            <div className="escortedInfo">Explore the wonders of Northern Italy with our owners!  Have a private group dinner on an island in the middle of Lake Maggiore, stay in a Tuscan villa, explore Cinque Terre’s charming pastel villages, and take a gondola ride through the canals of Venice.  Excusive Group Rate of $4999 per person INCLUDING flights from Charlotte, NC , all transportation, some tours and about half your meals.</div>
            <div className="escortedInfo">Where else will you get a 4 star tour for 10 days in Italy for under $5K ?!  Special rate is good if deposited by September 2021.  Limited to 22 people and over half full already!  Just email <a href="mailto:heather@travelsalesgirl.com">heather@travelsalesgirl.com</a> or click <a href='https://gateway.gocollette.com/link/1051172' target="_blank">here for more info</a> or to get a deposit on the trip!</div>
        </div>
    )
}
