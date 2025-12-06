document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuToggle){
        menuToggle.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            if(!isFlex) {
                // Mobile menu styles
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '999';
            }
        });
    }

    // 2. Load Destinations Page
    const destGrid = document.getElementById('destinations-grid');
    if (destGrid && typeof destinations !== 'undefined') {
        loadPlaces(destinations);
        if(typeof initWeatherAlert === 'function') initWeatherAlert();
    }

    // 3. Load Facilities Page (NEW)
    const facGrid = document.getElementById('facilities-grid');
    if (facGrid && typeof facilities !== 'undefined') {
        loadFacilities(facilities);
    }
});

// --- RENDER DESTINATIONS ---
function loadPlaces(data) {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = ''; 
    
    data.forEach(place => {
        let crowdClass = place.crowd === 'High' ? 'crowd-high' : (place.crowd === 'Moderate' ? 'crowd-moderate' : 'crowd-low');
        let dotColor = place.crowd === 'High' ? 'red' : (place.crowd === 'Moderate' ? 'yellow' : 'green');
        const mapLink = `http://googleusercontent.com/maps.google.com/search?q=${encodeURIComponent(place.name + " Hyderabad")}`;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="height: 220px; width: 100%; background-image: url('${place.image}'); background-size: cover; background-position: center; position: relative;">
                <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem;">${place.category}</span>
            </div>
            <div style="padding: 20px;">
                <h3 style="margin: 0 0 10px;">${place.name}</h3>
                <div style="margin-bottom: 12px;">
                    <span class="crowd-badge ${crowdClass}"><span class="dot ${dotColor}"></span> ${place.crowd} Crowd</span>
                </div>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">${place.desc.substring(0, 80)}...</p>
                <div style="display: flex; gap: 10px;">
                    <a href="${mapLink}" target="_blank" class="btn-audio" style="text-decoration:none;"><i class="fas fa-map-marker-alt"></i> Map</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- RENDER FACILITIES (NEW) ---
function loadFacilities(data) {
    const grid = document.getElementById('facilities-grid');
    grid.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="height: 200px; width: 100%; background-image: url('${item.image}'); background-size: cover; background-position: center; position: relative;">
                <span style="position: absolute; top: 10px; right: 10px; background: #8A1538; color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; font-weight:bold;">${item.badge}</span>
            </div>
            <div style="padding: 20px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0; font-size:1.2rem;">${item.name}</h3>
                    <span style="color:#f1c40f; font-weight:bold;"><i class="fas fa-star"></i> ${item.rating}</span>
                </div>
                <p style="color: #888; font-size: 0.9rem; margin-top:5px;">${item.type}</p>
                <p style="color: #555; font-size: 0.9rem; margin: 10px 0;">${item.desc}</p>
                <div style="border-top: 1px solid #eee; padding-top: 10px; color: #333; font-size: 0.9rem; font-weight: 500;">
                    <i class="fas fa-phone-alt" style="color: #8A1538; margin-right: 8px;"></i> ${item.contact}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- FILTER FACILITIES LOGIC ---
function filterFacilities(category) {
    // 1. Update Buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(category) || (category === 'All' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    // 2. Filter Data
    if (category === 'All') {
        loadFacilities(facilities);
    } else {
        const filtered = facilities.filter(item => item.type === category);
        loadFacilities(filtered);
    }
}