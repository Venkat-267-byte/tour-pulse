// --- DESTINATIONS DATA ---
const destinations = [
    { 
        name: "Charminar", 
        category: "Heritage", 
        crowd: "High", 
        food: "Nimrah Cafe (Irani Chai) & Hotel Shadab (Biryani)",
        image: "https://images.unsplash.com/photo-1560388414-b83c4852e642?q=80&w=1974", 
        desc: "The global icon of Hyderabad, built in 1591. Known for its stucco ornamentation and bustling bazaars.",
        map: "https://www.google.com/maps/search/?api=1&query=Charminar+Hyderabad"
    },
    { 
        name: "Golconda Fort", 
        category: "Heritage", 
        crowd: "Moderate", 
        food: "Haritha Restaurant & Swathi Tiffins",
        image: "https://images.unsplash.com/photo-1590425881474-783dfdf354eb?q=80&w=1974", 
        desc: "A massive medieval fortress known for its acoustic architecture and diamond mines.",
        map: "https://www.google.com/maps/search/?api=1&query=Golconda+Fort+Hyderabad"
    },
    { 
        name: "Hussain Sagar", 
        category: "Nature", 
        crowd: "Low", 
        food: "Eat Street & The Waterfront",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Hussain_Sagar_Lake_Hyderabad.jpg", 
        desc: "Asia's largest heart-shaped artificial lake, featuring a massive monolithic Buddha statue.",
        map: "https://www.google.com/maps/search/?api=1&query=Hussain+Sagar+Lake"
    },
    // ... (Keep other destinations if you wish, or use the abbreviated list for now)
    { 
        name: "Ramoji Film City", 
        category: "Entertainment", 
        crowd: "High", 
        food: "Hollywood Restaurant",
        image: "https://images.unsplash.com/photo-1626014903264-6df594411d2c?q=80", 
        desc: "The world's largest integrated film city complex." 
    }
];

// --- FACILITIES DATA (NEW) ---
const facilities = [
    // HOTELS
    {
        type: "Hotel",
        name: "Taj Falaknuma Palace",
        badge: "Luxury",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
        desc: "Experience royalty in this hilltop palace hotel.",
        contact: "+91 40 6629 8585"
    },
    {
        type: "Hotel",
        name: "ITC Kohenur",
        badge: "Premium",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80",
        desc: "Overlooking the Durgam Cheruvu lake in HITEC City.",
        contact: "+91 40 6766 0101"
    },
    {
        type: "Hotel",
        name: "Courtyard by Marriott",
        badge: "Comfort",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80",
        desc: "Located centrally near Hussain Sagar lake.",
        contact: "+91 40 2752 1222"
    },
    
    // FOOD
    {
        type: "Food",
        name: "Paradise Biryani",
        badge: "Iconic",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80",
        desc: "The legendary Hyderabadi Biryani experience.",
        contact: "Secunderabad Branch"
    },
    {
        type: "Food",
        name: "Nimrah Cafe",
        badge: "Cafe",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80",
        desc: "Famous for Irani Chai and Osmania Biscuits near Charminar.",
        contact: "Charminar"
    },
    {
        type: "Food",
        name: "Chutneys",
        badge: "Veg",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80",
        desc: "Best South Indian breakfast and thalis in the city.",
        contact: "Jubilee Hills"
    },

    // GUIDES
    {
        type: "Guide",
        name: "Ramesh Reddy",
        badge: "English/Hindi",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80",
        desc: "Certified heritage guide with 10+ years of experience.",
        contact: "Available for Charminar & Fort"
    },
    {
        type: "Guide",
        name: "Syesha Khan",
        badge: "English/Urdu",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80",
        desc: "Specialist in food walks and Old City history.",
        contact: "Available Weekends"
    }
];