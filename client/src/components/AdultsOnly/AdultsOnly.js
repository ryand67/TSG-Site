import React, { useState } from 'react';
import './adultsOnly.css';

const AdultsOnly = () => {

    const [currentCountry, setCountry] = useState('Riviera Maya/Cancun');

    const cancunLinks = {
        title: 'Rivirea Maya/Cancun',
        links: ['https://www.facebook.com/travelsalesgroup/photos/?tab=album&album_id=540565556097725', 'https://www.facebook.com/travelsalesgroup/photos/?tab=album&album_id=728746207279658']
    }

    const iframeStyle = {
        border: 'none',
        overflow: 'hidden',
        width: '552',
        height: '792'
    }

    const loadAlbums = (place) => {
        return <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540565556097725&show_text=true&width=552&height=792&appId" width="552" height="792" style={iframeStyle} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    }

    const handleSelectChange = (e) => {
        setCountry(e.target.value);
    }

    return (
        <div className="adultsOnlyDiv">
            <select name="countrySelect" id="adultCountrySelect" className="adultCountrySelect" onChange={(e) => handleSelectChange(e)}>
                <option value="Riviera Maya/Cancun">Riviera Maya/Cancun, Mexico</option>
                <option value="Cozumel">Cozumel, Mexico</option>
                <option value="Cabo San Lucas">Cabo San Lucas, Mexico</option>
                <option value="Antigua">Antigua</option>
                <option value="St. Lucia">St. Lucia</option>
                <option value="Punta Cana">Punta Cana, Domincan Republic</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Barbados">Barbados</option>
                <option value="St. Martin/St. Maarten">St. Martin/St. Maarten</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Aruba">Aruba</option>
                <option value="Costa Rica">Costa Rica</option>
            </select>
            <div className="fbAlbumsAdultsOnly">
                {loadAlbums(cancunLinks)}
            </div>
        </div>
    )
}

export default AdultsOnly;