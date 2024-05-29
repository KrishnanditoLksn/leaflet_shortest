let map = L.map('map').setView([-7.446807105538364, 111.03517857509681], 13);
let latLongitude1 = L.latLng(-7.446807105538364, 111.03517857509681)
let latLongitude2 = L.latLng(-7.4435851388004215, 111.04131074421484)

//create waypoint
let waypoint1 = new L.Routing.Waypoint(latLongitude1)
let waypoint2 = new L.Routing.Waypoint(latLongitude2)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);




L.Routing.control({
    waypoints: [
        latLongitude1, latLongitude2
    ],
    routeWhileDragging: true,
}).addTo(map);

let route = L.Routing.osrmv1();

route.route([waypoint1, waypoint2], (err, routes) => {
    if (!err) {
        let bestCalc = 1000000000000
        let bestRoute = 0

        for (let i in routes) {
            if (routes[i].summary.totalDistance < bestCalc) {
                bestRoute = i
                bestCalc = routes[i].summary.totalDistance
            }
        }
        // L.Routing.line(routes[bestRoute], {
        //     styles:[
        //         {
        //             color:'green',
        //             weight:'10  '
        //         }
        //     ]
        // }).addTo(map)

        console.log('best route', routes[bestRoute])
    }
})
