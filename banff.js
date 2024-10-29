var map = L.map('map').setView([35.607, -82.518], 14); // Adjusted zoom level


L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var route = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-82.518, 35.607], 
                    [-82.520, 35.608], 
                    [-82.522, 35.609]  
                ]
            },
            "properties": {
                "name": "Sample Hiking Route",
                "description": "A scenic trail with beautiful overlooks and a waterfall."
            }
        }
    ]
};


L.geoJSON(route, {
    style: function(feature) {
        return {
            color: "#4682B4",
            weight: 4,
            opacity: 0.7,
            dashArray: "5, 10"
        };
    },
    onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name + ": " + feature.properties.description);
        }
    }
}).addTo(map);


var startMarker = L.marker([35.607, -82.518]).addTo(map)
    .bindTooltip("Trail Start", {permanent: true, direction: "top"});

var endMarker = L.marker([35.609, -82.522]).addTo(map)
    .bindTooltip("Trail End", {permanent: true, direction: "top"});

var midMarker1 = L.marker([35.608, -82.520]).addTo(map)
    .bindTooltip("Scenic Overlook", {permanent: true, direction: "top"});

var midMarker2 = L.marker([35.6085, -82.521]).addTo(map)
    .bindTooltip("Waterfall", {permanent: true, direction: "top"});


var group = L.layerGroup([startMarker, endMarker, midMarker1, midMarker2]).addTo(map);
map.fitBounds(group.getBounds());
