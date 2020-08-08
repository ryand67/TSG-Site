import React, { useState } from 'react';
import './adultsOnly.css';

const AdultsOnly = () => {

    const [currentCountry, setCountry] = useState('Riviera Maya/Cancun');

    const cancunLinks=['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540565556097725&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.728746207279658&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540622576092023&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1029168537237422&show_text=true&width=552&height=880&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1547714015382869&show_text=true&width=552&height=792&appId']

    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }

    const loadAlbums = (arr) => {
        let result = arr.map(item => {
            return <iframe src={item} width="552" height="792" style={iframeStyle} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        })
        return result;
    }

    const handleArrayPassing = () => {
        if(currentCountry === 'Riviera Maya/Cancun') {
            return cancunLinks;
        }
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
            <h1 className="adultsOnlyCountryTitle">{currentCountry}</h1>
            <div className="fbAlbumsAdultsOnly">
                {loadAlbums(handleArrayPassing(currentCountry))}
            </div>
        </div>
    )
}

export default AdultsOnly;