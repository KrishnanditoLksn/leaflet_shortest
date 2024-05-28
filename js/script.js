let map = L.map('map').setView([-7.446807105538364, 111.03517857509681  ], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([-7.446807105538364, 111.03517857509681]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

L.Routing.control({
    waypoints: [
        L.latLng(-7.446807105538364, 111.03517857509681),
        L.latLng(-7.4435851388004215, 111.04131074421484)
    ],
    routeWhileDragging: true
}).addTo(map);