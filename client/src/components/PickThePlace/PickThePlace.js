import React, { useState } from 'react'

function PickThePlace() {
    const [currentCountry, setCountry] = useState('Riviera Maya/Cancun');
    const [currentWindowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    })

    const cancunLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%3Fvanity%3Dtravelsalesgroup%26set%3Da.1927358727418394&width=500&show_text=true&height=822&appId', 'Belmond Maroma'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1920766931410907&width=500&show_text=true&height=765&appId', 'Royalton Chic Suites Cancun'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%3Fvanity%3Dtravelsalesgroup%26set%3Da.1928242513996682&width=500&show_text=true&height=765&appId', 'Planet Hollywood Cancun Beach Resort'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1928247200662880&width=500&show_text=true&height=759&appId', 'Blue Diamond Luxury Boutique Resort'] ,['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540565556097725&show_text=true&width=552&height=792&appId', 'Secrets Akumal'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.728746207279658&show_text=true&width=552&height=792&appId', 'El Dorado Maroma Palafito'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.540622576092023&show_text=true&width=552&height=792&appId', 'El Dorado Maroma Resort and Spa'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1029168537237422&show_text=true&width=552&height=880&appId', 'UNICO'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1547714015382869&show_text=true&width=552&height=792&appId', 'Atelier Playa Mujeres'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370891783065104&show_text=true&width=552&height=697&appId', 'Hard Rock Rivera Maya—Heaven Section'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.136637486490536&show_text=true&width=552&height=773&appId', 'Secrets Maroma Beach'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.369132076574408&show_text=true&width=552&height=735&appId', 'Secrets The Vine'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.593114350842845&show_text=true&width=552&height=798&appId', 'Secrets Capri'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.134924809995137&show_text=true&width=552&height=773&appId', 'El Dorado Casitas Royale'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1813226355498299&show_text=true&width=552&height=804&appId', 'Le Blanc Cancun'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370957699725179&show_text=true&width=552&height=716&appId', 'Hard Rock Riviera Maya - Hacienda Section'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.368619976625618&show_text=true&width=552&height=830&appId', 'Now Sapphire'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.743295289158083&show_text=true&width=552&height=823&appId', 'Dreams Playa Mujeres'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.736480499839562&show_text=true&width=552&height=668&appId', 'Hyatt Ziva Cancun'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.370324626455153&show_text=true&width=552&height=792&appId', 'Royalton Riviera Cancun'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.361200884034194&show_text=true&width=552&height=792&appId', 'Azul Beach'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.369631643191118&show_text=true&width=552&height=811&appId', 'Dreams Riviera Cancun'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.379974178823531&show_text=true&width=552&height=754&appId', 'Azul Sensatori'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.348374485316834&show_text=true&width=552&height=792&appId', 'Hard Rock Cancun'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%3Fvanity%3Dtravelsalesgroup%26set%3Da.1808436389310629&show_text=true&width=552&height=811&appId', 'Dreams Vista'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1800473396773595&show_text=true&width=552&height=811&appId', 'Dreams Natura'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1813959008758367&show_text=true&width=552&height=836&appId', 'Palmaia, House of Aia'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1813980465422888&show_text=true&width=552&height=817&appId', 'The Fives, Oceanfront Resort']]

    const cozumelLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.371507346336881&show_text=true&width=552&height=773&appId', 'Secrets Aura']]

    const cabosLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.573211739499773&width=500&show_text=true&height=759&appId', 'Breathless Cabo'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.553432428144371&show_text=true&width=552&height=817&appId', 'Secrets Puerto Los Cabos'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.556756611145286&show_text=true&width=552&height=792&appId', 'One and Only Palmilla'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.553867231434224&show_text=true&width=552&height=798&appId', 'Dreams Los Cabos']]

    const puertoVallartaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1381820481972224&show_text=true&width=552&height=792&appId', 'Dreams Villa Magna'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.551089615045319&show_text=true&width=552&height=792&appId', 'Hard Rock Vallarta Bay']]
    
    const antiguaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1206361439518130&show_text=true&width=552&height=792&appId', 'Galley Bay Antigua'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1208057662681841&show_text=true&width=552&height=792&appId', 'Hermitage Bay Antigua'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1204069823080625&show_text=true&width=552&height=792&appId', 'Blue Waters Antigua'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1895429137278020&width=500&show_text=true&height=803&appId', 'Curtain Bluff'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1906497876171146&width=500&show_text=true&height=809&appId', 'Keyonna Beach Resort'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1906359852851615&width=500&show_text=true&height=784&appId', "Coco's Hotel"], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1901514853336115&width=500&show_text=true&height=828&appId', "Hammock Cove"], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1906316962855904&width=500&show_text=true&height=746&appId', "Hodge's Bay Resort"], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1889564954531105&width=500&show_text=true&height=759&appId', "Inn at English Harbour"]] 

    const stLuciaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1227140680773539&show_text=true&width=552&height=817&appId', 'Calabash Cove St. Lucia'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1225337440953863&show_text=true&width=552&height=918&appId', 'Anse Chastenet and Jade Mountain'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.586953634792250&show_text=true&width=552&height=792&appId', 'Rendezvous'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.584551731699107&show_text=true&width=552&height=798&appId', 'Sandals Grand St. Lucian'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1228191174001823&show_text=true&width=552&height=836&appId', 'Sugar Beach'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1222010287953245&show_text=true&width=552&height=792&appId', 'Royalton St Lucia'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1220465011441106&show_text=true&width=552&height=792&appId', 'The Landings'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1232444050243202&show_text=true&width=552&height=817&appId', 'Harbor Club'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1228893113931629&show_text=true&width=552&height=830&appId', 'Cap Maison']]

    const puntaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.356548521166097&width=500&show_text=true&height=778&appId', 'Secrets Royal Beach'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1031429930344616&show_text=true&width=552&height=668&appId', 'Sanctuary Cap Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.355224327965183&show_text=true&width=552&height=830&appId', 'Breathless Punta Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.948866478600962&show_text=true&width=552&height=817&appId', 'Secrets Cap Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.352420944912188&show_text=true&width=552&height=754&appId', 'Iberostar Grand Bavaro'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.632038946950385&show_text=true&width=552&height=792&appId', 'Nickelodeon Resort'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.950783718409238&show_text=true&width=552&height=792&appId', 'Now Onyx Punta Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.361893753964907&show_text=true&width=552&height=792&appId', 'Dreams Punta Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.349362315218051&show_text=true&width=552&height=773&appId', 'Dreams Palm Beach'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.350105671810382&show_text=true&width=552&height=792&appId', 'Royalton Punta Cana'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.350965815057701&width=500&show_text=true&height=759&appId', 'Zoetry Aqua Punta Cana']]

    const jamaicaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.847292842091660&show_text=true&width=552&height=817&appId', 'Breathless Montego Bay'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.842279519259659&show_text=true&width=552&height=792&appId', 'Secrets St. James'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.145846228902995&show_text=true&width=552&height=773&appId', 'Iberostar Grand Rose Hall'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.847856772035267&show_text=true&width=552&height=874&appId', 'Royalton Negril'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.145849352236016&show_text=true&width=552&height=792&appId', 'Iberostar Rose Hall Suites']]
    
    const barbadosLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.657619981058948&show_text=true&width=552&height=792&appId', 'Sandals Barbados'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.664327973721482&show_text=true&width=552&height=792&appId', 'Sandy Lane']]

    const stMartinLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.660281194126160&show_text=true&width=552&height=792&appId', 'Sonesta Ocean Point']]

    const bahamasLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.549287251892222&show_text=true&width=552&height=804&appId', 'RIU Palace Paradise Island'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.511680725652875&show_text=true&width=552&height=792&appId', 'Sandals Emerald Bay'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.513029642184650&show_text=true&width=552&height=792&appId', 'Sandals Royal Bahamian'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.511542842333330&show_text=true&width=552&height=817&appId', 'Atlantis Paradise Island']]

    const arubaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.721663851321227&show_text=true&width=552&height=792&appId', 'Renaissance Aruba Marina Resort and Casino'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.714399948714284&show_text=true&width=552&height=792&appId', 'Bucuti and Tara Beach Resort'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.723724197781859&show_text=true&width=552&height=836&appId', 'Barcelo Aruba'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.718985568255722&show_text=true&width=552&height=792&appId', 'Hyatt Regency Aruba'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.729212790566333&show_text=true&width=552&height=817&appId', 'Manchebo Resort'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.721663851321227&show_text=true&width=552&height=792&appId', 'Rennaissance Aruba Resort and Casino'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.714848548669424&show_text=true&width=552&height=792&appId', 'Marriott Resort and Stellaris Casino']]

    const costaRicaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.570839836403630&show_text=true&width=552&height=817&appId', 'Secrets Papagayo'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.573060359514911&show_text=true&width=552&height=792&appId', 'Dreams Las Mareas'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.573203919500555&show_text=true&width=552&height=798&appId', 'Four Seasons'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.574513299369617&show_text=true&width=552&height=792&appId', 'Andaz Papagayo']]

    const anguillaLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.659885684165711&show_text=true&width=552&height=792&appId', 'Cap Jaluca'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.661550370665909&show_text=true&width=552&height=792&appId', 'Zemi Beach Resort and Spa']]

    const boraBoraLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1539645782856359&show_text=true&width=552&height=811&appId', 'Conrad Bora Bora']]

    const virginIslandsLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1333268953494044&show_text=true&width=552&height=817&appId', 'The Buccaneer (St. Croix)']]

    const hawaiiLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1185265481627726&show_text=true&width=552&height=861&appId', 'Turtle Bay(Oahu)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1043038545850421&show_text=true&width=552&height=668&appId', 'The Royal Hawaiian (Oahu)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1036723446481931&show_text=true&width=552&height=792&appId', 'Outrigger Reef Waikiki (Oahu)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1036540509833558&show_text=true&width=552&height=792&appId', 'Kahala Luxury Resort (Oahu)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.401881566632792&show_text=true&width=552&height=773&appId', 'Grand Hyatt (Kauai)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.399907700163512&show_text=true&width=552&height=773&appId', 'Grand Wailea (Maui)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.422552474565701&show_text=true&width=552&height=811&appId', 'Sheraton Kauai'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.403157403171875&show_text=true&width=552&height=811&appId', 'Fairmont Kea Lani (Maui)'], ['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1813928602094741&show_text=true&width=552&height=811&appId', 'Aulani - A Disney Resort and Spa']]

    const usLinks = [['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.1904715556349378&width=500&show_text=true&height=803&appId', "Disney's Wilderness Lodge"]]

    const tahitiLinks =[['https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fvanity%3Dtravelsalesgroup%26set%3Da.2000170753470524&width=500&show_text=true&height=616&appId', 'Hilton Moorea']]

    const iframeStyle = {
        border: 'none',
        overflow: 'hidden'
    }
    
    const loadAlbums = (arr) => {
        let result = arr.map((item, i) => {
            return (
            <>
                <h1 className="fbHeader">{item[1]}</h1>
                <iframe alt={item[1]} loading="lazy" key={i} src={item[0]} width={window.innerWidth > 575 ? "552" : "325"} height="792" style={iframeStyle} scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
            </>
            )
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
        } else if(currentCountry === 'Cozumel') {
            return cozumelLinks;
        } else if(currentCountry === 'St. Martin') {
            return stMartinLinks;
        } else if(currentCountry === "US") {
            return usLinks;
        } else if(currentCountry === "Tahiti") {
            return tahitiLinks;
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
                <option value="Tahiti">Tahiti</option>
                <option value="Antigua">Antigua</option>
                <option value="Cozumel">Cozumel</option>
                <option value="St. Lucia">St. Lucia</option>
                <option value="St. Martin">St. Martin</option>
                <option value="Punta Cana">Punta Cana</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Barbados">Barbados</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Aruba">Aruba</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Bora Bora">Bora Bora</option>
                <option value="US Virgin Islands">US Virgin Islands</option>
                <option value="US">Continental US</option>
                <option value="Hawaii">Hawaii</option>
            </select>
            <h1 className="adultsOnlyCountryTitle">{currentCountry}</h1>
            <div className="fbAlbumsAdultsOnly">
                {loadAlbums(handleArrayPassing(currentCountry))}
            </div>
        </div>
    )
}

export default PickThePlace
