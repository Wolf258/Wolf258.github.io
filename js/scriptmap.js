if (navigator.geolocation) { 
    // Define las opciones antes de utilizarlas
    let options = {
        enableHighAccuracy: true,
        timeout: 5000, 
        maximumAge: 0 
    };

    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );

} else {
    alert("Los servicios de geolocalización no se encuentran disponibles");
}

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude; 

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 15
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'hello world'
    }).addTo(map);
    
    let control = L.Routing.control({  
        waypoints:[ 
             L.latLng(latitude,longitude),
             L.latLng(40.630766, -3.242896)
        ],
       language: "es" 

    }).addTo(map);




}

function error() {
    alert("No se pudo obtener la ubicación.");
}







