import React, { useState } from 'react';
import './adultsOnly.css';

const AdultsOnly = () => {

    const [currentCountry, setCountry] = useState('Riviera Maya/Cancun');

<<<<<<< HEAD
    const cancunLinks = {
        title: 'Rivirea Maya/Cancun',
        links: ['https://www.facebook.com/travelsalesgroup/photos/?tab=album&album_id=540565556097725', 'https://www.facebook.com/travelsalesgroup/photos/?tab=album&album_id=728746207279658']
    }
=======
    const cancunLinks=['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540565556097725&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.728746207279658&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540622576092023&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1029168537237422&show_text=true&width=552&height=880&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1547714015382869&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370891783065104&show_text=true&width=552&height=697&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.136637486490536&show_text=true&width=552&height=773&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.369132076574408&show_text=true&width=552&height=735&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.593114350842845&show_text=true&width=552&height=798&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.134924809995137&show_text=true&width=552&height=773&appId']

    const cozumelLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.371507346336881&show_text=true&width=552&height=773&appId', ]

    const caboLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.728746207279658&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.553432428144371&show_text=true&width=552&height=817&appId']

    const antiguaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1206361439518130&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1208057662681841&show_text=true&width=552&height=792&appId']

    const stLuciaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1227140680773539&show_text=true&width=552&height=817&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1225337440953863&show_text=true&width=552&height=918&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.586953634792250&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.584551731699107&show_text=true&width=552&height=798&appId']

    const puntaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1031429930344616&show_text=true&width=552&height=668&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.355224327965183&show_text=true&width=552&height=830&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.948866478600962&show_text=true&width=552&height=817&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.352420944912188&show_text=true&width=552&height=754&appId']

    const jamaicaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.847292842091660&show_text=true&width=552&height=817&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.842279519259659&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.145846228902995&show_text=true&width=552&height=773&appId']

    const barbadosLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.657619981058948&show_text=true&width=552&height=792&appId']

    const stMartinLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.660281194126160&show_text=true&width=552&height=792&appId']

    const bahamasLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.549287251892222&show_text=true&width=552&height=804&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.511680725652875&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.513029642184650&show_text=true&width=552&height=792&appId']

    const arubaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.721663851321227&show_text=true&width=552&height=792&appId']

    const costaRicaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.570839836403630&show_text=true&width=552&height=817&appId']
>>>>>>> 3b19ff9a32eeff636cd40b3363a241eea8303d75

    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }

<<<<<<< HEAD
    const loadAlbums = (place) => {
        return <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540565556097725&show_text=true&width=552&height=792&appId" width="552" height="792" style={iframeStyle} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
=======
    const loadAlbums = (arr) => {
        let result = arr.map((item, i) => {
            return <iframe key={i} src={item} width="552" height="792" style={iframeStyle} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
        })
        return result;
>>>>>>> 3b19ff9a32eeff636cd40b3363a241eea8303d75
    }

    const handleArrayPassing = () => {
        if(currentCountry === 'Riviera Maya/Cancun') {
            return cancunLinks;
        } else if(currentCountry === 'Cozumel') {
            return cozumelLinks;
        } else if(currentCountry === 'Antigua') {
            return antiguaLinks;
        } else if(currentCountry === 'St. Lucia') {
            return stLuciaLinks;
        } else if(currentCountry === 'Punta Cana') {
            return puntaLinks;
        } else if(currentCountry === 'Jamaica') {
            return jamaicaLinks;
        } else if(currentCountry === 'Barbados') {
            return barbadosLinks;
        } else if(currentCountry === 'St. Martin') {
            return stMartinLinks;
        } else if(currentCountry === 'Bahamas') {
            return bahamasLinks;
        } else if(currentCountry === 'Aruba') {
            return arubaLinks;
        } else if(currentCountry === 'Costa Rica') {
            return costaRicaLinks;
        } else if(currentCountry === 'Cabo San Lucas') {
            return caboLinks;
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
                <option value="St. Martin">St. Martin/St. Maarten</option>
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