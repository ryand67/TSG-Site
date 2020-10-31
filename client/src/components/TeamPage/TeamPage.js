import React from 'react';
import './teamPage.css';
import Profile from './PageParts/TeamPagePart';

export default function TeamPage() {

    const teamProfiles = [{
        name: 'Heather Dipietro',
        role: 'Owner and Ceo',
        desc: `​​Heather, Mom to two grown girls, caught the travel bug more than 15 years ago when she booked a 10th anniversary trip for herself and her husband to Mexico.  That trip was booked with the agency where Jenn was working and an instant friendship was born! After extensive training and extensive travel, Heather has turned a passion for planning romance travel into a career she truly loves as owner of TravelSalesGroup! She especially likes working with brides and grooms to create their dream destination weddings and  luxury honeymoons.  Her other passion is custom creating exclusive private villa or high end river cruise experiences for her ever growing list of luxury clientele.  The biggest compliment our TravelSalesGirl gets is referrals from past clients.  Heather specializes in Tahiti, Bora Bora, Africa, Europe, Mexico, Jamaica, Punta Cana, St. Lucia, St. Martin/St. Maarten, The Hawaiian Islands, Barbados, Anguilla, Antigua, Aruba, The Bahamas, AM Resorts, Royalton Resorts, Hard Rock Resorts, Sandals Resorts,  El Dorado and Azul Resorts, Belmond Resorts, Conrad Resorts, Honeymoons, River Cruises, and of course, Destination Weddings!  She has been honored to be the very first SLEX Saint Lucia Expert and has a seat on the exclusive Antigua and Barbuda Agent Advisory Board.  Jenn and Heather both love their collection of #travelsalesgroupies!!`,
        favDest: 'Her favorite destinations: Way too many to name them all but Bora Bora, Anguilla, Hawaii, Switzerland Antigua, St Lucia, and Mexico top the list.',
        phone: 'Direct Line: 518-885-8035',
        email: 'Heather@TravelSalesGirl.com',
        picture: 'http://nebula.wsimg.com/e61c221b59247ac95a06f8473ead1f49?AccessKeyId=B3B2E63AE054F167177D&disposition=0&alloworigin=1',
        urlId: 'Heather-DiPietro'
    }]
    
    return (
        <div className="teamPage">
            <h1 className="teamPageHeader">Our Team</h1>
            {/* <hr className="teamPageHr"/> */}
            {teamProfiles.map(agent => {
                return <Profile agent={agent} />
            })}
        </div>
    )
}
