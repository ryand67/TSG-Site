import React, { useState } from 'react';
import './adultsOnly.css';

const AdultsOnly = () => {

    const [currentCountry, setCountry] = useState('Riviera Maya/Cancun');
    const [currentWindowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    })

    const cancunLinks=[['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540565556097725&show_text=true&width=552&height=792&appId', 'Secrets Akumal'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.728746207279658&show_text=true&width=552&height=792&appId', 'El Dorado Maroma Palafito'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540622576092023&show_text=true&width=552&height=792&appId', 'El Dorado Maroma Resort and Spa'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1029168537237422&show_text=true&width=552&height=880&appId', 'UNICO'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1547714015382869&show_text=true&width=552&height=792&appId', 'Atelier Playa Mujeres'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370891783065104&show_text=true&width=552&height=697&appId', 'Hard Rock Rivera Maya—Heaven Section'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.136637486490536&show_text=true&width=552&height=773&appId', 'Secrets Maroma Beach'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.369132076574408&show_text=true&width=552&height=735&appId', 'Secrets The Vine'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.593114350842845&show_text=true&width=552&height=798&appId', 'Secrets Capri'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.134924809995137&show_text=true&width=552&height=773&appId', 'El Dorado Casitas Royale'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1813226355498299&show_text=true&width=552&height=804&appId', 'Le Blanc Cancun']]

    const cozumelLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.371507346336881&show_text=true&width=552&height=773&appId', 'Secrets Aura']]

    const caboLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.728746207279658&show_text=true&width=552&height=792&appId', 'Breathless Cabo'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.553432428144371&show_text=true&width=552&height=817&appId', 'Secrets Puerto Los Cabos']]

    const antiguaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1206361439518130&show_text=true&width=552&height=792&appId', 'Galley Bay Antigua'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1208057662681841&show_text=true&width=552&height=792&appId', 'Hermitage Bay Antigua']]

    const stLuciaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1227140680773539&show_text=true&width=552&height=817&appId', 'Calabash Cove St. Lucia'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1225337440953863&show_text=true&width=552&height=918&appId', 'Anse Chastenet and Jade Mountain'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.586953634792250&show_text=true&width=552&height=792&appId', 'Rendezvous'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.584551731699107&show_text=true&width=552&height=798&appId', 'Sandals Grand St. Lucian']]

    const puntaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1031429930344616&show_text=true&width=552&height=668&appId', 'Sanctuary Cap Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.355224327965183&show_text=true&width=552&height=830&appId', 'Breathless Punta Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.948866478600962&show_text=true&width=552&height=817&appId', 'Secrets Cap Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.352420944912188&show_text=true&width=552&height=754&appId', 'Iberostar Grand Bavaro']]

    const jamaicaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.847292842091660&show_text=true&width=552&height=817&appId', 'Breathless Montego Bay'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.842279519259659&show_text=true&width=552&height=792&appId', 'Secrets St. James'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.145846228902995&show_text=true&width=552&height=773&appId', 'Iberostar Grand Rose Hall']]

    const barbadosLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.657619981058948&show_text=true&width=552&height=792&appId', 'Sandals Barbados']]

    const stMartinLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.660281194126160&show_text=true&width=552&height=792&appId', 'Sonesta Ocean Point']]

    const bahamasLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.549287251892222&show_text=true&width=552&height=804&appId', 'RIU Palace Paradise Island'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.511680725652875&show_text=true&width=552&height=792&appId', 'Sandals Emerald Bay'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.513029642184650&show_text=true&width=552&height=792&appId', 'Sandals Royal Bahamian']]

    const arubaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.721663851321227&show_text=true&width=552&height=792&appId', 'Renaissance Aruba Marina Resort and Casino'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.714399948714284&show_text=true&width=552&height=792&appId', 'Bucuti and Tara Beach Resort']]

    const costaRicaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.570839836403630&show_text=true&width=552&height=817&appId', 'Secrets Papagayo']]

    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }

    const loadAlbums = (arr) => {
        let result = arr.map((item, i) => {
            return (
                <>
                    <h1 className="fbHeader">{item[1]}</h1>
                    <iframe key={i} src={item[0]} width={window.innerWidth > 575 ? "552" : "325"} height="792" style={iframeStyle} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
                </>
            )
        })
        return result;
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
            <h1 className="adultsOnlySelectHeading">Select Your Destination:</h1>
            <select name="countrySelect" id="adultCountrySelect" className="adultCountrySelect" onChange={(e) => handleSelectChange(e)}>
                <option value="Riviera Maya/Cancun">Riviera Maya/Cancun</option>
                <option value="Cozumel">Cozumel</option>
                <option value="Cabo San Lucas">Cabo San Lucas</option>
                <option value="Antigua">Antigua</option>
                <option value="St. Lucia">St. Lucia</option>
                <option value="Punta Cana">Punta Cana</option>
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