document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuToggle){
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
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

    // 2. Weather Alert
    initWeatherAlert();

    // 3. Load Destinations
    const grid = document.getElementById('destinations-grid');
    if (grid && typeof destinations !== 'undefined') {
        loadPlaces(destinations);
    }

    // 4. Modal Logic (Generic)
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-modal');
    if(closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
    }
});

// --- RENDER CARDS FUNCTION ---
function loadPlaces(data) {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = ''; // Clear current content
    
    data.forEach(place => {
        // Logic for Crowd Indicators
        let crowdClass = 'crowd-low';
        let dotColor = 'green';
        if(place.crowd === 'Moderate') { crowdClass = 'crowd-moderate'; dotColor = 'yellow'; }
        if(place.crowd === 'High') { crowdClass = 'crowd-high'; dotColor = 'red'; }

        // Logic for Maps
        const mapQuery = encodeURIComponent(place.name + " Hyderabad");
        const mapLink = `http://googleusercontent.com/maps.google.com/search?q=${mapQuery}`;

        // Create Card HTML
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="height: 220px; width: 100%; background-image: url('${place.image}'); background-size: cover; background-position: center; position: relative;">
                <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem;">
                    ${place.category}
                </span>
            </div>
            <div style="padding: 20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <h3 style="margin: 0; font-family: sans-serif;">${place.name}</h3>
                </div>
                
                <div style="margin-bottom: 12px;">
                    <span class="crowd-badge ${crowdClass}">
                        <span class="dot ${dotColor}"></span> ${place.crowd} Crowd
                    </span>
                </div>

                <p style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">${place.desc.substring(0, 100)}...</p>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 8px; font-size: 0.85rem; color: #555; border: 1px solid #eee;">
                    <i class="fas fa-utensils" style="color: #8A1538; margin-right: 6px;"></i>
                    <strong style="color: #333;">Eat Nearby:</strong> ${place.food || 'Not available'}
                </div>

                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="${mapLink}" target="_blank" style="background: #8A1538; color: white; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 0.9rem;">
                        <i class="fas fa-map-marker-alt"></i> Map
                    </a>
                    
                    <button class="btn-audio" onclick="playAudio('${place.name.replace(/'/g, "\\'")}', '${place.desc.replace(/'/g, "\\'")}')">
                        <i class="fas fa-volume-up"></i> Listen
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- WEATHER ALERT LOGIC ---
function initWeatherAlert() {
    const currentCondition = 'Heatwave'; // Default simulation
    const navbar = document.querySelector('.navbar');

    if(navbar && !document.getElementById('weather-alert-banner')) {
        const banner = document.createElement('div');
        banner.id = 'weather-alert-banner';
        banner.className = 'weather-banner';

        if(currentCondition === 'Rainy') {
            banner.className += ' alert-rain';
            banner.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i> <strong>Rain Alert:</strong> Heavy rains predicted. Carry an umbrella.';
            banner.style.display = 'block';
            navbar.parentNode.insertBefore(banner, navbar.nextSibling);
        } else if (currentCondition === 'Heatwave') {
            banner.className += ' alert-heat';
            banner.innerHTML = '<i class="fas fa-sun"></i> <strong>Heatwave Warning:</strong> Temperatures > 40°C. Stay hydrated.';
            banner.style.display = 'block';
            navbar.parentNode.insertBefore(banner, navbar.nextSibling);
        }
    }
}

// --- AUDIO GUIDE LOGIC ---
function playAudio(name, text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `Now exploring ${name}. ${text}`;
        utterance.lang = 'en-IN'; 
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Audio Guide not supported in this browser.");
    }
}