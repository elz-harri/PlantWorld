console.log("this is plant mapper")

// Create a map of the United States of America//

//Initialize the map & set view to our chosen geographical coordinates & a zoom level
// View of US(active) N America(not part of US => inactive)

var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: ..., 
    tileSize: 512,
    zoomOffset: -1,
    acessToken: API_KEY,
    }).addTo(map);

L.geoJson(statesData).addTo(map);


// colorberewer 2.0 color advice for cartography: https://colorbrewer2.org/#type=sequential&scheme=YlGn&n=9
// https://colorbrewer2.org/#type=sequential&scheme=RdPu&n=9 

