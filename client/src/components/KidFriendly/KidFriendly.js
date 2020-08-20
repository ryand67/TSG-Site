import React, { useState } from 'react';

export default function() {

    const [currentCountry, setCountry] = useState('Riviera Maya/Cancun');
    const [currentWindowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    })

    const cancunLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370957699725179&show_text=true&width=552&height=716&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.368619976625618&show_text=true&width=552&height=830&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.743295289158083&show_text=true&width=552&height=823&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.736480499839562&show_text=true&width=552&height=668&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370324626455153&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.361200884034194&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.369631643191118&show_text=true&width=552&height=811&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.379974178823531&show_text=true&width=552&height=754&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.348374485316834&show_text=true&width=552&height=792&appId']

    const cabosLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.556756611145286&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.553867231434224&show_text=true&width=552&height=798&appId']

    const puertoVallartaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1381820481972224&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.551089615045319&show_text=true&width=552&height=792&appId']

    const antiguaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1204069823080625&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1209018725919068&show_text=true&width=552&height=668&appId']

    const stLuciaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1228191174001823&show_text=true&width=552&height=836&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1222010287953245&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1220465011441106&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1232444050243202&show_text=true&width=552&height=817&appId' ,'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1228893113931629&show_text=true&width=552&height=830&appId']

    const puntaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.632038946950385&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.950783718409238&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.361893753964907&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.349362315218051&show_text=true&width=552&height=773&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.350105671810382&show_text=true&width=552&height=792&appId']

    const jamaicaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.847856772035267&show_text=true&width=552&height=874&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.145849352236016&show_text=true&width=552&height=792&appId']
    
    const barbadosLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.664327973721482&show_text=true&width=552&height=792&appId']

    const bahamasLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.511542842333330&show_text=true&width=552&height=817&appId']

    const arubaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.723724197781859&show_text=true&width=552&height=836&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.718985568255722&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.729212790566333&show_text=true&width=552&height=817&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.721663851321227&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.714848548669424&show_text=true&width=552&height=792&appId']

    const costaRicaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.573060359514911&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.573203919500555&show_text=true&width=552&height=798&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.574513299369617&show_text=true&width=552&height=792&appId']

    const anguillaLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.659885684165711&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.661550370665909&show_text=true&width=552&height=792&appId']

    const boraBoraLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1539645782856359&show_text=true&width=552&height=811&appId']

    const virginIslandsLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1333268953494044&show_text=true&width=552&height=817&appId']

    const hawaiiLinks = ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1185265481627726&show_text=true&width=552&height=861&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1043038545850421&show_text=true&width=552&height=668&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1036723446481931&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1036540509833558&show_text=true&width=552&height=792&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.401881566632792&show_text=true&width=552&height=773&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.399907700163512&show_text=true&width=552&height=773&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.422552474565701&show_text=true&width=552&height=811&appId', 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.403157403171875&show_text=true&width=552&height=811&appId']

    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }
    
    const loadAlbums = (arr) => {
        let result = arr.map((item, i) => {
            return <iframe key={i} src={item} width={window.innerWidth > 575 ? "552" : "325"} height="792" style={iframeStyle} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
        })
        return result;
    }
    
    const handleArrayPassing = () => {
        if(currentCountry === 'Riviera Maya/Cancun') {
            return cancunLinks;
        } else if(currentCountry === 'Cabo/Los Cabos') {
            return cabosLinks;
        } else if(currentCountry === 'Puerto Vallarta') {
            return puertoVallartaLinks;
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
        } else if(currentCountry === 'Bahamas') {
            return bahamasLinks;
        } else if(currentCountry === 'Aruba') {
            return arubaLinks;
        } else if(currentCountry === 'Costa Rica') {
            return costaRicaLinks;
        } else if(currentCountry === 'Anguilla') {
            return anguillaLinks;
        } else if(currentCountry === 'Bora Bora') {
            return boraBoraLinks;
        } else if(currentCountry === 'US Virgin Islands') {
            return virginIslandsLinks;
        } else if(currentCountry === 'Hawaii') {
            return hawaiiLinks;
        }
    }

    const handleSelectChange = (e) => {
        setCountry(e.target.value);
    }

    return (
        <div className="adultsOnlyDiv">
            <h1 className="adultsOnlySelectHeading">Select Your Destination:</h1>
            <select name="countrySelect" id="kidCountrySelect" className="adultCountrySelect" onChange={(e) => handleSelectChange(e)}>
                <option value="Riviera Maya/Cancun">Riviera Maya/Cancun</option>
                <option value="Cabo/Los Cabos">Cabo/Los Cabos</option>
                <option value="Puerto Vallarta">Puerto Vallarta</option>
                <option value="Antigua">Antigua</option>
                <option value="St. Lucia">St. Lucia</option>
                <option value="Punta Cana">Punta Cana</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Barbados">Barbados</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Aruba">Aruba</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Bora Bora">Bora Bora</option>
                <option value="US Virgin Islands">US Virgin Islands</option>
                <option value="Hawaii">Hawaii</option>
            </select>
            <h1 className="adultsOnlyCountryTitle">{currentCountry}</h1>
            <div className="fbAlbumsAdultsOnly">
                {loadAlbums(handleArrayPassing(currentCountry))}
            </div>
        </div>
    )
}