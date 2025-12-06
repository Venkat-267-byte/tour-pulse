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
            }
        });
    }

    // 2. Load Destinations (if on destinations page)
    const grid = document.getElementById('destinations-grid');
    if (grid && typeof destinations !== 'undefined') {
        loadPlaces(destinations);
    }

    // 3. Modal Logic
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-modal');
    if(closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
    }

});

// Function to render cards
function loadPlaces(data) {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = ''; // Clear current
    data.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <span class="tag">${place.category}</span>
            </div>
            <div class="card-info">
                <h3>${place.name}</h3>
                <p>${place.desc.substring(0, 60)}...</p>
                <button class="btn-link" onclick="openModal('${place.name}')">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Function to filter
function filterDestinations(category) {
    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter data
    if (category === 'All') {
        loadPlaces(destinations);
    } else {
        const filtered = destinations.filter(p => p.category === category);
        loadPlaces(filtered);
    }
}

// Function to open Modal
function openModal(name) {
    const place = destinations.find(p => p.name === name);
    const modal = document.getElementById('info-modal');
    
    document.getElementById('modal-img').src = place.image;
    document.getElementById('modal-title').innerText = place.name;
    document.getElementById('modal-cat').innerText = place.category;
    document.getElementById('modal-desc').innerText = place.desc;
    document.getElementById('modal-map').href = place.map;
    
    modal.style.display = "block";
}