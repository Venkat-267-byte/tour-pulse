let userLat = 17.3850; // Default: Hyderabad
let userLng = 78.4867;
let map, marker;

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    getLocation();
});

// 1. Initialize the Map
function initMap() {
    // Create map centered on Hyderabad initially
    map = L.map('safety-map').setView([userLat, userLng], 13);

    // Load OpenStreetMap tiles (Free)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a placeholder marker
    marker = L.marker([userLat, userLng]).addTo(map)
        .bindPopup("Locating you...")
        .openPopup();
}

// 2. Get Automatic Location
function getLocation() {
    const status = document.getElementById('location-status');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        status.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// 3. Success: Show Position
function showPosition(position) {
    userLat = position.coords.latitude;
    userLng = position.coords.longitude;
    
    const status = document.getElementById('location-status');
    status.innerHTML = `<i class="fas fa-map-marker-alt"></i> Location Detected: ${userLat.toFixed(4)}, ${userLng.toFixed(4)}`;
    status.style.color = "green";

    // Update Map
    map.setView([userLat, userLng], 15);
    marker.setLatLng([userLat, userLng])
        .bindPopup("<b>You are here</b><br>Accurate within " + position.coords.accuracy + " meters")
        .openPopup();
}

// 4. Error Handling
function showError(error) {
    const status = document.getElementById('location-status');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            status.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            status.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            status.innerHTML = "The request to get user location timed out.";
            break;
        default:
            status.innerHTML = "An unknown error occurred.";
    }
}

// 5. Find Nearby (Police/Hospital)
// This opens Google Maps with a dynamic search query based on current location
function findNearby(type) {
    const query = `${type} near me`;
    // If we have coordinates, use them to center the search
    const url = `https://www.google.com/maps/search/${query}/@${userLat},${userLng},14z`;
    window.open(url, '_blank');
}

// 6. Share Live Location via WhatsApp
function shareLocation() {
    const googleMapsLink = `https://www.google.com/maps?q=${userLat},${userLng}`;
    const message = `SOS! I need help. Here is my current location: ${googleMapsLink}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}