function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('show').innerHTML = "Not supported "
    }
}

function showPosition(position) {
    document.getElementById('show').innerHTML = "Latitude =" + position.coords.latitude +
        "<br> Longitude =" + position.coords.longitude;
}